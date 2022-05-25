import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content mt-10">
            <ScrollToTop smooth top="100" width='40' height='30' viewBox="20 -60 256 256" />
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;