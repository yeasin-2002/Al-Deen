import { IBM_Plex_Sans_Arabic, Vazirmatn } from "next/font/google";

export const VazirmatnFont = Vazirmatn({
  subsets: ["arabic"],
});

export const IBM_Plex_Sans_ArabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
});
