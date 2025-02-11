"use client";
import { useState } from 'react';
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import B2bForm from './b2b-form';
import DealerForm from './dealer-form';
//import Spinner from '@/app/components/spinner';
 
function ModelComponent() {
    const [b2bShow, setB2bShow] = useState(false);
    const [dealerShow, setDealerShow] = useState(false);
	
  
    return (
      <>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="dome-int position-relative" onClick={() => setB2bShow(true)}>
                <ExportedImage src="/images/media/B2B-enquiry.webp" width={960} height={670} className="w-auto h-auto" alt="B2B Enquiry"/>
                <div className="domestic-international-title position-absolute">
                    <h2 className="btmToTp">B2B Enquiry</h2>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="dome-int position-relative" onClick={() => setDealerShow(true)}>
                <ExportedImage src="/images/media/dealer_equiry.webp" width={960} height={670} className="w-auto h-auto" alt="Dealer/Distributor"/>
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
			  	<B2bForm></B2bForm>
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
		  		<DealerForm></DealerForm>
			</div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ModelComponent;