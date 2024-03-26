import React, { useState } from 'react';

export const Vector = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="red" // Start with red color
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fill: isHovered ? 'red' : '#211A1A' }} // Change fill color on hover
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M12 22L2.8 12.8C0.62 10.24 0.74 6.38 3.16 3.96C4.32 2.8 5.87 2.12 7.51 2.06C9.15 2 10.75 2.56 12 3.63C13.24 2.56 14.84 2 16.48 2.06C18.11 2.12 19.67 2.8 20.83 3.95C21.99 5.11 22.67 6.67 22.74 8.3C22.8 9.94 22.24 11.54 21.17 12.79L12 22ZM19.66 11.49C20.4 10.62 20.78 9.52 20.74 8.38C20.69 7.25 20.22 6.17 19.42 5.37C18.61 4.57 17.54 4.1 16.4 4.06C15.27 4.02 14.16 4.41 13.3 5.15L12 6.28L10.69 5.15C9.83 4.41 8.72 4.02 7.59 4.06C6.45 4.1 5.38 4.57 4.57 5.37C3.77 6.17 3.3 7.25 3.25 8.38C3.21 9.52 3.59 10.62 4.33 11.49L4.45 11.62L12 19.17L19.54 11.62L19.66 11.49Z"
        fillOpacity={1}
        fillRule="nonzero"
      />
    </svg>
  );
};
