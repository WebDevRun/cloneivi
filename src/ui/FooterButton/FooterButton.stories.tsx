import { Meta, StoryObj } from "@storybook/react";
import FooterButton from "./FooterButton";
import mailIcon from '../../pages/icons/mail.svg'
import '../../global.scss'
import Image from "next/image";

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
        children: <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg" alt="" />
    },
};

export const widhoutText: Story = {
    args: {
        type: 'circle',
        children: <Image src={mailIcon} alt="" />
    }
}