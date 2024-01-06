import { Meta, StoryFn } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

export default {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
} as Meta<typeof LangSwitcher>;

const Template: StoryFn<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
