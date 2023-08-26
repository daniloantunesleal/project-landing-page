import { NavLinks } from ".";
import links from "./mock";

export default {
    title: "Components/NavLinks",
    component: NavLinks,
    args: {
        links,
    },
};

export const Template = (args) => {
    return (
        <div>
            <NavLinks {...args} />
        </div>
    );
};
