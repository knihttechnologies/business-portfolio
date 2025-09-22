// components/GenericHeader.js
import { motion } from "framer-motion";
import Logo from "./Logo";
import { homeNavLinks } from "../../assets/constants/navlinks";
import DarkModeToggle from "../DarkModeToggle";

const scrollToAnchor = (anchor) => {
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const HeaderNav = ({ style, navigate }) => {
  const handleNav = (link) => {
    if (window.location.pathname === '/' && link.anchor) {
      scrollToAnchor(link.anchor);
    } else {
      navigate(link.path);
    }
  };

    return (
        <motion.header {...style.headerProps} className={style.headerProps.className + `bg-gradient-to-br from-cyan-200 via-gray-300 to-cyan-200 dark:bg-gradient-to-br dark:from-cyan-900 dark:via-gray-900 dark:to-cyan-900 p-3`}>
            {/* Conditionally render Logo based on Animated Entry style */}
            {style.label === 'Animated Entry' ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className={style.logoClassName}>
                    <Logo />
                </motion.div>
            ) : (
                <Logo size={30} className={style.logoClassName} />
            )}

            <nav className="flex flex-wrap gap-4 md:gap-8 items-center justify-center md:justify-end text-sm md:text-base">
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
            <DarkModeToggle />
        </motion.header>
    );
};

export default HeaderNav;