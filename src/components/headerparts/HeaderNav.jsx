// components/GenericHeader.js
import { motion } from "framer-motion";
import Logo from "./Logo";
import { homeNavLinks } from "../../assets/constants/navlinks";

const scrollToAnchor = (anchor) => {
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const HeaderNav = ({ style, navigate }) => {
  const handleNav = (link) => {
    if (window.location.pathname === '/home' && link.anchor) {
      scrollToAnchor(link.anchor);
    } else {
      navigate(link.path);
    }
  };

  return (
    <motion.header {...style.headerProps}>
      {/* Conditionally render Logo based on Animated Entry style */}
      {style.label === 'Animated Entry' ? (
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className={style.logoClassName}>
          <Logo />
        </motion.div>
      ) : (
        <Logo className={style.logoClassName} />
      )}
      
      <nav className="flex gap-8">
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
    </motion.header>
  );
};

export default HeaderNav;