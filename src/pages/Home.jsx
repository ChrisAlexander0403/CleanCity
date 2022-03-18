import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate, Routes, Route } from 'react-router-dom';

import { HomeContainer } from '../styles/home';
import Campaign from './Campaign';
import Report from './Report';

const Home = () => {

  const [reports, setReports] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const getData = async () => {
          try {
              const { data } = await axios.get('http://localhost:5000/api/reports/all');
              setReports(data);
          } catch (error) {
              console.log(error);
          }
          try {
            const { data } = await axios.get('http://localhost:5000/api/campaigns/all');
              setCampaigns(data);
          } catch (error) {
              console.log(error);
          }
      }
      getData();
  }, 3000);

  return () => clearInterval(intervalId);
  }, []);
  

  return (
    <>
        <main>
            <article>
                <h1 style={{
                  margin: '20px 30px 0',
                  color: '#2E8049'
                }}>Bienvenido a Clean City</h1>
                <HomeContainer>
                  <div className="reports">
                    <p>Reportes</p>
                    <div className="reports-list">
                      {!reports.length > 0 
                        ? <p>No hay reportes aún</p>
                        : reports.map((report, index) => {
                        return(
                          <div key={index} className="report">
                              <div className="report-header">
                                  <p className="title">{report.title}</p>
                                  <p className="date">{report.createdAt.slice(0,10)}</p>
                              </div>
                              <div className="report-content">
                                  <p className="address">{report.place}</p>
                                  <p className="status">{report.status}</p>
                              </div>
                              <button onClick={() => navigate(`report/${report._id}`)}>Ver detalles <BsArrowRight /></button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="campaigns">
                    <p>Campañas</p>
                    <div className="campaigns-list">
                    {!campaigns.length > 0 
                        ? <p>No hay campañas aún</p>
                        : campaigns.map((campaign, index) => {
                        return(
                          <div key={index} className="campaign">
                              <div className="campaign-header">
                                  <p className="title">{campaign.title}</p>
                                  <p className="date">{campaign.createdAt.slice(0,10)}</p>
                              </div>
                              <div className="campaign-content">
                                  <p className="address">{campaign.place}</p>
                                  <p className="status">{campaign.status}</p>
                              </div>
                              <button onClick={() => navigate(`campaign/${campaign._id}`)}>Ver detalles <BsArrowRight /></button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </HomeContainer>
                <Routes>
                  <Route path="campaign/:id" element={<Campaign />}/>
                  <Route path="report/:id" element={<Report />}/>
                </Routes>
            </article>
        </main>
    </>
  );
}

export default Home;