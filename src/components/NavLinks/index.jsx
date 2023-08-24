import P from "prop-types";
import * as Styled from "./styles";
import { MenuLink } from "../MenuLink";

export const NavLinks = ({ links = [] }) => {
    return (
        <Styled.Container>
            {links.map((link) => (
                <MenuLink key={link.link} {...link}></MenuLink>
            ))}
        </Styled.Container>
    );
};

NavLinks.propTypes = {
    links: P.arrayOf(P.shape({ ...MenuLink.propTypes })),
};
