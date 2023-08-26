import { Heading } from ".";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "O texto está escuro",
        colordark: true,
        uppercase: false,
        as: "h1",
        size: "small",
    },
    argTypes: {
        children: { type: "string" },
    },
    parameters: {
        backgrounds: {
            default: "light",
        },
    },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Dark.args = {
    children: "O texto está claro",
    colordark: false,
};

Dark.parameters = {
    backgrounds: {
        default: "dark",
    },
};
