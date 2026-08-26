'use client';
import {FormEvent, useEffect, useMemo, useState} from 'react';

const options=['Attending an Event','Speaking Opportunities','Sponsorship','Association & Media Partnership','General Enquiry'];
export default function ContactForm(){
 const [interest,setInterest]=useState('Attending an Event');
 useEffect(()=>{const q=new URLSearchParams(window.location.search).get('interest')||''; if(q==='speaking')setInterest('Speaking Opportunities'); else if(q==='sponsorship')setInterest('Sponsorship'); else if(q==='association')setInterest('Association & Media Partnership');},[]);
 const secondary=useMemo(()=>{
  if(interest==='Attending an Event'||interest==='Speaking Opportunities') return {label:'EVENT*',name:'secondary',items:['Banking CEE Expo 2026','Digital Banking CEE Summit 2027']};
  if(interest==='Sponsorship') return {label:"I'M INTERESTED IN*",name:'secondary',items:['Banking CEE Expo','Digital Banking CEE Summit','Tailored Event','Webinar','Not Sure Yet']};
  if(interest==='Association & Media Partnership') return {label:'PARTNERSHIP TYPE*',name:'secondary',items:['Banking Association Partnership','Media Partnership']};
  return null;
 },[interest]);
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const fd=new FormData(e.currentTarget);const lines=[`Interest: ${interest}`,secondary?`${secondary.label.replace('*','')}: ${fd.get('secondary')}`:'',`Name: ${fd.get('firstName')} ${fd.get('lastName')}`,`Company / Organisation: ${fd.get('company')}`,`Job Title: ${fd.get('jobTitle')}`,`Business Email: ${fd.get('email')}`,`Phone: ${fd.get('phone')}`,`Message: ${fd.get('message')}`].filter(Boolean).join('\n');window.location.href=`mailto:info@bancee.eu?subject=${encodeURIComponent(`Banking CEE — ${interest}`)}&body=${encodeURIComponent(lines)}`;}
 return <form className="contact-form" onSubmit={submit}>
   <p className="eyebrow dark">How Can We Help?</p>
   <label>I&apos;M INTERESTED IN*<select value={interest} onChange={e=>setInterest(e.target.value)}>{options.map(o=><option key={o}>{o}</option>)}</select></label>
   {secondary&&<label>{secondary.label}<select name={secondary.name}>{secondary.items.map(o=><option key={o}>{o}</option>)}</select></label>}
   <h3>Your Details</h3>
   <div className="contact-fields"><label>FIRST NAME*<input name="firstName" required/></label><label>LAST NAME*<input name="lastName" required/></label><label>COMPANY / ORGANISATION*<input name="company" required/></label><label>JOB TITLE<input name="jobTitle"/></label><label>BUSINESS EMAIL*<input name="email" type="email" required/></label><label>PHONE<input name="phone" type="tel"/></label></div>
   <label>MESSAGE*<textarea name="message" required rows={6}/></label>
   <label className="consent"><input type="checkbox" required/> <span>I have read and agree to the <a href="https://www.bancee.eu/privacy-policy">Privacy Policy</a>.</span></label>
   <button className="contact-submit" type="submit">SEND MESSAGE →</button>
 </form>
}
