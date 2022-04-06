import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Sanyam Modi</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/sanyam.modi.71/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/sanyam-modi-732970211/">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/the_sanyam_/">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://github.com/thesanyam26">
                                <AiFillGithub className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer