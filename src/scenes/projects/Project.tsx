import React from 'react';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';


type Props = {
  image: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: { opacity:0, scale:0.5 },
  visible: { opacity:1, scale:1 },
}

const RoundProjectImage = 'rounded-full h-20 w-20';


const Project = ({ image, title, description, setSelectedPage }: Props) => {
  return (

    /* Project Card */
    <motion.div 
      className='mt-5 rounded-md border-2 border-gray-100 bg-primary-300 px-5 py-16 text-center'
      variants={childVariant}
    >
      {/* Image */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-gray-100 bg-secondary-500 p-1">
          <img src={image} className={RoundProjectImage} alt="Image be right here" />
        </div>
      </div>

      {/* Title */}
      <h4 className="font-bold">{title}</h4>

      {/* Description */}
      <p className="my-3">{description}</p>

    </motion.div>
  )
}

export default Project