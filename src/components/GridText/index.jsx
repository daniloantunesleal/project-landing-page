import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export const GridText = ({ title, description, grid, background = false }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading size="huge" uppercase colordark={!background} as="h2">
                    {title}
                </Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((el) => (
                        <Styled.GridElement key={el.title}>
                            <Heading size="medium" colordark={!background} as="h3">
                                {el.title}
                            </Heading>
                            <TextComponent>{el.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridText.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        }),
    ).isRequired,
    background: P.bool,
};

/*

import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "@storybook/blocks";

export const GridSection = ({ title }) => {
    return (
        <SectionBackground>
            <Styled.Container>
                <Heading>{title}</Heading>
            </Styled.Container>
        </SectionBackground>
    );
};

GridSection.propTypes = {
    title: P.string.isRequired,
};


*/
