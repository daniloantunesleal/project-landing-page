import P from "prop-types";
import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { NavLinks } from "../NavLinks";
import { Menu as MenuIcon } from "@styled-icons/material-outlined/Menu";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import { useEffect, useState } from "react";

export const Menu = ({ links = [], logoData }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const resize = () => {
            if (window.innerWidth > 768) setVisible((v) => (v ? false : v));
        };

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <>
            <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
                {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
            </Styled.Button>
            <Styled.Container visible={visible} onClick={() => setVisible(false)}>
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData} />
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired,
};
