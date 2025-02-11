import { useState } from 'react';
import Image from 'next/image';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function ContactForm() {
    const [b2bShow, setB2bShow] = useState(false);
    const [dealerShow, setDealerShow] = useState(false);
  
    return (
      <>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="dome-int position-relative" onClick={() => setB2bShow(true)}>
                <Image src="/images/media/B2B-enquiry.webp" width={960} height={670} className="w-auto h-auto" alt="B2B Enquiry"/>
                <div className="domestic-international-title position-absolute">
                    <h2 className="btmToTp">B2B Enquiry</h2>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="dome-int position-relative" onClick={() => setDealerShow(true)}>
                <Image src="/images/media/dealer_equiry.webp" width={960} height={670} className="w-auto h-auto" alt="Dealer/Distributor"/>
                <div className="domestic-international-title position-absolute">
                    <h2 className="btmToTp">Dealer/Distributor</h2>
                </div>
            </div>
        </div>

        <Modal
          size="fullscreen"
          show={b2bShow}
          onHide={() => setB2bShow(false)}
          className='B2BModal'
        >
          <Modal.Header closeButton>
             
          </Modal.Header>
          <Modal.Body className='form-white'>
          <div className="container">
				<div className="row contact-form">
					<div className="col-12">
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingName" placeholder="Name"/>
										<label htmlFor="floatingName">Name</label>
									</Form.Floating>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
										<label htmlFor="floatingEmail">Email</label>
                    				</Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingPhone" placeholder="Phone"/>
										<label htmlFor="floatingPhone">Phone</label>
									</Form.Floating>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingCompany" placeholder="Company Name"/>
										<label htmlFor="floatingCompany">Company Name</label>
                    				</Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-12">
								<div className="form-group">
									<Form.Floating className="form-floating">
                  					<Form.Control as="textarea" className="form-control" rows="1" id="floatingMessage" placeholder="Message"/>
										<label htmlFor="floatingMessage">Message</label>
                    				</Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">	
							<div className="col-12">
								<div className="form-group">
									<button className="view-job-offers-link position-relative send-btn">Send</button>
                  					{/* <Button className='btn' onClick={() => setB2bShow(false)}>Close</Button> */}
								</div>
							</div>
						</div>						
					</div>
				</div>
			</div>
          </Modal.Body>
        </Modal>

        <Modal
          size="fullscreen"
          show={dealerShow}
          onHide={() => setDealerShow(false)}
          className='dealerModal'
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className='form-white'>
          <div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="modal-title">Join our Dealer / Distributor Network</h2>
							</div>
						</div>
						
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingName" placeholder="Name"/>
										<label htmlFor="floatingName">Name</label>
                    				</Form.Floating>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
										<label htmlFor="floatingEmail">Email</label>
                    </Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingPhone" placeholder="Phone"/>
										<label htmlFor="floatingPhone">Phone</label>
                    </Form.Floating>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<Form.Floating className="form-floating">
										<Form.Control type="text" className="form-control" id="floatingCompany" placeholder="Company Name"/>
										<label htmlFor="floatingCompany">Company Name</label>
                    </Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-12">
								<div className="form-group">
									<Form.Floating className="form-floating">
                    <Form.Control as="textarea" className="form-control" rows="1" id="floatingMessage" placeholder="Message"/>
										<label htmlFor="floatingMessage">Message</label>
                  </Form.Floating>
								</div>
							</div>
						</div>
						<div className="row form-row">	
							<div className="col-12">
								<div className="form-group">
									<button className="view-job-offers-link position-relative send-btn">Send</button>
								</div>
							</div>
						</div>
					</div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ContactForm;