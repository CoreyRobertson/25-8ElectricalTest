// components/Overlay.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiPhone } from 'react-icons/ci'
const Overlay = ({ isOpen, onClose }) => {
    const closeMenu = () => {
        onClose();
    };

    return (
        <motion.div
            className={`overlay ${isOpen ? 'open' : ''}`}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0, x: '100%' },
                visible: { opacity: 1, x: '0%' },
            }}
            transition={{
                duration: 0.3, // Adjust the duration to slow down the animation

            }}
        >
            <button className="close-button" onClick={onClose}>
                &#10005;
            </button>
            <div className='overlay_top'>

                <ul>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='/' passHref>
                        <li aria-label="Home">HOME</li>
                    </Link>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='OurServices' passHref>
                        <li aria-label="Our Services">OUR SERVICES</li>
                    </Link>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='ElectricalService' >
                        <li aria-label="Electrical Safety Service">ELECTRICAL SAFETY SERVICE</li>
                    </Link>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='DetectorService' >
                        <li aria-label="Smoke Alarm Safety Service">SMOKE ALARM SAFETY SERVICE</li>
                    </Link>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='Booking' >
                        <li aria-label="Book A Service">BOOK A SERVICE</li>
                    </Link>
                    <Link onClick={() => closeMenu()} className='explore_button-link' href='Bio'>
                        <li aria-label="About Us">ABOUT US</li>
                    </Link>
                </ul>
            </div>
            <div className='overlay_bottom'>
                <ul>
                    <Link className='explore_button-link' href='PrivacyPolicy' passHref>
                        <li onClick={isOpen}>PRIVACY POLICY</li>
                    </Link>
                    <Link className='explore_button-link' href='ElectricalAgreementPlan' >
                        <li onClick={isOpen}>ELECTRICAL AGREEMENT PLAN</li>
                    </Link>
                    <li>
                        <CiPhone className='overlay_phone' height={20} width={20} />0466 382 487
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Overlay;
