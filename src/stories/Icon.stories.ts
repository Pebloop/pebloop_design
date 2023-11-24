import type { Meta, StoryObj } from '@storybook/svelte';
import Icon from "$lib/components/Icon.svelte";


const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};