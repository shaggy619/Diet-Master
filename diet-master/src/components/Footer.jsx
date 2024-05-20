import React from "react";
import Divider from "./Divider";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="bg-primary text-white pb-5 pt-14 mt-[-0.1rem] relative">
        <div className="container mx-auto px-4 max-w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Diet Master</h2>
              <p>
                Your partner in achieving a healthier lifestyle through
                personalized diet plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li className="pb-2">
                  <a href="#weight-loss">Weight Loss Program</a>
                </li>
                <li className="pb-2">
                  <a href="#healthy-body">Healthy Body Diet Chart</a>
                </li>
                <li className="pb-2">
                  <a href="#medical-requirements">Medical Diet Charts</a>
                </li>
                <li>
                  <a href="#subscription">Subscription</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <ul>
                <li className="pb-2">
                  <a href="#blog">Blog</a>
                </li>
                <li className="pb-2">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="pb-2">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: support@dietmaster.com</p>
              <p>Address: Ghorahi, Dang</p>
              <div className="flex space-x-3 pt-3 md:mt-0 items-center">
                <a href="#" className=" text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className=" text-2xl">
                  <FaTwitter />
                </a>
                <a href="#" className=" text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className=" text-2xl">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-4 text-center">
            <p>© 2024 Diet Master. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
