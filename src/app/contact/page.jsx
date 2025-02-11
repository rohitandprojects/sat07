
import React from 'react'
import SocialMedia from '../components/social'
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Map from './components/map';
import ContactForm from "./components/ContactForm";

const Contact = () => {
	
  return (<>
		<section className="section banner-main contact-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-8 address-column">
							<div className="row">
								<div className="col-12">
									<div className="address">
										<h3>Contacts</h3>
									</div>		
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="address">
										<ul>
											<li><strong>Call:</strong> <Link href={"tel:+917940394252"}>+91 79 4039 4252</Link></li>
											<li><strong>Email:</strong> <Link href={"mailto:info@satvam.in"}>info@satvam.in</Link></li>
										</ul>
									</div>		
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="address">
										<ul>
											<li><strong>Export:</strong> <Link href={"mailto:export@satvam.in"}>export@satvam.in</Link></li>											
											<li><strong>Join Us:</strong> <Link href={"mailto:hr@satvam.in"}>hr@satvam.in</Link></li>											
										</ul>	
									</div>		
								</div>
							</div>
							<div className="row contact-address">
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="address">
										<h3>Factory Address</h3>
										<p>Survey No 419, 421, 422, Amodara Near Rampura Cross Road, Sabar Dairy to Talod Road, PRANTIJ, Himatnagar,<br /> Gujarat - 383210</p>
									</div>		
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="address">
										<h3>Office Address</h3>
										<p>A-203, Ganesh Meridian,<br />Opp. Gujarat High Court, S.G. Highway,<br />Ahmedabad – 380061, Gujarat</p>
									</div>		
								</div>
							</div>
							<ContactForm></ContactForm>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 map-column">
							<Map></Map>
							{/* <div className="map-box-main">
								<div className="map-box">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5758364459352!2d72.5241871760928!3d23.076007214330637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834bfa8ffb4d%3A0xaa57bd827c42746a!2sSatvam%20Nutrifoods%20Limited%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1688663938318!5m2!1sen!2sin"
									width="100%"
									height="100%"
									frameBorder="0"
									style={{ border: 0 }}
									allowFullScreen=""
									aria-hidden="false"
									tabIndex="0"
								/>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section><div className="contact-social position-fixed"><SocialMedia></SocialMedia></div>
       </>
  )
}

export default Contact