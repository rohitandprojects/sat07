import React from 'react'

const WorldMap = () => {
  return (
    <div className="world-map-div position-relative">
        <img src="/images/world-map-top-bg.svg" width={1901} height={95} alt="wheel" className="world-map-strip w-100"/>
        <div className="world-map-sub position-relative">
            <img src="/images/world-map.svg" width={1901} height={839} alt="wheel" className="w-100"/>
            <div className="world-map-toolteep position-absolute">
            <div className="position-absolute toolteep canada"><div className="position-absolute"><span>CANADA</span></div></div>
            <div className="position-absolute toolteep usa"><div className="position-absolute"><span>USA</span></div></div>
            <div className="position-absolute toolteep brazil"><div className="position-absolute"><span>BRAZIL</span></div></div>
            <div className="position-absolute toolteep european"><div className="position-absolute"><span>EUROPEAN COUNTRIES</span></div></div>
            <div className="position-absolute toolteep africa"><div className="position-absolute"><span>SOUTH AFRICA</span></div></div>
            <div className="position-absolute toolteep uganda"><div className="position-absolute"><span>UGANDA</span></div></div>
            <div className="position-absolute toolteep saudi"><div className="position-absolute"><span>SAUDI ARABIA</span></div></div>
            <div className="position-absolute toolteep uae"><div className="position-absolute"><span>UAE</span></div></div>
            <div className="position-absolute toolteep india"><div className="position-absolute"><span>INDIA</span></div></div>
            <div className="position-absolute toolteep thailand"><div className="position-absolute"><span>THAILAND</span></div></div>
            <div className="position-absolute toolteep malaysia"><div className="position-absolute"><span>MALAYSIA</span></div></div>
            <div className="position-absolute toolteep singapore"><div className="position-absolute"><span>SINGAPORE</span></div></div>
            <div className="position-absolute toolteep australia"><div className="position-absolute"><span>AUSTRALIA</span></div></div>
            </div>
        </div>
        <img src="/images/world-map-btm-bg.svg" width={1901} height={91} alt="wheel" className="world-map-strip w-100"/>
    </div>
  )
}

export default WorldMap