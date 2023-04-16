import { Meta, StoryObj } from "@storybook/react";
import FooterButton  from "./FooterButton";

const meta: Meta<typeof FooterButton> = {
    title: 'FooterButton',
    component: FooterButton,
    argTypes: {
        type: {
            type: "string",
            description: 'Для изменения вида кнопки',
            options: ['square', 'circle'],
            control: { type: 'radio' },
        }
    }
};

export default meta;
type Story = StoryObj<typeof FooterButton>;

export const Primary: Story = {
    args: {
        type: 'square',
        text: 'Click me',
    },
};

export const widhoutText: Story = {
    args: {
        type: 'circle',
    }
}