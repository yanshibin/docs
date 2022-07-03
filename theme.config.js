import { useRouter } from "next/router";

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "nextra-docs-template",
  "zh-CN": "nextra 文档模板",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
};

export default {
  projectLink: "https://github.com/alist-org/docs",
  docsRepositoryBase:
    "https://github.com/alist-org/docs/blob/master/pages",
  titleSuffix: " – nextra-docs-template",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={TITLE_WITH_TRANSLATIONS[locale] || ""}
        >
          nextra-docs-template
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={meta.description || "nextra-docs-template"}
        />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      case "es-ES":
        return "Edite esta página en GitHub →";
      case "ja":
        return "Github で編集する →";
      case "ko":
        return "Github에서 이 페이지 편집하기 →";
      case "ru":
        return "Редактировать на GitHub →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return (
          <a
            href="https://github.com/alist-org/docs"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">由</span>
            <span className="mr-2">nextra-docs-template</span>
            驱动
          </a>
        );
      default:
        return (
          <a
            href="https://github.com/alist-org/docs"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Powered by</span>
            <span>nextra-docs-template</span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
};
