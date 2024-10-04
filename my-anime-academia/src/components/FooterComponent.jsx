import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footerComp absolute w-screen left-0">
      <h1>My Anime Academia</h1>
      <div className="place-content-center flex">
        <div className="">
          <ul className="">
            <h3>Navigation</h3>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/stash">Stash</Link>
            </li>
          </ul>
        </div>
        <div>
          <ol className="flex place-content-center gap-4 p-3">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
