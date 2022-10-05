import Image from 'next/image';
import React from 'react';

const Bio = (): JSX.Element => {
  return (
    <div className="flex items-center px-6">
      <div>
        <Image
          src="/assets/about-profile-photo.jpg"
          alt="Anson Lichtfuss"
          className="border-solid border-b border-black"
          width={50}
          height={50}
        />
      </div>
      <p className="ml-6 mb-0">
        Written by <strong>Anson Lichtfuss</strong>, a frontend engineer
        building useful, beautiful interfaces in Colorado.
      </p>
    </div>
  );
};

export default Bio;
