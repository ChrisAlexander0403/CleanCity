import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { selectUser } from '../features/slices/userSlice';
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import useForm from '../hooks/useForm';
import { report } from '../utils/validations';
import '../styles/reports.scss';

import File from '../components/inputFile/InputFile';
import Report from './Report';

const Reports = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        place: '',
        files: []
    }); 
    const [reports, setReports] = useState([]);

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const updateUploadedFiles = (files) => setValues({ ...values, files: files});

    const submitForm = async ({ title, description, place, files }) => {
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        try {
            const data = await axios.post('http://localhost:5000/api/files/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${user.accessToken}`
                }
            });
            console.log(data)
            await axios.post('http://localhost:5000/api/reports/', {
                title: title,
                description: description,
                place: place,
                storingPath: data.data.storingPath,
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
            const getReports = async () => {
                try {
                    const { data } = await axios.get('http://localhost:5000/api/reports',{
                        params: {
                            user: user._id
                        },
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    });
                    console.log(data);
                    setReports(data);
                } catch (error) {
                    console.log(error);
                }
            }
            getReports();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [user]);
    

    return (
        <>
        <Helmet>
            <title>Reportes</title>
        </Helmet>
        <main>
            <article>
                <div className="reports-container">
                    <section>
                        <div className="create">
                            <p>Crear nuevo reporte</p>
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
                                    <label>Imagen</label>
                                    <File 
                                        accept={".png,.jpeg,.jpg"} 
                                        updateFilesCb={updateUploadedFiles}
                                        multiple
                                    />
                                    {errors.file && <span className='error'>{errors.file}</span>}
                                </div>
                                <button type="submit">Reportar</button>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="my-reports">
                            <p>Mis reportes</p>
                            <div className="reports">
                                {!reports.length > 0
                                    ? <p>No hay reportes aún</p>
                                    : reports.map((report, index) => {
                                    return (
                                        <div key={index} className="report">
                                            <div className="report-header">
                                                <p className="title">{report.title}</p>
                                                <p className="date">{report.createdAt.slice(0,10)}</p>
                                            </div>
                                            <div className="report-content">
                                                <p className="address">{report.place}</p>
                                                <p className="status">{report.status}</p>
                                            </div>
                                            <button onClick={() => navigate(`${report._id}`)}>Ver detalles <BsArrowRight /></button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    <Routes>
                        <Route path="/:id" element={<Report />}></Route>
                    </Routes>
                    
                </div>
            </article>
        </main>
        </>
    );
}

export default Reports;