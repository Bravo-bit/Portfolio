import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GITHUB, LINKEDIN } from "../assets/content"
import NavBarLogo from '../assets/NavBarlogo'

function NavBar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <NavBarLogo />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
