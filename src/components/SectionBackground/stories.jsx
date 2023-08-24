import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
    title: "SectionBackground",
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionBackground</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nesciunt expedita quibusdam ad est
                    quos nulla ratione impedit nihil beatae eaque ex? Repellat cum eveniet error necessitatibus eum.
                    Expedita, quaerat.
                </p>
            </div>
        ),
        background: false,
    },
    argTypes: {
        children: { type: "" },
        background: { type: "boolean" },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    );
};
