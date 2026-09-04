'use client';
import {useState} from 'react';
import Image from 'next/image';

const logos=[
  '/images/partner-logos/1.png','/images/partner-logos/2.png','/images/partner-logos/3.png','/images/partner-logos/4.png',
  '/images/partner-logos/5.png','/images/partner-logos/6.png','/images/partner-logos/7.png','/images/partner-logos/8.png',
  '/images/partner-logos/9.png','/images/partner-logos/11.png','/images/partner-logos/12.png','/images/partner-logos/13.png',
  '/images/partner-logos/14.png','/images/partner-logos/15.png','/images/partner-logos/16.png','/images/partner-logos/17.png',
  '/images/partner-logos/18.png','/images/partner-logos/19.png','/images/partner-logos/20.png','/images/partner-logos/21.png',
  '/images/partner-logos/22.png','/images/partner-logos/23.png','/images/partner-logos/24.png','/images/partner-logos/25.png',
  '/images/partner-logos/26.png','/images/partner-logos/27.png','/images/partner-logos/28.png','/images/partner-logos/29.png',
  '/images/partner-logos/30.png','/images/partner-logos/31.png','/images/partner-logos/32.png','/images/partner-logos/33.png',
  '/images/partner-logos/34.png','/images/partner-logos/35.png','/images/partner-logos/36.png','/images/partner-logos/37.png',
  '/images/partner-logos/38.png','/images/partner-logos/39.png','/images/partner-logos/40.png','/images/partner-logos/41.png',
  '/images/partner-logos/42.png','/images/partner-logos/43.png','/images/partner-logos/44.png','/images/partner-logos/45.png',
  '/images/partner-logos/46.png','/images/partner-logos/47.png','/images/partner-logos/48.png','/images/partner-logos/49.png',
  '/images/partner-logos/50.png','/images/partner-logos/51.png','/images/partner-logos/52.png','/images/partner-logos/53.png',
  '/images/partner-logos/54.png','/images/partner-logos/55.png','/images/partner-logos/56.png','/images/partner-logos/57.png',
  '/images/partner-logos/58.png','/images/partner-logos/59.png','/images/partner-logos/60.png','/images/partner-logos/61.png',
  '/images/partner-logos/62.png','/images/partner-logos/63.png','/images/partner-logos/64.png','/images/partner-logos/65.png',
  '/images/partner-logos/66.png','/images/partner-logos/67.png','/images/partner-logos/68.png','/images/partner-logos/69.png',
  '/images/partner-logos/70.png','/images/partner-logos/71.png','/images/partner-logos/72.png','/images/partner-logos/73.png'
];
export default function PartnerLogoGrid(){
 const [open,setOpen]=useState(false); const visible=open?logos:logos.slice(0,8);
 return <>
<div className="partner-logo-grid">{visible.map((src,i)=><div key={src}><Image src={src} alt={`Technology partner ${i+1}`} fill/></div>)}</div>
<div className="partner-expand"><button onClick={()=>setOpen(v=>!v)}>{open?'SHOW FEWER ↑':'VIEW MORE PARTNERS ↓'}</button></div></>
}
