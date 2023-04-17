import { Meta, StoryObj } from "@storybook/react";
import { FooterLink } from "./FooterLink";
import '../../styles/index.scss'

const meta: Meta<typeof FooterLink> = {
    title: 'FooterLink',
    component: FooterLink,
    tags: ['autodocs'],
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
type Story = StoryObj<typeof FooterLink>;

export const Primary: Story = {
    args: {
        type: 'square',
        text: 'Click me',
        iconSrc: "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg",
        iconAlt: 'PS',
        href: '/'
    },
};

export const widhoutText: Story = {
    args: {
        type: 'circle',
        iconSrc: "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg",
        iconAlt: 'PS',
        href: '/'
    }
}

export const withSubtext: Story = {
    args: {
        type: 'square',
        text: 'Play Store',
        subText: 'Загрузить в',
        href: '/'
    }
}

export const withAll: Story = {
    args: {
        type: 'square',
        text: 'Play Store',
        subText: 'Загрузить в',
        iconSrc: "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg",
        iconAlt: 'PS',
        href: '/'
    }
}