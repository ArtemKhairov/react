import React from "react";
import "app/styles/index.scss";
import { StoryFn, Decorator } from "@storybook/react";

export const StyleDecorator = (story: () => StoryFn) => story();
// export const StyleDecorator:Decorator = (Story) => Story();
// const StyleDecorator: Decorator = (storyFn, context) => storyFn(context);

// export { StyleDecorator };
