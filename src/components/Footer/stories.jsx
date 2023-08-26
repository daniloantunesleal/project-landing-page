import { Footer } from ".";

export default {
    title: "Components/Footer",
    component: Footer,
    args: {
        footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Danilo Antunes Leal</a></p>`,
    },
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
};
