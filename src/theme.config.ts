import { Button, ThemeConfig } from "antd";

export const getThemeConfig = (): ThemeConfig | undefined => {
  return {
    token: {
      colorPrimary: "#003700",
    },
    components: {
      Table: {
        colorTextHeading: "#000",
        fontWeightStrong: 600,
        fontSize: 13,
        headerColor: "#ffffff",
        headerBg: "#16a34a",
      },
      Select: {
        controlHeight: 46,
        colorPrimaryHover: "#16a34a",
        controlPaddingHorizontal: 10,
        borderRadius: 12,
        optionSelectedBg: "#16a34a",
        optionSelectedColor: "#fff",
      },
      Button: {
        colorPrimaryHover: "#16a34a",
        defaultHoverColor: "#000",
      },
      Input: {
        colorPrimaryHover: "#16a34a",
        activeBorderColor: "#16a34a",
        paddingBlock: 10,
        paddingInline: 20,
        activeShadow: "#ffffff",
      },
    },
  };
};
