import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUser } from '../features/slices/userSlice';
import { CampaignContainer } from '../styles/campaign';
import Modal from '../components/modal/Modal';
import useModal from '../hooks/useModal';
import { useNavigate } from 'react-router-dom';


const Campaign = () => {

    const [campaign, setCampaign] = useState();
    const [loading, setLoading] = useState();

    const { id } = useParams();
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const [isOpen, openModal, closeModal] = useModal(true, navigate, '/campaigns');

    const handleSubscribe = async () => {
        if(!user) navigate('/signin', { replace: true });
        try {
            const data = await axios.post('http://localhost:5000/api/campaigns/subscribe', {
                campaign: campaign._id,
                user: user._id
            }, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                },
            });
            if(data.status === 200) console.log(200);
            console.log(data)
        }
        catch(error) {
            console.log(error);
        }
    }

    const handleUnsubscribe = async () => {
        try {
            const data = await axios.post('http://localhost:5000/api/campaigns/unsubscribe', {
                campaign: campaign._id,
                user: user._id
            }, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                },
            });
            if(data.status === 200) console.log(200);
            console.log(data)
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        const getCampaign = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/campaigns/campaign',{
                    params: {
                        id: id
                    },
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                });
                setCampaign(data);
                console.log(data);
                console.log(user);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        console.log(loading);
        getCampaign();
        //eslint-disable-next-line
    }, []);
    

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} isAdvertisement={false}>
        {campaign && 
    <CampaignContainer
        subscribed={!campaign.participants.includes(user._id)  ? false : true}
    >
        {/* <Slider>
            {campaign.photos.map((img, index) => {
                return (
                    <Slide image={`http://localhost:5000/assets/img/temporal/${img}`} key={index}>
                        
                    </Slide>
                );
            })}
        </Slider> */}
        <h2>{campaign.title}</h2>
        <h4>{campaign.user}</h4>
        <div className="details">
            <p>{campaign.description}</p>
            <p>{campaign.place}</p>
            <p>{campaign.date.slice(0, 10)}</p>
            <p>Participantes: <span>{campaign.participants.length}</span></p>
        </div>
        {campaign.user !== [user.firstname, user.lastname].join(' ') 
        && <button 
                onClick={!campaign.participants.includes(user._id)  ? handleSubscribe : handleUnsubscribe}
            >{!campaign.participants.includes(user._id)  ? 'Inscribirse' : 'Cancelar'}</button>
        }
    </CampaignContainer>}
    </Modal>
  );
}

export default Campaign;