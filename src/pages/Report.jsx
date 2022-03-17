import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider, { Slide } from '../components/slider/Slider';
import { selectUser } from '../features/slices/userSlice';

const Report = () => {

    const [report, setReport] = useState();
    const [loading, setLoading] = useState();

    const { id } = useParams();
    const user = useSelector(selectUser);

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
        getReport();
    }, [id, user, report]);
    

  return (
    !loading && 
    <ReportContainer>
        <Slider>
            {report.img.map((img, index) => {
                return (
                    <Slide img={img} key={index}>
                        
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
    </ReportContainer>
  );
}

export default Report;