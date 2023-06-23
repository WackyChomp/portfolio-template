import React from 'react'
import HText from '@/shared/HText';
import { motion } from 'framer-motion';
import { SelectedPage, ProjectType } from '@/shared/types';
import { projects } from '@/shared/constants';    // contains array data
import Project from './Project';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
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

      {/* List of Projects */}
      <div className="md:flex items-center justify-between gap-6 mt-5">
        {projects.map((project: ProjectType) => (
          <Project
            key = {project.title}
            image = {project.image}
            title = {project.title}
            description = {project.description}
            setSelectedPage = {setSelectedPage}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects