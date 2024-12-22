import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://r0x0d.com/", // replace this with your deployed domain
  author: "Rodolfo Olivieri",
  profile: "https://r0x0d.com/",
  desc: "Research & breaking stuff.",
  title: "Research & breaking stuff",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/r0x0d/blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/r0x0d",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rodolfoolivieri",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
