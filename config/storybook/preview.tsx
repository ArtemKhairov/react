import React from "react";
// Type
import type {
  Preview,
  // StoryFn
} from "@storybook/react";
// import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
  // decorators: [
  //   (Story) => (
  //     <ThemeDecorator>
  //       <Story />
  //     </ThemeDecorator>
  //   ),
  // ],
  // decorators: [
  //   (Story) => (
  //     <StyleDecorator>
  //       <Story />
  //     </StyleDecorator>
  //   ),
  // ],
  // decorators: [
  //   (Story) => {
  //     const DecoratorComponent = StyleDecorator(<Story/>);
  //     return <DecoratorComponent><Story /></DecoratorComponent>;
  //   },
  // ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
