import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage,}: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;		// convert page type to SelectedPage enum string type

  return (
    <AnchorLink 
			className={`${selectedPage === lowerCasePage ? "text-primary-500": ""} transition duration-500 hover:text-primary-300`}
			href={`#${lowerCasePage}`}				// will use as id
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
  )
}

export default Link