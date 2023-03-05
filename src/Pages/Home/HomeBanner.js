import React from 'react'
import Banner from '../../Assets/banner.mp4'

export default function HomeBanner() {
  return (
    <div style={{width: "100%", height:"100%"}}>
        <video style={{width: "100%", height: "100%"}} src={Banner} loop autoPlay preload="auto" playsInline webkit-playsinline="true" x5-playsinline="true">
        </video>
    </div>
  )
}
