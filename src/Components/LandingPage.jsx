import React, { useEffect, useState } from "react";
import "./myStyles.css";
import logo from "../icons/logo.png";
import bannerImage from "../icons/header-banner-image.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import doctorIcon from "../icons/Doctor.png";
import drugIcon from "../icons/Drugstore.png";
import hospitalIcon from "../icons/Hospital.png";
import capsuleIcon from "../icons/Capsule.png";
import ambIcon from "../icons/Ambulance.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import group1 from "../icons/Group 10.png";
import group2 from "../icons/Group 11.png";
import doctor1 from "../icons/doctor-1.png";
import doctor2 from "../icons/doctor-2.png";
import doctor3 from "../icons/doctor-3.png";
import patient1 from "../icons/patient-1.png";
import patient2 from "../icons/patient-2.png";
import callIcon from "../icons/call-icon.png";
import checkIcon from "../icons/check-icon.png";
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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import phoneImage1 from "../icons/phone-pic.png";
import phoneImage2 from "../icons/phone-pic-2.png";
import phoneScreen from "../icons/phone-screen.png";
import turnSign from "../icons/turn-sign.png";
import googlePlayImage from "../icons/google_play.png.png";
import appleStoreImage from "../icons/apple_store.png.png";
import facebookImage from "../icons/facebook-icon.png";
import twitterImage from "../icons/twitter-icon.png";
import youtubeImage from "../icons/youtube-icon.png";
import pinterestImage from "../icons/pinterst-icon.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
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

