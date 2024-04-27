import React, { useState } from "react";
import "./myStyles.css";
import logo from "../icons/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import checkIcon from "../icons/check-icon.png";
import hospitalImage from "../icons/hospital-image.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import adImage from "../icons/search-ads.png";
import group1 from "../icons/Group 10.png";
import group2 from "../icons/Group 11.png";
import doctor1 from "../icons/doctor-1.png";
import doctor2 from "../icons/doctor-2.png";
import doctor3 from "../icons/doctor-3.png";
import patient1 from "../icons/patient-1.png";
import patient2 from "../icons/patient-2.png";
import callIcon from "../icons/call-icon.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import newsImage from "../icons/news-article.png";
import cardDoctor from "../icons/card-doctor.png";
import familyIcon1 from "../icons/family-1.png";
import familyIcon2 from "../icons/family-2.png";
import familyIcon3 from "../icons/family-3.png";
import familyIcon4 from "../icons/family-4.png";
import faq1 from "../icons/faq-1.png";
import faq2 from "../icons/faq-smile.png";
import faq3 from "../icons/faq-clip.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import phoneImage1 from "../icons/phone-pic.png";
import phoneImage2 from "../icons/phone-pic-2.png";
import turnSign from "../icons/turn-sign.png";
import googlePlayImage from "../icons/google_play.png.png";
import appleStoreImage from "../icons/apple_store.png.png";
import facebookImage from "../icons/facebook-icon.png";
import twitterImage from "../icons/twitter-icon.png";
import youtubeImage from "../icons/youtube-icon.png";
import pinterestImage from "../icons/pinterst-icon.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMyContext } from './MyContext1';
import { Link } from 'react-router-dom';

