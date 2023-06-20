import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  return (
  	<section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
			{/* Image and Main Header */}
			<motion.div 
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}	// navbar item highlight when scrolling to section
			>
				{/*----------------------- Left -----------------------*/}
				{/* Main Header */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* Headings */}
					<motion.div 
						className="md:-mt-20"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity:0, x:-50 },
							visible: { opacity:1, x:0 }
						}}
					>
						{/* Relative tag */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 beofre:z-[-1] md:before:content-evolvetext">		{/* hides 'evolve' text on md screen */}
								<img src="" alt="" />
								<span className='uppercase font-bold text-7xl'>Welcome, <br/>my name is <span className='text-red-500'>Schrader</span></span>
							</div>
						</div>
						<p className='mt-8 text-sm'>
							This is a customizable template for landing pages, portfolios, 
              and anything that comes to mind. I have taken inspiration from all kinds
              of sources and combined them here! 
              <button className='bg-blue-300 rounded-md border border-4 border-pink-600'>Modal Popup Button Here</button>
						</p>
					</motion.div>

					{/* Call to Action (Button) */}
					<motion.div 
						className="mt-8 mb-8 flex items-center gap-8"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ delay: 0.2, duration: 1 }}
						variants={{
							hidden: { opacity:0, x:-50 },
							visible: { opacity:1, x:0 }
						}}
					>

						<button className='bg-secondary-500 rounded-md py-1 px-3'>
							Join Now
            </button>

						<AnchorLink 
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							href={`#${SelectedPage.ContactUs}`}
						>
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>

				{/*----------------------- Right -----------------------*/}
				{/* Image */}
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img className="rounded-3xl" src="https://thumbs.gfycat.com/PowerfulDevotedAmphiuma-max-1mb.gif" alt="homepage-graphic" />
				</div>
			</motion.div>
    </section>
  )
}

export default Home