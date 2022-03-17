import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider, { Slide } from '../components/slider/Slider';
import { selectUser } from '../features/slices/userSlice';
import { ReportContainer } from '../styles/report';
import Modal from '../components/modal/Modal';
import useModal from '../hooks/useModal';
import { useNavigate } from 'react-router-dom';


const Report = () => {

    const [report, setReport] = useState();
    const [loading, setLoading] = useState();

    const { id } = useParams();
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const [isOpen, openModal, closeModal] = useModal(true, navigate);

    useEffect(() => {
        setLoading(true);
        const getReport = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/reports/report',{
                    params: {
                        id: id
                    },
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                });
                setReport(data);
                console.log(report);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        console.log(loading);
        getReport();
        //eslint-disable-next-line
    }, []);
    

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} isAdvertisement={false}>
        {report && 
    <ReportContainer>
        <Slider>
            {report.photos.map((img, index) => {
                return (
                    <Slide image={`http://localhost:5000/assets/img/temporal/${img}`} key={index}>
                        
                    </Slide>
                );
            })}
        </Slider>
        <h2>{report.title}</h2>
        <div className="details">
            <p>{report.description}</p>
            <p>{report.place}</p>
            <p>{report.status}</p>
        </div>
    </ReportContainer>}
    </Modal>
  );
}

export default Report;