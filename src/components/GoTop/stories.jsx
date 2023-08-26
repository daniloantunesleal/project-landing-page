import { GoTop } from ".";

export default {
    title: "GoTop",
    component: GoTop,
    args: {
        children: "GoTop",
    },
    argTypes: {
        children: { type: "string" },
    },
};

export const Template = (args) => {
    return (
        <div style={{ heigth: "400vh" }}>
            <GoTop {...args} />
        </div>
    );
};
