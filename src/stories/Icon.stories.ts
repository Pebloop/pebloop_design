import type { Meta, StoryObj } from '@storybook/svelte';
import Icon from "$lib/components/Icon.svelte";


const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    icon: "home",
    size: "100px",
  }
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
};

export const Sharp: Story = {
  args: {
    style: "sharp"
  },
};

export const Rounded: Story = {
  args: {
    style: "rounded"
  },
};

export const Filled: Story = {
  args: {
    fill: true
  },
};

export const Colored: Story = {
  args: {
    color: "red"
  },
};

export const Size: Story = {
  args: {
    size: "50px"
  },
};

export const weight: Story = {
    args: {
        weight: "bold"
    },
};