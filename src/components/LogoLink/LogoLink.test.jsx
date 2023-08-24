import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
    it("should render text logo", () => {
        renderTheme(<LogoLink link="#target" text="Hello World" />);
        expect(screen.getByRole("heading", { name: "Hello World" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Hello World" })).toHaveAttribute("href", "#target");
    });

    it("should render image logo", () => {
        renderTheme(<LogoLink link="#target" text="Hello World" srcImg="image.svg" />);
        expect(screen.getByAltText("Hello World")).toHaveAttribute("src", "image.svg");
    });

    it("should match snapshot", () => {
        const { container } = renderTheme(<LogoLink link="#target" text="Hello World" srcImg="image.svg" />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
