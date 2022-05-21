import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import "../assests/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="ul">
        <li className="li">
          <h4> About Us</h4>
          <ul>
            <li className="li">Overview</li>
            <li className="li">Investor Relations</li>
            <li className="li">Another stakeholders</li>
            <li className="li">Careers</li>
            <li className="li">News Rooms</li>
          </ul>
        </li>
        <li className="li">
          <h4>Useful Links</h4>
          <ul>
            <li className="li">Privacy</li>
            <li className="li">Security</li>
            <li className="li">RBI kehta hai</li>
            <li className="li">Sitemaps</li>
            <li className="li">Terms and conditions</li>
          </ul>
        </li>
        <li className="li">
          <h4>Resources</h4>
          <ul>
            <li className="li">Ways to Bank</li>
            <li className="li">Rates</li>
            <li className="li">Bank Holiday</li>
            <li className="li">Forms center</li>
            <li className="li">Fees and charges</li>
          </ul>
        </li>
        <li className="li">
          <h4>Calculators</h4>
          <ul>
            <li className="li">Personal Loan EMI Calculator</li>
            <li className="li">Car Loan EMI Calculator</li>
            <li className="li">Two wheeler EMI Calculator</li>
            <li className="li">Debit Cards Calculator</li>
            <li className="li">Home Loan Calculator</li>
          </ul>
        </li>
        <li className="li">
          <h4> Need help</h4>
          <ul>
            <li className="li">We care for you</li>
            <li className="li">FAQs</li>
            <li className="li">Customer Care</li>
            <li className="li">Contact us</li>
            <li className="li">Locate us</li>
          </ul>
        </li>
        <li className="li">
          <h4>Connect</h4>
          <ul>
            <li className="li li-con">
              <AiFillFacebook className="icon"/>
              Facebook
            </li>
            <li className="li li-con">
              <AiFillInstagram className="icon"/>
              Instagram
            </li>
            <li className="li li-con">
              <BsYoutube className="icon"/>
              Youtube
            </li>
            <li className="li li-con">
              <AiFillTwitterCircle className="icon"/>
              Twitter
            </li>
            <li className="li li-con">
              <AiFillLinkedin className="icon"/>
              Linkedin
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
