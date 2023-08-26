import { GridTwoColumn } from ".";
import mock from "./mock";

export default {
    title: "Components/GridTwoColumn",
    component: GridTwoColumn,
    args: mock,
};

export const Template = (args) => {
    return (
        <div>
            <GridTwoColumn {...args} />
        </div>
    );
};
