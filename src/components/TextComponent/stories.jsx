import { TextComponent } from ".";

export default {
    title: "TextComponent",
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quaerat, aliquid. Beatae esse eos cum expedita, nobis distinctio
        possimus omnis dicta voluptate tenetur, labore similique tempore nam
        modi neque at dolores?`,
    },
    argTypes: {
        children: { type: "string" },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};
