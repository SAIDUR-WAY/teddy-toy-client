import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
     return (
          <footer className="footer p-10 bg-base-200 text-base-content">
  <div>

    <p className="">
     <span className="block text-2xl p-0 m-0">TeddyWorld</span>
     <span className="text-xs">Where Teddy Come to Life</span>
    </p>
    <div className="grid grid-flow-col gap-4 py-4">
     <a href="#"><FaFacebook className='text-2xl  hover:outline outline-info transition-all rounded-lg' /></a>
     <a href="#"><FaInstagram className='text-2xl  hover:outline outline-info transition-all rounded-lg' /></a>
     <a href="#"><FaTwitter className='text-2xl  hover:outline outline-info transition-all rounded-lg' /></a>

    </div>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
     );
};

export default Footer;