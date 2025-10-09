export interface Performance {
  id: string;
  titleEn: string;
  titleMn: string;
  date: string;
  time: string;
  venueEn: string;
  venueMn: string;
  descriptionEn: string;
  descriptionMn: string;
  ticketUrl: string;
  image: string;
}

export const performances: Performance[] = [
  {
    id: "1",
    titleEn: "Traditional Mongolian Dance Spectacular",
    titleMn: "Уламжлалт Монгол Бүжигний Гайхамшиг",
    date: "2024-12-15",
    time: "19:00",
    venueEn: "State Opera and Ballet Theatre",
    venueMn: "Улсын Дуурь Балетын Театр",
    descriptionEn: "An evening of traditional Mongolian dance featuring ceremonial dances, folk performances, and contemporary choreography inspired by nomadic culture.",
    descriptionMn: "Ёслолын бүжиг, ардын тоглолт, нүүдэлчин соёлоос урам зориг авсан орчин үеийн хореографийг харуулсан уламжлалт монгол бүжигний орой.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    titleEn: "Spirit of the Steppe",
    titleMn: "Талын Сүнс",
    date: "2024-12-22",
    time: "20:00",
    venueEn: "Central Cultural Palace",
    venueMn: "Төв Соёлын Ордон",
    descriptionEn: "Experience the authentic spirit of Mongolian nomadic culture through traditional dance movements and ceremonial performances.",
    descriptionMn: "Уламжлалт бүжигний хөдөлгөөн болон ёслолын тоглолтуудаар монгол нүүдэлчин соёлын жинхэнэ сүнсийг мэдрээрэй.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    titleEn: "Golden Heritage Dance",
    titleMn: "Алтан Өв Бүжиг",
    date: "2024-12-29",
    time: "18:30",
    venueEn: "National Concert Hall",
    venueMn: "Үндэсний Концертын Танхим",
    descriptionEn: "A special performance showcasing the diversity of traditional Mongolian dance styles and their cultural significance.",
    descriptionMn: "Уламжлалт монгол бүжигний хэв маягуудын олон янз байдал болон тэдгээрийн соёлын ач холбогдлыг харуулсан онцгой тоглолт.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop"
  }
];
