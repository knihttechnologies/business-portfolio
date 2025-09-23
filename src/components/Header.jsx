import { useState } from 'react';
import { useNavigate } from 'react-router';

import { headerStyles } from '../assets/constants/headerStyles';
import { HomeHeaderNav } from './headerparts/HeaderNav'; // Import the new component
import StyleHeader from './headerparts/StyleHeader';

const Header = () => {
  const [styleIdx, setStyleIdx] = useState(0);
  const navigate = useNavigate();

  // Find the selected style object and return it.
  const selectedStyle = headerStyles[styleIdx];

  // If the style is not found, return null
  if (!selectedStyle) {
    return null;
  }

  // Render the single, reusable component with the correct style
  return (
    <>
      <StyleHeader styleIdx={styleIdx} setStyleIdx={setStyleIdx} />
      <HomeHeaderNav style={selectedStyle} navigate={navigate} />
    </>
  );
}

export default Header;