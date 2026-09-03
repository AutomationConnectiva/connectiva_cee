'use client';
import {useState} from 'react';
import Image from 'next/image';

const logos=[
  '/images/logos/technology/tieto.png','/images/logos/technology/temenos.png','/images/logos/technology/comarch.png','/images/logos/technology/2.png',
  '/images/logos/technology/7.png','/images/logos/technology/9.png','/images/logos/technology/12.png','/images/logos/technology/33.png',
  '/images/event-sponsors/expo-evrotrust.jpg','/images/event-sponsors/expo-eri.jpg','/images/event-sponsors/expo-authologic.jpg','/images/event-sponsors/expo-guardsquare.jpg',
  '/images/event-sponsors/summit-fme.jpg','/images/event-sponsors/summit-salesforce.jpg','/images/event-sponsors/summit-onespan.jpg'
];
export default function PartnerLogoGrid(){
 const [open,setOpen]=useState(false); const visible=open?logos:logos.slice(0,8);
 return <>
<div className="partner-logo-grid">{visible.map((src,i)=><div key={src}><Image src={src} alt={`Technology partner ${i+1}`} fill/></div>)}</div>
<div className="partner-expand"><button onClick={()=>setOpen(v=>!v)}>{open?'SHOW FEWER ↑':'VIEW MORE PARTNERS ↓'}</button></div></>
}
