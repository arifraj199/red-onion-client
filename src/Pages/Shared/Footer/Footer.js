import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-black text-white">
        <div>
          <img width="160" src="https://i.ibb.co/4SJQ7yB/logo.png" alt="" />
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
      <footer class="footer flex justify-between  footer-center py-4 pl-12 pr-60 bg-black text-white">
        <div className="">
          <p className="text-zinc-500">
            Copyright © 2022 - All right reserved by Red Onion
          </p>
        </div>
        <div>
          <ul className="flex justify-evenly gap-10 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Pricing</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
