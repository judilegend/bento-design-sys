import { dmSans, figtree, outfit, roboto } from "@/components/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Bento Grid App",
  description: "A modern bento grid social media management app",
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
