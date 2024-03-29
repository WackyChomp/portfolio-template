import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/react.svg'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ( { selectedPage, setSelectedPage, isTopOfPage }: Props) => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");		// hook
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const navbarBackground = isTopOfPage ? "" : 'bg-primary-100 drop-shadow';
	const SocialIconHover = 'transition duration-300 cursor-pointer hover:scale-150 border-2 border-red-800 rounded-md hover:border-red-500';

  return (
    <nav>
			{/* outer navbar */}
			<div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}>
				{/*inner navbar */}
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* left */}
						<img src={Logo} alt="logo image here" />
						{/* right */}
						{isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
							{/* Links */}
							<div className={`${flexBetween} gap-8 text-sm`}>
								<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Our Domains' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Perks' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Experts' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							</div>

							{/* Socials */}
							<div className={`${flexBetween} gap-6`}>
								<img src="https://img.icons8.com/ios-filled/500/linkedin.png" className={SocialIconHover} alt="Linkedin" width='25' />
								<img src="https://img.icons8.com/material-rounded/384/github.png" className={SocialIconHover} alt="Github" width='25' />
								<img src="https://img.icons8.com/ios-filled/500/youtube-play.png" className={SocialIconHover} alt="YouTube" width='25' />
							</div>
						</div>
						)
							:(
								<button 
									className="rounded-full bg-secondary-500 p-2"
									onClick={() =>{setIsMenuToggled(!isMenuToggled)}}
								>
									<Bars3Icon className="h-6 w-6 text-purple-800" />
								</button>
							)}						
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			{/* both conditions must be true to activate modal */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
					{/* Close Icon */}
					<div className="flex justify-end p-12">
						<button onClick={() =>{setIsMenuToggled(!isMenuToggled)}}>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</button>
					</div>
					{/* Menu Items , modified above code snippet */}
					<div className="ml-[25%] flex flex-col gap-7 text-2xl z-30">
						<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Our Domains' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Perks' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						<Link page='Experts' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
					</div>
					<div className='ml-[25%] flex gap-10 py-10'>
						<img src="https://img.icons8.com/ios-filled/500/linkedin.png" className={SocialIconHover} alt="Linkedin" width='25' />
						<img src="https://img.icons8.com/material-rounded/384/github.png" className={SocialIconHover} alt="Github" width='25' />
						<img src="https://img.icons8.com/ios-filled/500/youtube-play.png" className={SocialIconHover} alt="YouTube" width='25' />
					</div>
				</div>
			)}
		</nav>
  )
}

export default Navbar