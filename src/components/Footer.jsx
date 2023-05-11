import React from 'react';
import './Footer.css';

import { styles } from '../styles';

const Footer = () => {
    return (
        <footer className={`${styles.paddingX} items-center py-5 bottom-0 z-20 bg-primary`} style={{ padding: '30px' }}>

            <div className='flex flex-row gap-10 flex-wrap' style={{ justifyContent: 'space-evenly' }}>
                <div>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><b>Åpningstider</b></p>
                    <p style={{ textAlign: 'center' }}>Mandag - Fredag:&nbsp;&nbsp;&nbsp;&nbsp; 08.00 - 17.00</p>
                    <p style={{ textAlign: 'center' }}>Lørdag & Søndag:&nbsp;&nbsp;&nbsp;&nbsp; 08.00 - 17.00</p>
                </div>

                <div>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><b>Adresse</b></p>
                    <p style={{ textAlign: 'center' }}>Asbjørn Dørumsgardsvei</p>
                    <p style={{ textAlign: 'center' }}>2008 Fjerdingby</p>
                </div>

                <div>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><b>Kontakt</b></p>
                    <p style={{ textAlign: 'center' }}>Telefon: 454 86 718</p>
                    <p style={{ textAlign: 'center' }}>
                        <a href="mailto:post@swbygg.no">E-post: post@swbygg.no</a>
                    </p>
                </div>
            </div>

            <p style={{ fontSize: '12px', padding: '5px', textAlign: 'center', position: 'relative', top: '20px' }}>&copy; 2023 SW Bygg AS. All Rights Reserved.</p>

        </footer>
    );
};

export default Footer;

