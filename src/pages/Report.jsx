import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getReport();
    }, []);
    

  return (
    !loading && <div>{id}</div>
  );
}

export default Report;