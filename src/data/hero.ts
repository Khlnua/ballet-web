export interface HeroVideo {
  id: string;
  titleEn: string;
  titleMn: string;
  subtitleEn: string;
  subtitleMn: string;
  videoUrl: string;
  youtubeUrl: string;
  fallbackImage: string;
}

export const heroVideo: HeroVideo = {
  id: "1",
  titleEn: "Mongolian National Ballet",
  titleMn: "Монголын Үндэсний Балет",
  subtitleEn: "Experience the Majesty of Traditional Mongolian Dance",
  subtitleMn: "Уламжлалт Монгол Бүжигний Гайхамшгийг Мэдрээрэй",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  youtubeUrl: "https://www.youtube.com/watch?v=N6Pdzg8T81o",
  fallbackImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
};
