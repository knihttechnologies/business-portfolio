import { useState } from 'react';
import { useNavigate } from 'react-router';

import { headerStyles } from '../assets/constants/headerStyles';
import HeaderNav from './headerparts/HeaderNav'; // Import the new component
import StyleHeader from './headerparts/StyleHeader';

const Header = () => {
  const [styleIdx, setStyleIdx] = useState(0);
  const navigate = useNavigate();

  {headerStyles.map((style, idx) => (
    <button
      key={style.label}
      onClick={() => setStyleIdx(idx)}
      className={`px-3 py-1 rounded-lg font-semibold text-xs shadow ${styleIdx === idx ? 'bg-yellow-400 text-black' : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition'}`}
    >
      {style.label}
    </button>
  ))}

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
      <HeaderNav style={selectedStyle} navigate={navigate} />
    </>
  );
}

export default Header;