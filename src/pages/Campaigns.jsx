import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { selectUser } from '../features/slices/userSlice';
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate, Routes, Route } from 'react-router-dom';
import 'moment/locale/es-mx';
import moment from 'moment';
import Helmet from 'react-helmet';

import useForm from '../hooks/useForm';
import { report } from '../utils/validations';
import '../styles/reports.scss';
import Calendar from '../components/calendar/Calendar';
import Campaign from './Campaign';

const Campaigns = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        place: '',
        date: ''
    }); 
    const [campaigns, setCampaigns] = useState([]);
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const [value, setValue] = useState(moment());

    const calendar = useRef(null);

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const submitForm = async ({ title, description, place, date }) => {
        try {
            await axios.post('http://localhost:5000/api/campaigns/', {
                title: title,
                description: description,
                place: place,
                date: value,
                user: user._id
            },{
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            });
            setValues({title: '', address: '', description: '', files: []});
        } catch (err) {
            console.log(err);
        }
    }

    const { handleChange, handleSubmit, errors } = useForm(values, setValues, submitForm, report);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const getCampaigns = async () => {
                try {
                    const { data } = await axios.get('http://localhost:5000/api/campaigns',{
                        params: {
                            user: user._id
                        },
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    });
                    console.log(data);
                    setCampaigns(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getCampaigns();
        }, 2500);

        return () => clearInterval(intervalId);
    }, [user]);
    

    return (
        <>
            <Helmet>
                <title>Campañas</title>      
            </Helmet>
            <main>
                <article>
                    <div className="reports-container">
                        <section>
                            <div className="create">
                                <p>Crear nueva campaña</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Título</label>
                                        <input 
                                            id='title'
                                            type='text'
                                            placeholder='Título'
                                            name='title'
                                            value={values.title}
                                            onChange={handleChange}
                                        />
                                        {errors.title && <span className='error'>{errors.title}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Descripción</label>
                                        <textarea 
                                            id='description'
                                            type='text'
                                            placeholder='Descripción'
                                            name='description'
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                        {errors.description && <span className='error'>{errors.description}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="place">Dirección</label>
                                        <input 
                                            id='place'
                                            type='text'
                                            placeholder='Lugar'
                                            name='place'
                                            value={values.place}
                                            onChange={handleChange}
                                        />
                                        {errors.place && <span className='error'>{errors.place}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label for="" >Fecha</label>
                                        <div className="button"
                                            ref={calendar}
                                            onClick={() => setCalendarIsOpen(true)}         
                                        >
                                            {value.format('LL')}  
                                        </div>
                                        {
                                            calendarIsOpen && 
                                            <Calendar 
                                            value={value} 
                                            setValue={setValue}
                                            startingPoint={window.innerWidth - calendar.current.getBoundingClientRect().right}
                                            close={setCalendarIsOpen}
                                            />}
                                        {errors.file && <span className='error'>{errors.file}</span>}
                                    </div>
                                    <button type="submit">Crear campaña</button>
                                </form>
                            </div>
                        </section>
                        <section>
                            <div className="my-reports">
                                <p>Mis campañas</p>
                                <div className="reports">
                                    {!campaigns.length > 0
                                        ? <p>No hay campañas aún</p>
                                        : campaigns.map((campaign, index) => {
                                        return (
                                            <div key={index} className="report">
                                                <div className="report-header">
                                                    <p className="title">{campaign.title}</p>
                                                    <p className="date">{campaign.date.slice(0,10)}</p>
                                                </div>
                                                <div className="report-content">
                                                    <p className="address">{campaign.place}</p>
                                                    <p className="status">{campaign.status}</p>
                                                </div>
                                                <button onClick={() => navigate(`${campaign._id}`)}>Ver detalles <BsArrowRight /></button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                        <Routes>
                            <Route path="/:id" element={<Campaign />}></Route>
                        </Routes>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Campaigns;