import React from 'react';
import devinterest from '../images/devinterest.png'

const portfolio = () => {
    return (
        <div>
            <main className="main-portfolio">
                <div className="titre">
                <h1>Portfolio</h1>
                <br />
                </div>
                <div className="main-box">
                <div className="box-container">
                    <div className="box">
                        <h3>Devinterest</h3>
                        <div className="box-image">
                            <a href="http://devinterest.surge.sh" target="_blank">
                            <img src={devinterest} alt="image site internet" />
                            </a>
                        
                        <p>Site créer pour le project de fin de formation à lécole O'clock</p>
                        <p>
                            <a id="link" className="link-site" href="http://devinterest.surge.sh" target="_blank">Lien du site</a>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <h3>Devinterest</h3>
                        <div className="box-image">
                            <a href="http://devinterest.surge.sh" target="_blank">
                            <img src={devinterest} alt="image site internet" />
                            </a>
                        
                        <p>Site créer pour le project de fin de formation à lécole O'clock</p>
                        <p>
                            <a id="link" className="link-site" href="http://devinterest.surge.sh" target="_blank">Lien du site</a>
                        </p>
                        </div>
                    </div>
                </div>
                </div>
        </main>
        </div>
    );
};

export default portfolio;