import React from 'react';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';


type Props = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  code: string;
  source: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: { opacity:0, scale:0.5 },
  visible: { opacity:1, scale:1 },
}

const RoundProjectImage = 'rounded-full h-20 w-20';
const RoundProjectImage1 = 'rounded-lg h-64 w-96';


const Project = ({ image, title, description, tags, code, source, setSelectedPage }: Props) => {
  return (

    /* Project Card */
    <motion.div 
      className='w-[420px] mt-2 rounded-md border-2 border-gray-100 bg-primary-300 px-5 py-7 text-center'
      variants={childVariant}
    >
      {/* Image */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-lg border-gray-100 bg-secondary-500 p-1">
          <img src={image} className={RoundProjectImage1} alt="Image be right here" />
        </div>
      </div>

      {/* Title */}
      <h4 className="font-bold">{title}</h4>

      {/* Description */}
      <p className="my-3">{description}</p>

      {/* Tags */}
      <p className="my-5 bg-slate-300">{tags}</p>

      {/* Description */}
      <div className="flex space-x-10 [&>*]:bg-secondary-500">
        <a href={code}>Code</a>
        <a href={source}>Source</a>
      </div>

    </motion.div>
  )
}

export default Project