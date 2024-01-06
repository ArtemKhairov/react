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
    // Add buildCssLoader for new addon - @storybook/addon-styling
    {
      name: "@storybook/addon-styling",
      options: {
        cssBuildRule: buildCssLoader(true),
      },
    },
    "@storybook/addon-themes",
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
      // Add buildCssLoader as module rule and additional option in Addon
      config.module.rules.push(buildCssLoader(true));
    }
    return config;
  },
};
export default config;
