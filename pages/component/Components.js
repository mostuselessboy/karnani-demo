
import { LuFacebook, LuInstagram, LuLinkedin, LuPanelTopClose, LuSearch, LuTwitch, LuYoutube } from "react-icons/lu";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { motion, useInView } from "framer-motion";

import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useRef, useState } from "react";
import Link from "next/link";
export function CompBigBanner({ title, description, buttonText, bgImage, positionAlign, bannerHeight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const bannerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 5%',
    position: 'relative',
    minHeight: bannerHeight,
    color: 'white',
    width: '90%',
    ...(positionAlign === "right" ? { justifyContent: 'flex-end' } : {})
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const slideFadeIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      style={bannerStyle}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        style={{ minWidth: '23rem', width: '50%', zIndex: '2' }}
        variants={slideFadeIn}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h1
          style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'EffraBold' }}
          variants={slideFadeIn}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {title}
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.2rem', margin: '3rem 0', fontWeight: '100' }}
          variants={slideFadeIn}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {description}
        </motion.p>
        <motion.button
          className="primaryButton"
          variants={slideFadeIn}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
      <div
        className="fadeBackground"
        style={positionAlign === "right" ? { transform: 'scale(-1, 1)' } : {}}
        variants={slideFadeIn}
        transition={{ type: "spring", stiffness: 100 }}
      ></div>
    </motion.div>
  );
};
export function CompCardCollection({ title, cardDataArray }) {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '3rem 2.5%',
    width: '95%',
    paddingTop: '0'
  };

  const cardStyle = {
    boxShadow: '0 0px 10px 0 rgba(0,0,0,0.5)',
    width: '15rem',
    margin: '1rem',
    padding: '3rem 2.5rem',
    textAlign: 'center',
    borderRadius: '2px',
    overflow: 'hidden',
  };

  const imgStyle = {
    width: '2rem',
    height: '2rem',
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '#25CFC6'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
    fontFamily: 'EffraBold'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    margin: '0.5rem 1rem',
  };

  const slideFadeIn = {
    hidden: { opacity: 0, x: -50 , scale:0},
    visible: { opacity: 1, x: 0, scale:1 }
  };

  return (
    <>
      <h1 className="headline">{title}</h1>
      <div style={containerStyle}>
        {cardDataArray.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              style={cardStyle}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFadeIn}
              transition={{ duration: 0.5, delay: index * 0.3, type: "spring", stiffness: 100 }}
            >
              <img src={card.imgUrl} alt={card.heading} style={imgStyle} />
              <h2 style={headingStyle}>{card.heading}</h2>
              <p style={descriptionStyle}>{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export function CompTimeline({ title, steps }){
  const slideFadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div style={{ margin: '5rem 0' }}>
      <h1 className="headline">{title}</h1>
      <div style={{ position: 'relative' }}>
        <div className="verticalLine"></div>
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? 'row-reverse' : 'row';
          const textAlign = isEven ? 'left' : 'right';
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '3rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                margin: '4rem 0',
                flexDirection
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFadeIn}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: index * 0.3 }}
            >
              <h2 style={{
                color: 'rgb(37, 207, 198)',
                width: '20rem',
                textAlign: textAlign,
                fontSize: '2.5rem',
                fontFamily: 'EffraBold'
              }}>
                Step {index + 1}
              </h2>
              <h2 style={{
                backgroundColor: 'rgb(37, 207, 198)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {index + 1}
              </h2>
              <div style={{
                boxShadow: '0 0px 10px 0 rgba(0,0,0,0.5)',
                transition: '0.3s',
                width: '15rem',
                margin: '0',
                backgroundColor: 'white',
                padding: '1rem 2.5rem',
                textAlign: 'center',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <h1 style={{ fontFamily: 'EffraBold', margin: '0.2rem 0' }}>{step.title}</h1>
                <p>{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


export function CompFAQ({ faqs }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h1 className="headline">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span style={{ fontWeight: '600', fontSize: '1.8rem', color: '#717171' }}>{faq.question}</span>
            <motion.div
              initial={false}
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="faq-icon"
            >
              <MdOutlineArrowDropDownCircle size={30} />
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer"
            style={{ fontWeight: '600', fontSize: '1.3rem', color: '#717171' }}
          >
            {faq.answer}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
      setMenuOpen(false);
  };
  return(
    <div className="Navbar">
        <img style={{width:'5rem'}} src="./images/logo.png" alt="Logo" />
        <div className="hamburgerMenu"  onClick={toggleMenu} ><CiMenuKebab size={30}></CiMenuKebab></div>
        <div className={`navbarLinksMobile ${menuOpen ? "showNavbarMobileLink" : ""}`}>
              <LuPanelTopClose size={30}  onClick={closeMenu}></LuPanelTopClose>
                <Link href="/">Home</Link>
                <Link href="/property">Property</Link>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Contact</Link>
        </div>
    <div className="navbarLink HideMobile">
        <Link href="/">Home</Link>
        <Link href="/property">Property</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact</Link>
    </div>
    <div className="SearchContainer HideMobile">
        <input type="text" placeholder="Search..." />
        <LuSearch size={25} />
    </div>
    <div className="HideTablet" style={{display:'flex', gap:'1rem'}}>
    <button className="primaryButton" style={{padding:'0.7rem 1rem', borderRadius:'0.7rem', whiteSpace:'pre', fontSize:'1rem'}}>Get in Touch</button>
    <button className="primaryButton" style={{padding:'0.7rem 1rem', borderRadius:'0.7rem', display:'flex', alignItems:'center', gap:'1rem'}}> <AiOutlineWhatsApp size={30} /> <FaPhone  size={20} /></button>
    </div>
  </div>
  )
}


export  function Footer(){
  return(
    <div className="footer">
    <div className="footerMain">
        <div className="subFooter1">
          <img src="./images/logo2.png" alt="Logo" />
          <h3>Karnani is a trading name of  HOUSEHAT UK LIMITED registered in England and Wales No. 12525449.</h3>
          <h3> © Karnani 2024 Househat UK Limited is member of <span className="linkText"> Property Redress Scheme.</span> </h3>
          <h3>Househat UK Limited is a member of <span className="linkText">UKALA</span> with <span className="linkText">Client Money Protection (007396)</span>.</h3>

        </div>
        <div className="subFooter2">
          <h1>Company</h1>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">Partners</a>
          <a href="#">Refer</a>
        </div>
        <div className="subFooter1">
          <h3>Explore our range of beautiful properties curated for you!contact@thekarnani.com</h3>
          <h3>+44 2045842425</h3>
          <h3><span className="linkText">Househat UK Limited, The Oxford Science Park, Robert Robinson Ave, Littlemore, Oxford, OX4 4GP.</span></h3>
          <h3><span className="linkText">Househat UK Limited, 124 City Road, London, England, EC1V 2NX.</span></h3>

        </div>
    </div>
    <div className="footerSmallContainer">
      <div className="footerSocial">
        <FaWhatsapp size={35}/>
        <LuFacebook size={35}/>
        <LuInstagram size={35}/>
        <LuYoutube size={35} />
        <LuLinkedin size={35}/>
      </div>
      <h3><span className="linkText">Privacy Policy |Terms & Conditions</span></h3>
    </div>
    <hr style={{opacity:'0.1'}}/>
    <div className="footerSmallContainer" style={{marginTop:'-4rem'}}>
      <h3>© Karnani 2024. All Rights Reserved </h3>
      <div className="footerSocial">
        <FaCcVisa size={30}></FaCcVisa>
        <FaCcMastercard size={30}></FaCcMastercard>
        <FaCcPaypal size={30}></FaCcPaypal>

      </div>
    </div>

    </div>

  )
}
