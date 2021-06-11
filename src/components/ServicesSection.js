import React from 'react';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg';
// Import Images
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt='Clock'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium atque
                            dignissimos eaque harum id incidunt ipsum maiores minima natus perspiciatis placeat,
                            possimus praesentium provident, quia quibusdam rerum tempore totam.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt='Teamwork'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium atque
                            dignissimos eaque harum id incidunt ipsum maiores minima natus perspiciatis placeat,
                            possimus praesentium provident, quia quibusdam rerum tempore totam.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt='Diaphragm'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium atque
                            dignissimos eaque harum id incidunt ipsum maiores minima natus perspiciatis placeat,
                            possimus praesentium provident, quia quibusdam rerum tempore totam.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt='Money'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium atque
                            dignissimos eaque harum id incidunt ipsum maiores minima natus perspiciatis placeat,
                            possimus praesentium provident, quia quibusdam rerum tempore totam.</p>
                    </div>
                    <img src={home2} alt='Camera'/>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;