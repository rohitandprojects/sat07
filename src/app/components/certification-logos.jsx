"use client";
import ExportedImage from "next-image-export-optimizer";

const CertificationLogos = () => {
  return (
    <ul className="w-100 d-flex justify-content-between align-items-center">
        <li><div><ExportedImage src="/images/fssai.webp" width={187} height={107} alt="fssai" /></div></li>
        <li><div><ExportedImage src="/images/ISO.webp" width={103} height={106} alt="ISO" /></div></li>
        <li><div><ExportedImage src="/images/FDA.webp" width={181} height={110} alt="FDA" /></div></li>
        <li><div><ExportedImage src="/images/BRC-Food.webp" width={92} height={149} alt="BRC-Food" /></div></li>
        <li><div><ExportedImage src="/images/kosher-certification.webp" width={292} height={100} alt="Kosher" /></div></li>
        <li><div><ExportedImage src="/images/haccp.webp" width={112} height={106} alt="HACCP" /></div></li>
        <li><div><ExportedImage src="/images/HALAL.webp" width={97} height={149} alt="HALAL" /></div></li>
        <li><div><ExportedImage src="/images/spices_board.webp" width={121} height={160} alt="Spice Board" /></div></li>
        <li><div><ExportedImage src="/images/apeda.webp" width={222} height={160} alt="APEDA" /></div></li>
    </ul>
  )
}

export default CertificationLogos