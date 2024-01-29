import React, { useState, useEffect } from 'react';


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Thêm hoặc loại bỏ class tùy thuộc vào trạng thái isDarkMode
    document.body.classList.toggle('darkmode', isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <li>
      <button className={`DarkModeToggle ${isDarkMode ? 'darkmode' : ''}`} id='DarkModeToggle' onClick={handleDarkModeToggle}>
        <img src={require('./img/bongden.jpg')} alt="" width="30" height="30" />
      </button>
    </li>
  );
};

export default DarkModeToggle;
