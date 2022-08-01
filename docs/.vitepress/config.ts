import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "🗂️AList",
  description:
    "🗂️ A file list program that supports multiple storage, powered by Gin and Solidjs.",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  locales: {
    "/en/": {
      lang: "en-US",
      label: "English",
      description:
        "A file list program that supports multiple storage, powered by Gin and Solidjs.",
      selectText: "English",
    },
    "/": {
      lang: "zh-CN",
      label: "简体中文",
      description: "一个支持多存储的文件列表程序，使用 Gin 和 Solidjs。",
      selectText: "简体中文",
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    localeLinks: {
      text: "",
      items: [
        { text: "English", link: "/en/" },
        { text: "简体中文", link: "/" },
      ],
    },
    editLink: {
      pattern: "https://github.com/alist-org/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/alist-org/alist",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/Xh0fe",
      },
      {
        icon: "discord",
        link: "https://t.me/alist_chat",
      }
    ],
    footer: {
      message: "Released under the SATA | MIT License.",
      copyright: "Copyright © 2020-PRESENT Noah Hsu",
    },
  },
});
