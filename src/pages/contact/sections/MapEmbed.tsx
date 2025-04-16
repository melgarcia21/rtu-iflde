import React from 'react'

const MapEmbed = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Our Location</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.23117914427!2d121.04142296202032!3d14.574488450448928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c84f21cb9053%3A0xfcc017aa32d78946!2sRizal%20Technological%20University%20-%20Main%20Campus!5e0!3m2!1sen!2sph!4v1744256747062!5m2!1sen!2sph" 
        className='map-embed' loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default MapEmbed;