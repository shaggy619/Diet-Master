import React from "react";
import Divider from "./Divider";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="bg-primary text-white pb-5 pt-14 mt-[-0.1rem] relative">
        <div className="container mx-auto px-4 max-w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="inline-block">
                <div className="flex items-center gap-1">
                  <div className="mb-3 -ml-1">
                    <img src="/img/logo.png" alt="logo" className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Diet Master</h2>
                </div>
              </Link>

              <p className="-mt-1">
                Your partner in achieving a healthier lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li className="pb-2">
                  <Link to="/weight-loss">Weight Loss Program</Link>
                </li>
                <li className="pb-2">
                  <Link to="/body-diet-chart">Healthy Body Diet Chart</Link>
                </li>
                <li className="pb-2">
                  <Link to="/medical-diet-chart">Medical Diet Charts</Link>
                </li>
                <li>
                  <Link to="/pricing">Subscription</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <ul>
                <li className="pb-2">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="pb-2">
                  <Link to="/faq">FAQ</Link>
                </li>

                <li>
                  <Link to="/contact-us">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: support@dietmaster.com</p>
              <p>Address: Ghorahi, Dang</p>
              <div className="flex space-x-3 pt-3 md:mt-0 items-center">
                <a
                  href="https://www.facebook.com/someaim.adhikari.1/"
                  target="_blank"
                  className=" text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/SomeAim"
                  target="_blank"
                  className=" text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/someaim1/"
                  target="_blank"
                  className=" text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUtVNdBHoYaJ4JQtdEw8Ssg"
                  target="_blank"
                  className=" text-2xl"
                >
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
