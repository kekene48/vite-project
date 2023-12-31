import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    // turn the page name to lower case and remove the spaces
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? 'text-primary-500': ''}
    transition duration-500 hover:text-primary-300`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Links