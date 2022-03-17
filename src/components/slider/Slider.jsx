import React, { useEffect, useRef, useState } from 'react';
import { Container, Img, NextArrow, PrevArrow } from './SliderStyles';
import useImage from '../../hooks/useImage';


const Slider = (props) => {

    const [animationID, setAnimationID] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [startPosition, setStartPosition] = useState(0);

    const slideShow = useRef(null);
    const slider = useRef(null);
    const intervalSlideShow = useRef(null);

    const slides = Array.from(document.querySelectorAll('.slide'));

    const next = () => {
        if (!slideShow.current) return;
        if (slideShow.current.children.length > 1) {
            const firstElement = slideShow.current.children[0];
            const slideSize = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transition = 'all 300ms ease-out';
            slideShow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = 'translateX(0)';

                slideShow.current.appendChild(firstElement);

                slideShow.current.removeEventListener('transitionend', transition);
            }

            slideShow.current.addEventListener('transitionend', transition);
        }
    }

    const prev = () => {
        if (slideShow.current.children.length > 1) {
            const index = slideShow.current.children.length - 1;
            const lastElement = slideShow.current.children[index];
            const slideSize = slideShow.current.children[0].offsetWidth;

            slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);
            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = 'all 300ms ease-out';
                slideShow.current.style.transform = 'translateX(0)';
            }, 30);
        }
    }

    const touchStart = (index) => {
        return (e) => {
            setCurrentIndex(index);
            setStartPosition(getPositionX(e));
            setIsDragging(true);
            setAnimationID(requestAnimationFrame(animation));
        }
    }

    const touchEnd = () => {
        setIsDragging(false);

        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < slides.length) setCurrentIndex(currentIndex + 1);
        if (movedBy > 100 && currentIndex > 0) setCurrentIndex(currentIndex - 1);

        setPositionByIndex();
    }

    const touchMove = (e) => {
        if (isDragging) {
            const currentPosition = getPositionX(e);
            setCurrentTranslate(prevTranslate + currentPosition - startPosition);
        }
    }

    const animation = () => {
        setSliderPosition();
        if(isDragging) requestAnimationFrame(animation);
    }

    const getPositionX = (e) => {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    const setSliderPosition = () => {
        slideShow.current.style.transform = `translateX(${currentTranslate})`;
    }

    const setPositionByIndex = () => {
        setCurrentTranslate(currentIndex * -window.innerWidth);
        setPrevTranslate(currentTranslate);
        setSliderPosition();
    }

    useEffect(() => {
      
        slides.forEach((slide,index) => {
            slide.addEventListener('touchstart', touchStart(index));
            slide.addEventListener('touchend', touchEnd);
            slide.addEventListener('touchmove', touchMove);

            slide.addEventListener('mousedown', touchStart(index));
            slide.addEventListener('mouseup', touchEnd);
            slide.addEventListener('mouseleave', touchEnd);
            slide.addEventListener('mousemove', touchMove);
        });

        slideShow.current.addEventListener('dragstart', (e) => e.preventDefault());

        intervalSlideShow.current = setInterval(() => {
            next();
        }, 5000);

        slideShow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideShow.current);
        });

        slideShow.current.addEventListener('mouseleave', () => {
            intervalSlideShow.current = setInterval(() => {
                next();
            }, 5000);
        });
    
        return () => {
            slides.forEach((slide,index) => {
                slide.addEventListener('touchstart', touchStart(index));
                slide.addEventListener('touchend', touchEnd);
                slide.addEventListener('touchmove', touchMove);

                slide.addEventListener('mousedown', touchStart(index));
                slide.addEventListener('mouseup', touchEnd);
                slide.addEventListener('mouseleave', touchEnd);
                slide.addEventListener('mousemove', touchMove);
            });
            clearInterval(intervalSlideShow.current);
        };
    });

    return (
        <Container ref={slider}>
            <div className="slideShow" ref={slideShow}>
                {props.children}
            </div>
            <div className="controllers">
                <button onClick={prev}>
                    <PrevArrow />
                </button>
                <button onClick={next}>
                    <NextArrow />
                </button>
            </div>
        </Container>
    );
};

export const Slide = ({ children, image }) => {

    const { img, exists } = useImage(image);
    
    return(
        <div className="slide">
            <Img src={img} alt="" exists={exists}/>
            { children }
        </div>
    );
}

export default Slider;