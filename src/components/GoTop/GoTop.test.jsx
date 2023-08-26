import { screen } from "@testing-library/react";
import { GoTop } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<GoTop />", () => {
    it("should render", () => {
        const { container } = renderTheme(<GoTop />);
        expect(screen.getByRole("link", { name: "Go To Top" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Go To Top" })).toHaveAttribute("href", "#");
        expect(container).toMatchSnapshot();
    });
});
