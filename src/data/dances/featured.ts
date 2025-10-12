interface Featured {
  id: string;
  titleEn: string;
  titleMn: string;
  descriptionEn: string;
  descriptionMn: string;
  image: string;
  href: string;
}

export const featured: Featured[] = [
  {
    id: "1",
    titleEn: "Featured Dances",
    titleMn: "Онцлох бүжгүүд",
    descriptionEn: "Curated collection of the most beautiful and significant traditional Mongolian dances",
    descriptionMn: "Монголын уламжлалт бүжгийн сор болсон бүтээлүүд",
    image: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bujgenjujig/mongolbaharhal3.jpg",
    href: "/featured"
  },
  {
    id: "2", 
    titleEn: "Dance Dramas",
    titleMn: "Бүжгэн жүжгүүд",
    descriptionEn: "Epic stories brought to life through traditional Mongolian dance performances",
    descriptionMn: "Уламжлалт монгол бүжгээр амилуулсан түүхэн домог бүтээлүүд",
    image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bujgenjujig/mongolhatad6.jpg',
    href: "/dancedrama"
  },
  {
    id: "3",
    titleEn: "Ethnic Groups",
    titleMn: "Угсаатан",
    descriptionEn: "Traditional dance styles from different Mongolian ethnic groups and regions",
    descriptionMn: "Монголын олон угсаатнууд болон бүс нутгийн уламжлалт бүжгийн хэв маягууд",
    image: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/buriad6.JPG",
    href: "/ugsaatan"
  }
]
 