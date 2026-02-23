'use client';
import { useEffect, useState } from 'react';
import Div from '../Div';
import Link from 'next/link';
// import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import { Icon } from '@iconify/react';
import { Blocks } from 'lucide-react';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" onClick={() => setMobileToggle(false)}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" onClick={() => setMobileToggle(false)}>
                        Contact Us
                      </Link>
                    </li>
                    {/* Add the "Book a Call" button inside the mobile menu */}
                  <li className="d-block d-xl-none">
  <a
    href="https://calendly.com/itseg/segmeet"
    target="_blank"
    rel="noopener noreferrer"
    className="cs-btn cs-style1"
    style={{
      maxWidth: '200px',       // Limit the width of the button
      marginLeft: '20px',      // Add left margin for proper spacing
      padding: '10px',         // Add some padding for a balanced appearance
      display: 'flex',         // Use flex to align text and icon horizontally
      alignItems: 'center',    // Align text and icon vertically
      justifyContent: 'space-between', // Space between text and icon
    }}
  >
   <span style={{ display: 'block' }}>Book a Call</span>
    <Icon icon="bi:arrow-right" style={{ marginLeft: '10px' }} /> {/* Adjust spacing between text and icon */}
  </a>
</li>

                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <button onClick={() => setMobileToggle(false)} href="https://calendly.com/itseg/segmeet" className="cs-btn cs-style1">
                    <span>Book a Call</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                  
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button onClick={() => setMobileToggle(false)} href="https://calendly.com/itseg/segmeet" className="cs-btn cs-style1 d-none d-xl-block">
          <span>Book a Call</span>
          <Icon icon="bi:arrow-right" />
        </button>
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