const styles = {
  accordion: {
    border: "none",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  accordionSummary: {
    borderBottom: "none",
  },
  accordionDetails: {
    padding: "8px 16px",
    borderTop: "none",
  },
};
function FindDoctors() {
  const { resultView, bookingView } = useMyContext();
  const [allResults, setAllResults] = resultView;
  const [allBookings, setAllBookings] = bookingView;

  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');

  const handleDateTimeChange = (event) => {
    const dateTimeValue = event.target.value;

    const selectedDateTime = new Date(dateTimeValue);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = selectedDateTime.toLocaleDateString('en-GB', options);

    const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = selectedDateTime.toLocaleTimeString('en-US', optionsTime);

    setFormattedDate(formattedDate);
    setFormattedTime(formattedTime);
  }

  const handleBooking = (data) =>{
     data.bookingTime = formattedTime;
     data.bookingDate = formattedDate;
     setAllBookings((prevBookings) => [...prevBookings, data]);
  }
  

  return (
    <div className="findDoctor-container">
      <div className="header-top-line">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="booking-navbar">
        <div>
          <img src={logo} alt="" className="logo-img" />
        </div>
        <div className="nav-btn-container">
          <button className="nav-btn">Find Doctors</button>
          <button className="nav-btn">Hospitals</button>
          <button className="nav-btn">Medicines</button>
          <button className="nav-btn">Surgeries</button>
          <button className="nav-btn">Software for Provider</button>
          <button className="nav-btn">Facilities</button>
          <Link to="/booking" className="nav-btn-1" >
          My Booking
            </Link>
        </div>
      </div>
      <div className="searchBar-booking">
        <div className="search-inputBox-booking">
          <div className="input-container">
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <input type="text" className="input-box" />
          </div>
          <div className="input-container">
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <input type="text" className="input-box" />
          </div>
          <div className="search-btn">
            <SearchIcon className="search-btn-2" />
            Search
          </div>
        </div>
      </div>

      <div className="search-result-view">
        <p className="search-heading-text-1">
          {allResults?.length} medical centers available in{" "}
          {allResults[0]?.State}
        </p>
        <div className="search-heading-2">
          <img src={checkIcon} alt="" className="search-heading-2-img" />
          Book appointments with minimum wait-time & verified doctor details
        </div>

        {allResults?.map((item) => {
          return (
            <div className="hospital-search-list">
              <div className="hospital-search-list-left">
                <div className="hospital-container-left">
                  <div className="hospital-image-wrap">
                    <img src={hospitalImage} alt="" />
                  </div>
                </div>
                <div className="hospital-container-middle">
                  <p className="hospital-container-text-1">
                    {item["Hospital Name"]}
                  </p>
                  <div className="hospital-container-middle-text">
                    <p className="hospital-container-text-2">
                      {item.City}, {item.State}
                    </p>
                    <p className="hospital-container-text-3">{item.Address}</p>
                    <p className="hospital-container-text-4">
                      <span className="hospital-container-span-1">FREE</span>{" "}
                      <span className="hospital-container-span-2">₹500</span>{" "}
                      Consultation fee at clinic
                    </p>
                    <div className="hospital-container-like-btn">
                      <ThumbUpIcon /> 5
                    </div>
                  </div>
                </div>
                <div className="hospital-container-right">
                  <p className="hospital-container-right-text-1">
                    Available Today
                  </p>
                  <input
        type="datetime-local"
        id="birthdaytime"
        name="birthdaytime"
        onChange={handleDateTimeChange}
      ></input>
                  <button
                    className="hospital-container-right-button"
                    onClick={() => handleBooking(item)}
                  >
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
              <div className="hospital-search-list-right">
                <img src={adImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-container">
        <div className="faq-wrapper">
          <p className="faq-text-1">Get Your Answer</p>
          <p className="faq-text-2">Frequently Asked Questions</p>
          <div className="faq-accordion">
            <div className="faq-accordion-left">
              <div className="faq-doctor-left">
                <img src={faq2} alt="" className="faq-doctor-icon-1" />
                <div className="icon-1-text">
                  <p>84k+</p>
                  <p>Happy Patients</p>
                </div>
              </div>
              <div className="faq-doctor-right">
                <img src={faq3} alt="" className="faq-doctor-icon-2" />
              </div>
              <div>
                <img src={faq1} alt="" className="faq-doctor-image" />
              </div>
            </div>
            <div className="faq-accordion-right">
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={styles.accordionSummary}
                >
                  <Typography sx={{ color: "#1b3c74" }}>
                    Why choose our medical for your family?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accordionDetails}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Accordion 2 */}
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>Why we are different from others?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accordionDetails}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>
                    Trusted & experience senior care & love
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accordionDetails}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={styles.accordionSummary}
                >
                  <Typography>
                    How to get appointment for emergency cases?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accordionDetails}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="download-container">
        <div className="download-container-left">
          <div>
            <img src={phoneImage1} alt="" className="download-phoneImage-1" />
            <img src={phoneImage2} alt="" />
          </div>
        </div>
        <div className="download-container-right">
          <div className="download-container-sign">
            <img src={turnSign} alt="" />
          </div>
          <div className="download-container-options">
            <p className="download-option-text-1">
              Download the <span className="download-span-1">Medify</span> App
            </p>
            <p className="download-option-text-2">
              Get the link to download the app
            </p>
            <div className="number-inputWrap">
              <div className="number-input-1">+91</div>
              <input
                type="number"
                placeholder="Enter phone number"
                className="mobile-number-inputBox"
              />
              <button className="number-sendBtn">Send SMS</button>
            </div>
            <div className="store-images-wrap">
              <img src={googlePlayImage} alt="" />
              <img src={appleStoreImage} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-left-container">
            <div>
              <img src={logo} alt="" className="logo-img" />
            </div>
            <div className="social-links-container">
              <div className="footer-social-links">
                <img src={facebookImage} alt="" />
              </div>
              <div className="footer-social-links">
                <img src={twitterImage} alt="" />
              </div>
              <div className="footer-social-links">
                <img src={youtubeImage} alt="" />
              </div>
              <div className="footer-social-links">
                <img src={pinterestImage} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-right-container">
            <div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">About Us</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Our Pricing</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Our Gallery</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Appointment</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Privacy Policy</p>
              </div>
            </div>

            <div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Orthology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Neurology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Dental Care</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Opthalmology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Cardiology</p>
              </div>
            </div>

            <div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Orthology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Neurology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Dental Care</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Opthalmology</p>
              </div>
              <div>
                <ChevronRightIcon className="right-icon" />
                <p className="footer-link">Cardiology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctors;
