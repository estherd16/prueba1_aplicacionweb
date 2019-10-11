import React from 'react';
// import fb from './../../assets/fb.png';
// import im from './../../assets/im.png';
import vianica from './../../assets/vianica.jpg';

const Footer = (props) => {
    
    return (
        <footer className="footer">
            <a href="https://vianica.com/">
                <img
                    src={vianica} width='40px'
                />
            </a>
        </footer>
    );

};

export default Footer;