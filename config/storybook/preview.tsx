// import React from "react";
// Type
import type { Preview } from "@storybook/react";
// Style
import "../../src/app/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Themes
    // docs: {}
  },
};

export default preview;
