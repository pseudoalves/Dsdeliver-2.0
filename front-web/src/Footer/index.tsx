import React from 'react';
import './styles.css';
import { ReactComponent as YouIcon } from './Youtube.svg';
import { ReactComponent as LinkedIcon } from './Linkedin.svg';
import { ReactComponent as InstaIcon } from './Instagram.svg';


function Footer() {
    return(
        <footer className="main-footer">
          App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
          <div className="footer-icons">
            <a href="https://www.youtube.com/c/DevSuperior" target="new">
                <YouIcon />
            </a>
            <a href="https://www.linkedin.com/school/devsuperior/" target="new">
                <LinkedIcon />
            </a>
            <a href="https://www.instagram.com/devsuperior.ig/" target="new">
                <InstaIcon />
            </a>
          </div>
        </footer>
    )
}

export default Footer;