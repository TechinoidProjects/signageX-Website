export type PlayersTable = {
  title: string;
  headers: string[];
  rows: (string | number)[][];
};

export type PlatformConfig = {
  badge: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  illustration: string;
  requirementsTitle: string;
  requirementsSubtitle: string;
  checklistTitle: string;
  checklist: Array<string | { title: string; description: string }>;
  paragraph: Array<string>;
  tables?: PlayersTable[];
};

export type Platform = {
  slug: string;
} & PlatformConfig;

export const platforms: Platform[] = [
  {
    slug: "macos",
    badge: "Start Now",
    title: "SignageX For macOS",
    subtitle:
      "Popular among creators and design teams, SignageX can be easily installed and operated on macOS for effortless digital signage management.",
    buttonLabel: "Download For macOS",
    illustration: "/images/requirements-mac.png",
    requirementsTitle: "SignageX Requirements For macOS",
    requirementsSubtitle:
      "Your go-to companion for AI digital signage journey on Mac.",
    checklistTitle: "You Only Need",
    checklist: [
      { title: "Operating System – ", description: "macOS 10.10 – Yosemite or later" },
      { title: "Mac Mini (2014) – ", description: "Supported Generation" },
      { title: "Mac Mini (2018) – ", description: "Supported Generation" },
    ],
    paragraph: [],
  },
  {
    slug: "windows",
    badge: "Start Now",
    title: "SignageX For Windows",
    subtitle: "Run powerful AI signage on Windows-based players with smooth performance and easy management.",
    buttonLabel: "Download For Windows",
    illustration: "/images/requirements-windows.png",
    requirementsTitle: "SignageX Requirements For Windows",
    requirementsSubtitle: "Everything you need to get started with SignageX on Windows.",
    checklistTitle: "You Only Need",
    checklist: [
      "Windows 10 or later (64-bit)",
      "Intel i3 or equivalent processor",
      "4GB RAM, 10GB free disk space",
    ],
    paragraph: [
      "Always keep your graphic drivers up to date for optimal performance. Player requirements depend on the complexity of your content, so we recommend testing it on your intended hardware before deployment. ",
      "As a general guide, Intel Celeron works best for simple full-screen content, Intel i3 for multi-zone layouts, and Intel i5 or higher for 4K or complex, heavy content.",
    ],
  },
  {
    slug: "android",
    badge: "Start Now",
    title: "SignageX For Android",
    subtitle:
      "Turn any compatible Android device into a powerful digital signage player.",
    buttonLabel: "Download For Android",
    illustration: "/images/requirements-android.png",
    requirementsTitle: "SignageX Requirements For Android",
    requirementsSubtitle:
      "Check the basics before deploying SignageX to your Android screens.",
    checklistTitle: "You Only Need",
    checklist: [
      "Android 9.0 (Pie) or later",
      "Google Play Services enabled",
      "Reliable Wi‑Fi or Ethernet connection",
    ],
    tables: [
      {
        title: "Professional Signage Android Monitors",
        headers: [
          "Player",
          "CPU",
          "Android",
          "CPU (Board)",
          "Video",
          "RAM",
          "HDMI-IN",
          "Portrait Support",
          "Storage",
        ],
        rows: [
          [
            "Sharp PN-B",
            "PN-B401, PN-B501",
            "4.4",
            "Cortex – A17",
            "1080P",
            "2GB",
            "No",
            "Yes",
            "8GB",
          ],
          [
            "Philips P-line",
            "42BDL5055P, 49BDL5055P, 49BDL5075P, 55BDL5055P",
            "5.1",
            "Quad Core",
            "1080P",
            "2GB DDR 3",
            "No",
            "Yes",
            "8 GB eMMC",
          ],
          [
            "Philips Q-line",
            "49BDL3050Q, 65BDL3050Q, 75BDL3050Q, 86BDL3050Q",
            "5.1",
            "Quad Core",
            "1080P",
            "2GB DDR 3",
            "No",
            "Yes",
            "8 GB eMMC",
          ],
          [
            "Philips D-line",
            "32BDL4050D, 43BDL4050D, 49BDL4050, 55BDL4050D",
            "4.4",
            "1.80 GHz Cortex A9",
            "1080P",
            "2GB",
            "No",
            "Yes",
            "16GB",
          ],
        ],
      },
      {
        title: "Consumer Grade Android Players",
        headers: [
          "Title",
          "CPU",
          "Video",
          "RAM",
          "Storage",
          "HDMI-IN",
          "Portrait Support",
        ],
        rows: [
          ["MINIX NEO U9-H", "Amlogic S912", "4K", "2GB", "16GB", "No", "Yes"],
          ["Minix – X10", "RK3368", "4K", "2GB", "16GB", "No", "Yes"],
          ["Minix – i68", "RK3368", "4K", "2GB", "16GB", "No", "Yes"],
          ["UGOOS UT3", "RK3288", "4K", "2GB", "16GB", "No", "Yes"],
          ["UGOOS-um3", "RK3288", "1080P", "2GB", "16GB", "No", "Yes"],
        ],
      },
      {
        title: "Recommended Android Players",
        headers: [
          "Player",
          "CPU",
          "Video",
          "RAM",
          "Storage",
          "HDMI-IN",
          "Portrait Support",
        ],
        rows: [
          ["Amazon Signage Stick", "-", "4K", "-", "-", "No", "No"],
          ["IAdea XMP – 6250", "RK3188", "1080P", "2GB", "32GB", "No", "Yes"],
          [
            "IAdea XMP – 6400",
            "RK3188",
            "1080P",
            "2GB",
            "32GB",
            "Yes (720p)",
            "Yes",
          ],
          ["IAdea XMP – 7300", "RK3188", "4K", "2GB", "32GB", "No", "Yes"],
          ["Minix NEO X39", "RK3399", "4K", "4GB", "32GB", "No", "Yes"],
          ["Minix X36", "ARM® – A55", "4K", "4GB DDR4", "32GB", "No", "Yes"],
          ["Qbic – BXP – 300", "RK3288", "1080P", "2GB", "32GB", "No", "Yes"],
          ["Qbic – BXP – 301", "RK3288", "4K", "2GB", "32GB", "Yes (1080p)", "Yes"],
          [
            "Qbic – FHD – 100",
            "RK3188",
            "1080P",
            "2GB DDR3",
            "8GB eMMC 5.0",
            "No",
            "Yes",
          ],
        ],
      },
    ],
    paragraph: [
      "SignageX runs smoothly on any Android device running version 4.4 or higher. For the best performance, we recommend using our pre-certified devices—tested for reliability and backed by direct manufacturer support.",
      "You can use other Android devices as well, but we suggest testing them to ensure stability and smooth content playback.",
    ],
  },
  {
    slug: "chrome",
    badge: "Start Now",
    title: "SignageX For Chrome",
    subtitle:
      "Use SignageX directly in your Chrome browser with no extra installation.",
    buttonLabel: "Open Web App",
    illustration: "/images/requirements-chrome.png",
    requirementsTitle: "SignageX Requirements For Chrome",
    requirementsSubtitle:
      "Best experience with the latest version of Google Chrome.",
    checklistTitle: "You Only Need",
    checklist: [
      "Latest Google Chrome browser",
      "Stable internet connection",
      "SignageX account to sign in",
    ],
    paragraph: [],
  },
];
