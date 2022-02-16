import React, { useState } from 'react';

import useForm from '../hooks/useForm';
import { report } from '../utils/validations';

import File from '../components/inputFile/InputFile';

const Reports = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        place: '',
        photo: '',
        status: '',
        file: ''
    });

    const updateUploadedFiles = (files) => setValues({ ...values, file: files});

    const submitForm = () => {
        
    }

    const { handleChange, handleSubmit, errors } = useForm(values, setValues, submitForm, report);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input 
                        id='title'
                        type='text'
                        placeholder='Título'
                        name='title'
                        value={values.title.replace(/\s+/g, '')}
                        onChange={handleChange}
                    />
                    {errors.description && <span className='error'>{errors.description}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <input 
                        id='description'
                        type='text'
                        placeholder='Descripción'
                        name='description'
                        value={values.description.replace(/\s+/g, '')}
                        onChange={handleChange}
                    />
                    {errors.description && <span className='error'>{errors.description}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="place">Lugar</label>
                    <input 
                        id='place'
                        type='text'
                        placeholder='Lugar'
                        name='place'
                        value={values.place.replace(/\s+/g, '')}
                        onChange={handleChange}
                    />
                    {errors.place && <span className='error'>{errors.place}</span>}
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
            </form>
        </div>
    );
}

export default Reports;