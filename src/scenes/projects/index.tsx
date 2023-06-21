import React from 'react'
import HText from '@/shared/HText';
import { motion } from 'framer-motion';
import { SelectedPage, ProjectType } from '@/shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = (props: Props) => {
  return (
    <section id='projects' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
        {/* Header + Description */}
        <HText>Projects</HText>
        <p className="">
          Browse through all kinds of projects I have completed or ongoing.
          Tap the links below for more indepth context and my thought process!
        </p>
      </motion.div>
    </section>
  )
}

export default Projects