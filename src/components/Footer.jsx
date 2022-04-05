import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      {/* justify-items-center */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 ">
        <div className="mx-auto">
          <h6 className="font-bold uppercase pt-2 ml-4">Solutions</h6>
          <ul className="">
            <li className="py-1 hover:text-indigo-600">Marketing</li>
            <li className="py-1 hover:text-indigo-600">Analytics</li>
            <li className="py-1 hover:text-indigo-600">Commerce</li>
            <li className="py-1 hover:text-indigo-600">Data</li>
            <li className="py-1 hover:text-indigo-600">Cloud</li>
          </ul>
        </div>
        <div className="mx-auto">
          <h6 className="font-bold uppercase pt-2 ml-4">Support</h6>
          <ul>
            <li className="py-1 hover:text-indigo-600">Pricing</li>
            <li className="py-1 hover:text-indigo-600">Documentation</li>
            <li className="py-1 hover:text-indigo-600">Guides</li>
            <li className="py-1 hover:text-indigo-600">API Status</li>
            <li className="py-1 hover:text-indigo-600">API REST</li>
          </ul>
        </div>
        <div className="mx-auto my-4 md:my-0 ml-9">
          <h6 className="font-bold uppercase pt-2 ml-4">Company</h6>
          <ul>
            <li className="py-1 hover:text-indigo-600">About</li>
            <li className="py-1 hover:text-indigo-600">Blog</li>
            <li className="py-1 hover:text-indigo-600">Jobs</li>
            <li className="py-1 hover:text-indigo-600">Press</li>
            <li className="py-1 hover:text-indigo-600">Partners</li>
          </ul>
        </div>
        <div className="mx-auto my-4 md:my-0 ml-6">
          <h6 className="font-bold uppercase pt-2 ml-4">Legal</h6>
          <ul>
            <li className="py-1 hover:text-indigo-600">Claims</li>
            <li className="py-1 hover:text-indigo-600">Privacy</li>
            <li className="py-1 hover:text-indigo-600">Terms</li>
            <li className="py-1 hover:text-indigo-600">Policies</li>
            <li className="py-1 hover:text-indigo-600">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 px-4">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 text-indigo-600"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl px-4">
          <FaFacebook className="hover:text-indigo-600" />
          <FaInstagram className="hover:text-indigo-600" />
          <FaTwitter className="hover:text-indigo-600" />
          <FaTwitch className="hover:text-indigo-600" />
          <FaGithub className="hover:text-indigo-600" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
