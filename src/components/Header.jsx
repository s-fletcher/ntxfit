import React from 'react';
import '../styles/header.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Header
 */
const Header = ({ backgroundImage, children }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`header ${isMobile ? 'mobile' : ''}`}>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Header;