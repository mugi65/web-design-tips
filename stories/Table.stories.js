import HTML from "./table.html"
import "./table.css"

export default {
    title: 'Example/Table',
    argTypes: {
        simple: { action: 'simple' },
    },
};

const Template = (args) => {
    return HTML
};

export const Simple = Template.bind({});
Simple.args = {
};
