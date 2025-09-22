// components/GenericHeader.js
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { homeNavLinks } from "../../assets/constants/navlinks";
import DarkModeToggle from "../DarkModeToggle";
import { useState } from "react";

const scrollToAnchor = (anchor) => {
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const HeaderNav = ({ style, navigate }) => {
    const { isMobileMenuOpen, setMobileMenuOpen } = useState(false)
    const windowWidth = window.innerWidth

    const handleNav = (link) => {
        if (window.location.pathname === '/' && link.anchor) {
        scrollToAnchor(link.anchor);
        } else {
        navigate(link.path);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Main menu */}
            <motion.header {...style.headerProps} className={style.headerProps.className + `bg-gradient-to-br from-cyan-200 via-gray-300 to-cyan-200 dark:bg-gradient-to-br dark:from-cyan-900 dark:via-gray-900 dark:to-cyan-900 p-3`}>
                {/* Conditionally render Logo based on Animated Entry style */}
                {style.label === 'Animated Entry' ? (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className={style.logoClassName}>
                        <Logo />
                    </motion.div>
                ) : (
                    <Logo size={30} className={style.logoClassName} />
                )}

                <nav className="hidden lg:flex flex-wrap gap-4 md:gap-8 items-center justify-center md:justify-end text-sm md:text-base">
                    {homeNavLinks.map((link, i) => (
                        <motion.button
                            key={link.name}
                            onClick={() => handleNav(link)}
                            className={style.navLinkClassName}
                            {... (style.navLinkProps ? style.navLinkProps(i) : {})} // Apply link animations if they exist
                        >
                            {style.showIcons && link.icon}
                            {style.navLinkTextClassName ? (
                                <span className={style.navLinkTextClassName}>{link.name}</span>
                            ) : (
                                link.name
                            )}
                            {style.navLinkHoverEffect}
                        </motion.button>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-gray-800 dark:text-white"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Dark mode button */}
                <div className="hidden lg:flex">
                    <DarkModeToggle />
                </div>
            </motion.header>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className={`ml-64 lg:hidden right-0 fixed inset-0 z-999 bg-white dark:bg-gray-900 p-2`}
                >
                    <div className={`flex flex-col items-center p-4 gap-4`}>
                        <div className="flex justify-between w-full sm:ml-4 items-center">
                            <h3 className="text-xl sm:text-xs font-bold">{heading}</h3>
                            <button onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <hr className="border-2 w-full mt-5 mb-5  border-green-500 my-2" />
                        <nav className="flex flex-col flex-wrap gap-4 md:gap-8 items-center justify-center md:justify-end text-sm md:text-base">
                            {homeNavLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleNav(link)}
                                    className={style.navLinkClassName}
                                    {... (style.navLinkProps ? style.navLinkProps(i) : {})} // Apply link animations if they exist
                                >
                                    {style.showIcons && link.icon}
                                    {style.navLinkTextClassName ? (
                                        <span className={style.navLinkTextClassName}>{link.name}</span>
                                    ) : (
                                        link.name
                                    )}
                                    {style.navLinkHoverEffect}
                                </motion.button>
                            ))}
                        </nav>
                        <hr className="border-2 w-full mt-5 mb-5  border-green-500 my-2" />
                        <DarkModeToggle />
                    </div>
                    
                </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeaderNav;