import { Meta, StoryFn } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/Applink",
  component: AppLink,
  args: {
    to: "/",
  },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "AppLink",
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "AppLink",
  theme: AppLinkTheme.SECONDARY,
};
