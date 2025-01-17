const CONFIG = {
  // profile setting (required)
  profile: {
    name: "zhilly",
    image: "/round_profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "iOS developer",
    bio: "고민에 진심인 편.",
    email: "zhzh1x4@gmail.com",
    linkedin: "",
    github: "zhilly11",
    instagram: "",
  },
  projects: [
    {
      name: `Daily-Capture`,
      href: "https://github.com/zhilly11/Daily-Capture",
    },
  ],
  // blog setting (required)
  blog: {
    title: "zhilly-log",
    description: "welcome to zhilly-log!",
    theme: "auto",
  },

  // CONFIG configration (required)
  link: "https://zhilly.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "zhilly11/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 7200 * 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
