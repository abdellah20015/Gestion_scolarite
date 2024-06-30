import React from 'react';
import contact from '../../img/abdo.png';

export const Contact = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
            <div style={{ marginRight: '200px' }}>  {/* Ajout d'une marge à droite pour rapprocher les informations de l'image */}
                <h1>Contact Us</h1>
                <h3 style={{ color: 'black' }}>Address:</h3> 
                <p>Rabat, Morocco</p>
                <h3>Phone no:</h3>
                <p>0637451036</p>
                <h3>Email id:</h3>
                <p>abdellah@gmail.com</p>
            </div>
            <div className='img' align="center">
                <img src={contact} alt="contact" style={{ width: '400px', height: '400px' }} />
            </div>
        </div>
    );
}
