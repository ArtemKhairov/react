import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack, { Configuration, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      build: "",
      html: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    // Already exist
    config.resolve?.extensions?.push(".ts", ".tsx");

    if (config.module?.rules !== undefined) {
      // eslint-disable-next-line no-param-reassign
      config.module.rules = (config.module.rules as webpack.RuleSetRule[]).map(
        (rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }

          return rule;
        },
      );
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      console.log(buildCssLoader(true));
      config.module.rules.push(buildCssLoader(true));
    }
    console.log(config.module.rules);
    return config;
  },
};
export default config;
