import { SectionContainer } from ".";

export default {
    title: "SectionContainer",
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nesciunt expedita quibusdam ad est
                    quos nulla ratione impedit nihil beatae eaque ex? Repellat cum eveniet error necessitatibus eum.
                    Expedita, quaerat.
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: "" },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
};
