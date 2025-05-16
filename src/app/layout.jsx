import { dmSans, figtree, outfit, roboto } from "@/components/ui/font";
import "./globals.css";

export const metadata = {
  title: "SocialBoost - Social Media Management Platform",
  description:
    "Create, schedule, and optimize your social media content with our all-in-one platform powered by AI.",
  keywords: "social media, management, AI, content creation, scheduling",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${figtree.variable} ${outfit.variable} ${roboto.variable}`}
    >
      <body className="font-dm-sans">{children}</body>
    </html>
  );
}
