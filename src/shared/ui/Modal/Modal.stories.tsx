import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalWindow = Template.bind({});
ModalWindow.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem beatae cupiditate dolores eius esse, eum exercitationem explicabo modi nam nulla quas temporibus ullam! Animi aperiam consequuntur delectus dolor doloremque earum eos eveniet iusto maxime nam necessitatibus officiis, omnis optio porro quidem quos ratione reiciendis repellendus sed sit soluta sunt voluptate voluptates! Amet assumenda dicta doloribus est illum necessitatibus, perferendis quaerat quos, sint sit suscipit tempore ut vero! Ipsa iste molestias neque officia, omnis placeat quas quod rem repudiandae voluptates! Ad aliquam aliquid amet culpa deleniti dolorem ducimus ea eum iste iusto libero obcaecati pariatur quae rem, sunt ullam vitae.',
};

export const ModalWindowDark = Template.bind({});
ModalWindowDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem beatae cupiditate dolores eius esse, eum exercitationem explicabo modi nam nulla quas temporibus ullam! Animi aperiam consequuntur delectus dolor doloremque earum eos eveniet iusto maxime nam necessitatibus officiis, omnis optio porro quidem quos ratione reiciendis repellendus sed sit soluta sunt voluptate voluptates! Amet assumenda dicta doloribus est illum necessitatibus, perferendis quaerat quos, sint sit suscipit tempore ut vero! Ipsa iste molestias neque officia, omnis placeat quas quod rem repudiandae voluptates! Ad aliquam aliquid amet culpa deleniti dolorem ducimus ea eum iste iusto libero obcaecati pariatur quae rem, sunt ullam vitae.',
};
ModalWindowDark.decorators = [ThemeDecorator(Theme.DARK)];
