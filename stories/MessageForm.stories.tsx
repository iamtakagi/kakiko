import '../styles/global.css';
import type { Meta, StoryObj } from '@storybook/react';

import { MessageForm } from '../components/MessageForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
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
