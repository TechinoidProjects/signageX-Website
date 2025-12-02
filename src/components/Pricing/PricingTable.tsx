import { PlanComparisonTable } from "./PlanComparisonTable";
import {ImagePlus , Video, Wallpaper, Mic, FileText, Monitor, Files} from "lucide-react";

const PLANS = [
  { id: "basic", label: "Basic" },
  { id: "pro", label: "Pro" },
  { id: "enterprise", label: "Enterprise" },
];

const CATEGORIES = [
  {
    id: "images",
    title: "Images",
    icon: <ImagePlus  className="h-4 w-4" />,
    fields: [
      {
        id: "upload",
        label: "Upload & Display Images (any format)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "free-stock",
        label: "Thousands of Free Stock Images to Use",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "image-editor",
        label: "In-app Image Editor",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "video",
    title: "Videos",
    icon: <Video className="h-4 w-4"  />,

    fields: [
      {
        id: "video-files",
        label: "Video Files",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "yt-live-stream",
        label: "YouTube & YouTube Live Stream Video",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "usb-to-hdmi",
        label: "USB to HDMI Video Capture",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "live-video-streaming",
        label: "Live Video Streaming (incl. IPTV, LAN streams)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "rotate-crop-videos",
        label: "Rotate & Crop Videos",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "hdmi-support",
        label: "HDMI-in Support",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "live-tv",
        label: "Live TV",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "web-pages",
    title: "Web Pages",
    icon: <Wallpaper className="h-4 w-4"  />,
    fields: [
      {
        id: "add-web-pages",
        label: "Add Web Pages",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "display-web-pages",
        label: "Display Web Pages (Public or Internal)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "form-auth",
        label: "Form-based Authentication",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "webpage-automation",
        label: "Webpage Automation & Custom JS Implementation",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "browser-zoom",
        label: "Configurable Browser Zoom In/Out",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "auto-refresh",
        label: "Auto-Refresh Webpage",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "fallback-image",
        label: "Show Fallback Image If Webpage Is Unreachable",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "preload-webpage",
        label: "Preload Webpage for Instant Transitions",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "audio-files",
    title: "Audio Files",
    icon: <Mic className="h-4 w-4"  />,
    fields: [
      {
        id: "upload-audio",
        label: "Upload & Playback Audio Files (any format)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "youtube-audio",
        label: "Use Audio from YouTube Videos & YouTube Live",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "live-audio-streaming",
        label: "Live Audio Streaming (incl. Internet Streams, LAN streams)",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "documents",
    title: "Add Documents",
    icon: <FileText className="h-4 w-4"  />,
    fields: [
      {
        id: "pdf-files",
        label: "Upload & Display PDF Files",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "excel-files",
        label: "Upload & Display Excel Files (.xls & .xlsx)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "word-files",
        label: "Upload & Display Word Files (.doc & .docx)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "ppt-to-video",
        label: "Upload PPT as Video (w/ Animations & Transitions)",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "page-display-time",
        label: "Set Display Time for Each Page",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "screen-layouts",
    title: "Screen Layouts & Templates",
    icon: <Monitor className="h-4 w-4"  />,
    fields: [
      {
        id: "multiple-zones",
        label: "Screen Layouts with Multiple Zones of Media",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "free-templates",
        label: "Free Layout Templates for Any Industry",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "customize-content",
        label: "Add or Change Media, Playlists, Apps, Texts and Shapes",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "custom-layouts",
        label: "Build Custom Layouts with the Design You Need",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "layer-media",
        label: "Layer Media",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "layout-preview",
        label: "Layout Previewing in Browser",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "add-to-playlists",
        label: "Add Layouts to Playlists",
        values: { basic: true, pro: true, enterprise: true },
      },
    ],
  },
  {
    id: "media-management",
    title: "Media Management & Playlists",
    icon: <Files className="h-4 w-4"  />,
    fields: [
      {
        id: "import-csv",
        label: "Import CSV Playlists",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "interactive-playlist",
        label: "Interactive Playlist",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "drag-drop-editor",
        label: "Playlists with Drag-and-Drop Editor",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "syncing-playlists",
        label: "Syncing Playlists (to change simultaneously)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "playback-preview",
        label: "Media and Playlist Previewing (Playback Preview)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "media-expiration",
        label: "Media Expiration",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "advanced-scheduling",
        label: "Advanced Media Scheduling",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "instant-transitions",
        label: "Instant Transitions (no black screens between Media)",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "cloud-storage",
        label: "Dropbox and OneDrive Playlists",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "sub-playlists",
        label: "Sub-Playlists",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "media-tags",
        label: "Media Tags",
        values: { basic: true, pro: true, enterprise: true },
      },
      {
        id: "tag-filtering",
        label: "Media Tag filtering per screen",
        values: { basic: false, pro: true, enterprise: true },
      },
      {
        id: "tag-based-playlists",
        label: "Tag-Based Playlists",
        values: { basic: false, pro: true, enterprise: true },
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background-light w-full">
      <PlanComparisonTable
        title="Plan Comparison"
        subtitle="Compare features across Basic, Pro, and Enterprise."
        badgeText="compare"
        plans={PLANS}
        categories={CATEGORIES}
      />
    </main>
  );
}
