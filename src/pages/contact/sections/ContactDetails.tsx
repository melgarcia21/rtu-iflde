import React from 'react'
import Image from 'next/image';

const people = [
  {
    name: 'Mrs. Faith Micah Abenes-Balbin',
    role: 'RTU-IFLDE Director',
    image: '/images/contact/mrs.faith.jpg',
  },
  {
    name: 'Ms. Zoe Thea Palisoc',
    role: 'IFLDE Programs Department Assistant Director Staff',
    image: '/images/contact/ms.zoe.jpg',
  },
  {
    name: 'Instr. Rancess S. Cuare',
    role: 'Flexible Learning and Digital Teaching Innovation Offfice Staff',
    image: '/images/contact/placeholder.png',
  },
  {
    name: 'Ms. Allynah A. Borre',
    role: 'Educational Technology and Multimedia Office Staff',
    image: '/images/contact/placeholder.png',
  },
]

const ContactDetails = () => {
  return (

    <div className="py-16 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-xl">
        <h2 className="text-3xl text-purple-900 text-pretty font-semibold tracking-tightsm:text-4xl">
          Meet our staff.
        </h2>
        <p className="mt-6 text-lg/8 text-purple-950">
          Our team is dedicated to providing you with the best possible experience.
          <br /> 
          If you have any questions or need assistance, please don&apos;t hesitate to reach out to us.
        </p>
      </div>
      <ul role="list" className="grid gap-x-20 gap-y-28 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <Image alt="" src={person.image} className="size-20 rounded-full w-20 h-20" width={64} height={64} />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-purple-950 ">{person.name}</h3>
                <p className="text-sm/6 font-semibold text-purple-900">{person.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>

  )
}

export default ContactDetails;