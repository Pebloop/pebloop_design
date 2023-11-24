import type { Meta, StoryObj } from '@storybook/svelte';
import Button from "../lib/components/inputs/Button.svelte";


const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};