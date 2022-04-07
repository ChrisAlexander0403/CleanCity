import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { selectTheme } from '../features/slices/themeSlice';

import { Banner, BannerReverse, HomeContainer, Info } from '../styles/home';
import Campaign from './Campaign';
import Report from './Report';

const Home = () => {

  const [reports, setReports] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const isDark = useSelector(selectTheme);
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
                  fontSize: '28px',
                  margin: '20px 30px 0',
                  color: `${isDark ? '#62A077' : '#2E8049'}`
                }}>Bienvenido a Clean City</h1>
                <Info isDark={isDark}>
                  <p>La aplicación de reportes de basura donde la limpieza de las calles es prioridad, donde tu reporte puede
                    significar una calle limpia.
                  </p>
                  <p>A continuación aparecen los reportes y campañas más recientes.</p>
                </Info>
                <Banner isDark={isDark}>
                  <div className="banner-img">
                    <div className="img-container">
                      <img src="/assets/img/banner1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="banner-info">
                    <h2>Mantener las calles limpias es trabajo de todos</h2>
                    <p>Tus reportes nos ayudan a encontrar sitios con grandes cantidades de basura, notificar a nuestros
                      recolectores y mantener las calles de tu vecindad siempre limpias.
                    </p>
                    <p>Tu cooperación marca la diferencia, y no te preocupes por tu privacidad, tu reporte se mantiene anónimo
                      de otros usuarios.
                    </p>
                  </div>
                </Banner>
                <HomeContainer isDark={isDark}>
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
                <BannerReverse isDark={isDark}>
                  <div className="banner-img">
                    <div className="img-container">
                      <img src="/assets/img/banner2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="banner-info">
                    <h2>Nuestro equipo de recolección está siempre disponible</h2>
                    <p>Contamos con un equipo de camiones y recolectores de basura muy amplio para poder cumplir
                      con la cantidad de reportes generada a diario.
                    </p>
                    <p>Los camiones pasan día con día a recoger basura en distintos puntos de la ciudad, cada camión
                      tiene asignado un área específica, lo que aumenta la efectividad del servicio.
                    </p>
                  </div>
                </BannerReverse>
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