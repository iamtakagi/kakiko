import '../styles/global.css';
import type { Meta, StoryObj } from '@storybook/react';

import { MessageForm } from '../components/MessageForm';

const meta: Meta<typeof MessageForm> = {
  title: 'Example/MessageForm',
  component: MessageForm,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MessageForm>;

export const Default: Story = {};