function LandingPage() {
  const { resultView, bookingView } = useMyContext();
  const [allResults, setAllResults] = resultView;
  const [allBookings, setAllBookings] = bookingView
  const [selectedStateCity, setSelectedStateCity] = useState({
    state: "",
    city: "",
  });

  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    const getAllStates = async () => {
      const data = await axios.get(
        `https://meddata-backend.onrender.com/states`
      );
      setAllStates(data.data);
    };
    getAllStates();
  }, []);

  useEffect(() => {
    const getAllCities = async () => {
      const data = await axios.get(
        ` https://meddata-backend.onrender.com/cities/${selectedStateCity.state}`
      );
      setAllCities(data.data);
    };
    if (selectedStateCity.state) {
      getAllCities();
    }
  }, [selectedStateCity.state]);

  const handleSearchHospital = async() =>{
    const data = await axios.get(
      ` https://meddata-backend.onrender.com/data?state=${selectedStateCity.state}&city=${selectedStateCity.city}`
    );
    setAllResults(data.data);
  }

  return (
    <div className="landing-container">
      <div className="header-top-line">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="landing-navbar">
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

      <div className="banner-container">
        <div className="banner-text-container">
          <p className="banner-text">Skip the travel! Find Online</p>
          <p className="banner-text-1">
            Medical <span className="center-span">Centers</span>
          </p>
          <p className="banner-text-2">
            Connect instantly with a 24x7 specialist or choose to
          </p>
          <p className="banner-text-2">video visit a particular doctor</p>
          <button className="banner-btn">Find Centers</button>
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </div>

      <div className="search-box-container">
        <div className="searchBox">
          <form className="search-top">
            <div className="input-container">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <select
                className="custom-select"
                value={selectedStateCity.state}
                onChange={(e) =>
                  setSelectedStateCity({
                    state: e.target.value,
                    city: "",
                  })
                }
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="search-option-1"
                >
                  State
                </option>
                {allStates.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-container">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <select className="custom-select"
              value={selectedStateCity.city}
              onChange={(e) =>
                setSelectedStateCity({
                  ...selectedStateCity,
                  city: e.target.value,
                })
              }
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="search-option-1"
                >
                  City
                </option>
                {allCities.map((city) => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="" onClick={handleSearchHospital}>
            <Link to="/findDoctor" className="search-btn">
            <SearchIcon className="search-btn-2" />
              Search
            </Link>
            </div>
          </form>

          <div className="search-bottom">
            <p className="search-text">You may be looking for</p>
            <div className="cards-wrapper">
              <div className="card-container">
                <img src={doctorIcon} alt="" className="card-icon" />
                <p className="card-text">Doctors</p>
              </div>
              <div className="card-container">
                <img src={drugIcon} alt="" className="card-icon" />
                <p className="card-text">Labs</p>
              </div>
              <div className="card-container-1">
                <img src={hospitalIcon} alt="" className="card-icon" />
                <p className="card-text-1">Hospitals</p>
              </div>
              <div className="card-container">
                <img src={capsuleIcon} alt="" className="card-icon" />
                <p className="card-text">Medical Store</p>
              </div>
              <div className="card-container">
                <img src={ambIcon} alt="" className="card-icon" />
                <p className="card-text">Ambulance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discount-carousel">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          <div className="slider-container">
            <SwiperSlide>
              <img src={group1} alt="" className="swiper-image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={group2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={group1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={group2} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <div className="specialisation-container">
        <p className="specialisation-text">Find by Specialisation</p>
        <div className="specialisation-options">
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugIcon} alt="" className="specialisation-card-icon" />
            <p className="specialisation-card-text">Dentistry</p>
          </div>
        </div>
        <button className="specialisation-viewAll-btn">View All</button>
      </div>

      <div className="doctor-container">
        <p className="doctor-container-heading">Our Medical Specialist</p>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            <div>
              <SwiperSlide>
                <img src={doctor1} alt="" className="doctor-image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={doctor2} alt="" className="doctor-image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={doctor3} alt="" className="doctor-image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={doctor1} alt="" className="doctor-image" />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="patientCaring-container">
        <div className="patient-wrapper">
          <div className="left-wrapper-patient">
            <div className="consult-container">
              <div className="consult-top">
                <img src={callIcon} alt="" className="consult-icon" />
                <p className="consult-text">Free Consultation</p>
              </div>
              <div className="consult-bottom">
                <p className="consult-text-2">Consultation with the best</p>
              </div>
            </div>
            <img src={patient1} alt="" className="patient-image-1" />
            <img src={patient2} alt="" className="patient-image-2" />
          </div>
          <div className="right-wrapper-patient">
            <p className="right-wrapper-text-1">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <p className="right-wrapper-text-2">
              Patient <span className="right-wrapper-span-text">Caring</span>
            </p>
            <p className="right-wrapper-text-3">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </p>
            <div className="right-wrapper-itemChecked">
              <img src={checkIcon} alt="" className="check-icon" />
              <p className="check-text">Stay Updated About Your Health</p>
            </div>
            <div className="right-wrapper-itemChecked">
              <img src={checkIcon} alt="" className="check-icon" />
              <p className="check-text">Check Your Results Online</p>
            </div>
            <div className="right-wrapper-itemChecked">
              <img src={checkIcon} alt="" className="check-icon" />
              <p className="check-text">Manage Your Appointments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="news-wrapper">
          <p className="news-container-text-1">Blog & News</p>
          <p className="news-container-text-2">Read Our Latest News</p>
          <div className="news-article">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 260, width: 360 }}
                image={newsImage}
                title="green iguana"
              />
              <CardContent>
                <Typography>
                  <div className="news-card-1">
                    <p className="news-card-text-1">Medical</p>
                    <p className="news-card-text-1">March 31, 2022</p>
                  </div>
                </Typography>
                <Typography>
                  <p className="news-card-text-2">
                    6 Tips To Protect Your Mental Health When You’re Sick
                  </p>
                </Typography>
                <Typography>
                  <div className="doctor-info-card">
                    <img
                      src={cardDoctor}
                      alt=""
                      className="card-doctor-image"
                    />
                    <p className="doctor-name-card">Rebecca Lee</p>
                  </div>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 260, width: 360 }}
                image={newsImage}
                title="green iguana"
              />
              <CardContent>
                <Typography>
                  <div className="news-card-1">
                    <p className="news-card-text-1">Medical</p>
                    <p className="news-card-text-1">March 31, 2022</p>
                  </div>
                </Typography>
                <Typography>
                  <p className="news-card-text-2">
                    6 Tips To Protect Your Mental Health When You’re Sick
                  </p>
                </Typography>
                <Typography>
                  <div className="doctor-info-card">
                    <img
                      src={cardDoctor}
                      alt=""
                      className="card-doctor-image"
                    />
                    <p className="doctor-name-card">Rebecca Lee</p>
                  </div>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 260, width: 360 }}
                image={newsImage}
                title="green iguana"
              />
              <CardContent>
                <Typography>
                  <div className="news-card-1">
                    <p className="news-card-text-1">Medical</p>
                    <p className="news-card-text-1">March 31, 2022</p>
                  </div>
                </Typography>
                <Typography>
                  <p className="news-card-text-2">
                    6 Tips To Protect Your Mental Health When You’re Sick
                  </p>
                </Typography>
                <Typography>
                  <div className="doctor-info-card">
                    <img
                      src={cardDoctor}
                      alt=""
                      className="card-doctor-image"
                    />
                    <p className="doctor-name-card">Rebecca Lee</p>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="our-family-container">
        <div className="our-family-wrapper">
          <div className="left-wrapper-family">
            <p className="left-wrapper-family-text-1">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
            </p>
            <p className="left-wrapper-family-text-2">Our Families</p>
            <p className="left-wrapper-family-text-3">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>
          <div className="right-wrapper-family">
            <div className="left-family-icons">
              <img src={familyIcon1} alt="" className="family-icon" />
              <img src={familyIcon2} alt="" className="family-icon" />
            </div>
            <div className="right-family-icons">
              <img src={familyIcon3} alt="" className="family-icon" />
              <img src={familyIcon4} alt="" className="family-icon" />
            </div>
          </div>
        </div>
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

export default LandingPage;
