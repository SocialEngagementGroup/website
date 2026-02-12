// import React from 'react';
// import Div from '../Div';

// const partnerLogos = [
//   {
//     src: 'template/images/partner_1.svg',
//     alt: 'Partner',
//   },
//   {
//     src: 'template/images/partner_2.svg',
//     alt: 'Partner',
//   },
//   {
//     src: 'template/images/partner_3.svg',
//     alt: 'Partner',
//   },
//   {
//     src: 'template/images/partner_4.svg',
//     alt: 'Partner',
//   },
//   {
//     src: 'template/images/partner_5.svg',
//     alt: 'Partner',
//   },
// ];

// export default function LogoList() {
//   return (
//     <Div className="cs-partner_logo_wrap">
//       {partnerLogos.map((partnerLogo, index) => (
//         <div className="cs-partner_logo" key={index}>
//           <img src={partnerLogo.src} alt={partnerLogo.alt} />
//         </div>
//       ))}
//     </Div>
//   );
// }









import React from 'react';
import Div from '../Div';

const partnerLogos = [
  {
    src: 'whitelogo/Aref-Law-Logo-Icon-White.png',
    alt: 'Partner',
    style: { width: '250px', height: '150px' }, // Set size for this logo
  },
  {
    src: 'whitelogo/MFC-Logo.png',
    alt: 'Partner',
    style: { width: '200px', height: '200px' }, // Set size for this logo
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      {partnerLogos.map((partnerLogo, index) => (
        <div
          className="cs-partner_logo"
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: partnerLogo.style.width, // Apply width from individual logo
            height: partnerLogo.style.height, // Apply height from individual logo
            borderRadius: '10px', // Optional: for rounded corners
          }}
        >
          <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Ensures the logos maintain their aspect ratio
            }}
          />
        </div>
      ))}
    </Div>
  );
}
