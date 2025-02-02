import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "body",
    },
  },
  theme: {
    tokens: {
      colors: {
        p: {
          50: { value: "#f9fcff" },
          100: { value: "#e0f2ff" },
          200: { value: "#b8dcff" },
          300: { value: "#8ec4ff" },
          400: { value: "#64abff" },
          500: { value: "#3a90ff" },
          "500a": { value: "#3a90ff20" },
          600: { value: "#2c70db" },
          700: { value: "#2152b7" },
          800: { value: "#183993" },
          900: { value: "#10267a" },
        },
        light: { value: "#FAFAFA" },
        dark: { value: "#151515" },
        darktrans: { value: "#252525df" },
        gray: {
          50: { value: "#fbfbfb" },
          100: { value: "#f5f5f5" },
          200: { value: "#e5e5e5" },
          300: { value: "#d4d4d4" },
          400: { value: "#bcbcbc" },
          500: { value: "#9e9e9e" },
          600: { value: "#626262" },
          700: { value: "#515151" },
          800: { value: "#272727" },
          900: { value: "#202020" },
        },
        d0: { value: "#7e7e7e08" },
        d1: { value: "#7e7e7e10" },
        d2: { value: "#7e7e7e20" },
        d3: { value: "#7e7e7e36" },
        dt: { value: "#858585ff" },
      },
    },
    semanticTokens: {
      colors: {
        p: {
          solid: { value: { base: "{colors.p.500}", _dark: "{colors.p.500}" } },
          contrast: { value: "{colors.p.100}" },
          fg: { value: { base: "{colors.p.700}", _dark: "{colors.p.200}" } },
          muted: { value: { base: "{colors.p.300}", _dark: "{colors.p.800}" } },
          subtle: {
            value: { base: "{colors.p.200}", _dark: "{colors.p.900}" },
          },
          emphasized: { value: "{colors.p.300}" },
          focusRing: {
            value: { base: "{colors.p.500}", _dark: "{colors.p.900}" },
          },
        },
        ap: {
          solid: { value: "{colors.p.500}" },
          contrast: { value: "{colors.p.500}" },
          fg: { value: "{colors.p.500}" },
          muted: { value: "{colors.p.500}" },
          subtle: { value: "{colors.p.500}" },
          emphasized: { value: "{colors.p.500}" },
          focusRing: { value: "{colors.p.500}" },
        },
        aw: {
          solid: { value: "{white}" },
          contrast: { value: "{white}" },
          fg: { value: "{white}" },
          muted: { value: "{white}" },
          subtle: { value: "{white}" },
          emphasized: { value: "{white}" },
          focusRing: { value: "{white}" },
        },
        red: {
          contrast: { value: "{colors.red.100} !important" },
        },
        orange: {
          solid: {
            value: {
              base: "{colors.orange.500} !important",
              _dark: "{colors.orange.500}",
            },
          },
          contrast: { value: "{colors.orange.100} !important" },
        },
        body: { value: { base: "#FFF", _dark: "#151515" } },
        ibody: { value: { base: "#151515", _dark: "#FAFAFC" } },
      },
    },
  },
});

const customSystem = createSystem(defaultConfig, customConfig);

export default customSystem;
