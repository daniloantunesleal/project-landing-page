import { Base } from ".";

import mock from "./mock";

export default {
    title: "Pages/Base",
    component: Base,
    args: mock,
    argTypes: {
        children: { type: "string" },
    },
};

export const Template = (args) => {
    return (
        <div>
            <Base {...args} />
        </div>
    );
};
