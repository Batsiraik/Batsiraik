import React from 'react'

function ContactCard() {
  return (
    <div className='flex mt-2'>
        <img src="http://app.one-viewer.com/media/profile_img/BRIAN-ATCHISON-1.jpg" alt="" className='h-24'/>
        <ul className='text-white' style={{fontSize:"10px"}}>
            <li>BRIAN ATCHISON</li>
            <li>SALES DIRECTOR</li>
            <li>504-553-5106</li>
            <li>EMAIL ME</li>
            <li>VISIT WEBSITE</li>
        </ul>
    </div>
  )
}
export default ContactCard