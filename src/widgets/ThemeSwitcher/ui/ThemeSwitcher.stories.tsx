import { Meta, StoryFn } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
