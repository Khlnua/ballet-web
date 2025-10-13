export interface UgsaatanDances {
    id: string;
    src: string;
    titleEn: string;
    titleMn: string;
    captionEn: string;
    captionMn: string;
  }

  // Helper function to create placeholder SVG
  const createPlaceholderImage = (title: string) => {
    const svg = `<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#1a1a2e"/>
      <rect x="10" y="10" width="380" height="280" rx="10" fill="#f59e0b"/>
      <text x="200" y="150" font-family="Arial, sans-serif" font-size="18" fill="#fbbf24" text-anchor="middle">${title}</text>
    </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  export const ugsaatanDances: UgsaatanDances[] = [
    {
      id: "1",
      src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/halh1.jpg',
      titleEn: "Khalkh",
      titleMn: "Халх",
      captionEn: 'The Khalkha are the principal ethnic group, dispersed across the central as well as the western and eastern regions of Mongolia. The hallmark of their dance is a broad chest posture, many varied positions of the arms, shoulder shudders and tremors, rapid leg switches, and galloping movements.',
      captionMn: "Халх угсаатан нь Монгол ороны төв болон баруун зүүн бүсүүдээр тархан суусан голлох угсаатан юм. Тэдний хөдөлгөөний гол онцлог нь ханхгар цээж, гарын олон төрлийн байрлалууд, мөрний сугсараа чичэргээ хөлний хурдтай сольбоо, давхилдах хөдөлгөөнүүд оршдог. ",
    },
    {
        id: "2",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatantuva2.jpg',
        titleEn: "Tuva",
        titleMn: "Тува",
        captionEn: "The Tuva people live in Tsagaannuur, Renchinlkhümbe, and Ulaan-Uul Districts of Khuvsgul Province. They primarily dance to the rhythms of throat-singing. Men perform with vigorous, rapid tempos and large steps emphasizing quick footwork, while women dance to slower rhythms with coordinated movements of hands and feet.",
        captionMn: "Тува угсаатан нь Хөвсгөл аймгийн Цагааннуур, Рэнчинлхүмбэ, Улаан уул сумдын нутагт суурьшан амьдардаг. Тува угсаатан нь гол төлөв хөөмэйн ая хэмнэлд бүжиглэдэг. Эрчүүд нь эрчтэй хурдан хэмнэлтэй, том алхам хөлийн хурдан хөдөлгөөн харин эмэгтэйчүүд нь хэмнэл удаан гар хөлийн хосолсон хөдөлгөөн хийдэг онцлогтой.",
    },
    {
        id: "3",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatanmyangad3.jpg',
        titleEn: "Myangad",
        titleMn: "Мянгад",
        captionEn: "The Myangad are settled across Bayan-Ölgii, Uvs, and Khovd Provinces, and in smaller numbers in Bulgan and Zavkhan. In this group, men dance with strong movements of the shoulders and chest, while women are gentle yet dignified, often performing elegant cup-balancing bii biyelgee.",
        captionMn: "Мянгад угсаатан нь Баян-Өлгий, Увс, Ховд аймгуудаар мөн цөөн тоогоор Булган, Завхан аймгуудаар тархан суурьшдаг. Уг угсаатны эрчүүд нь мөр, цээжээр хүчтэй хөдөлгөөн хийж биелдэг бол эмэгтэйчүүд нь уянгалаг зөөлөн хэдий ч эрхэмсэг мөн аягатай бий биелгээ хийдгээрээ онцлог. ",
    },
    {
        id: "4",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatantsaatan4.jpg',
        titleEn: "Tsaatan (Dukha)",
        titleMn: "Цаатан",
        captionEn: "The Tsaatan live around the Ulaan Taiga mountains in Tsagaannuur District of Khövsgöl Province. They herd reindeer and are a reindeer-herding ethnic group. Their dance typically features frame drums, jaw harps, and folk songs, with lively, energetic movements connected to reindeer.",
        captionMn: "Цаатан угсаатан нь Хөвсгөл аймгийн Цагааннуур сумын Улаан тайгын уулсаар нутагладаг. Тэд цаа буга маллаж амьдардаг ганц угсаатан юм. Уг угсаатны бүжгийн онлог бол голдуу хэнгэрэг, хамрын хуур, аман дуугаар цаа бугатай холбоотой цоглог эрчимтэй хөдөгөөн хийдгээрээ онцлог билээ. ",
    },
    {
        id: "5",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/bayad5.jpg',
        titleEn: "Bayad",
        titleMn: "Баяд",
        captionEn: "The Bayad live in Uvs and Khovd Provinces and in some districts of Bayan-Ölgii. Their dances feature floor-level movements—sitting on the ground, kneeling, bending and arching—along with fine",
        captionMn: "Баяд угсаатан нь Увс, Ховд аймагт мөн Баян-Өлгий аймгийн зарим сумдуудаар нутагтай. Баяд угсаатны бүжигт газар суугаа хөдөлгөөн, өвдөг дээр суун тонгойж гэдийх, гар мөрөөр нарийн хөдөлгөөн хийн мөрөөрөө толгойгоо түлхэн нөгөө мөрлүүгээ шилжүүлэн  биелдэг онцлог бүжигтэй угсаатан юм.",
    },
    {
        id: "6",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/buriad6.JPG',
        titleEn: "Buryat",
        titleMn: "Буриад",
        captionEn: "Buryats live mainly in the northern parts of Khentii, Khövsgöl, and Selenge Provinces, and in smaller numbers in Bulgan and Dornod. In Buryat dance, they draw the “davsagan khuur” and sing, dancing in a circle. A signature element is dancing in a circle while holding hands and shaking the tassel on the top of the hat.",
        captionMn: "Буриад угсаатнууд ихэвчлэн Хэнтий, Хөвсгөл, Сэлэнгэ аймгйин хойд хэсэгт, мөн Булган Дорнод аймгуудад цөөн тоогоор бий. Буриадууд Давсган хуураан татаж, дуугаан дуулж тойрон бүжиг хийнэ. Тэдний бүжгийн онлог гэвэл гар гараан барин малгайн дээрх цацаг аа хөдөлгөн тойрон бүжиг хийдэг.",
    },
    {
        id: "7",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/durvud7.jpg',
        titleEn: "Dörvöd",
        titleMn: "Дөрвөд",
        captionEn: "The Dörvöd reside in Sagil, Türgen, Züüngovi, and Naranbulag Districts of Uvs Province, and in smaller numbers in Bayan-Ölgii and Khovd. In their dance, men favor large, forceful movements, while women, though gentle, are elegant; their steps are small and light, and their arm movements are supple and graceful.",
        captionMn: "Дөрвөд угсаатан нь Увс аймгийн Сагил, Түргэн, Зүүнговь, Наранбулаг суманд мөн цөөн тоогоор Баян-Өлгий, Ховд аймгуудаар нутагладаг. Тэдний хөдөлгөөний онцлог гэвэл эрчүүд нь хүчтэй том хөдөлгөөн давамгайлдаг бол эмэгтэйчүүд нь зөөлөн боловч эрхэмсэг, алхам нь жижиг хөнгөн, гарын хөдөлгөөн нь уян налархай бийгээ биелдэг юм.",
    },
    {
        id: "8",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/torguud8.jpg',
        titleEn: "Torghuud (Torghut)",
        titleMn: "Торгууд",
        captionEn: "The Torghuud live in Khovd, Uvs, and Zavkhan Provinces, in valleys of the Altai Range and around the Khargass Lake basin. In their dance, men perform with dignified, heroic bearing, while women dance vigorously and energetically. Torghuud bii biyelgee includes forms such as agsal and judar: agsal showcases male might, whereas judar is lighter and more festive.",
        captionMn: "Торгууд угсаатан нь Ховд, Увс, Завхан аймаг, Алтайн нурууны хөндий, Хяргас нуурын сав газраар нутагладаг. Тэдний бүжгийн онцлог нь дотор эрчүүд нь намбалаг баатар эрсийн сүр үзүүлэн биелдэг бол эмэгтэйчүүд цоглог эрч хүчтэйгээр биелдэг. Мөн торгууд бий биелгээ нь агсал, жудар зэрэг төрлүүдтэй бөгөөд агсал бий биелгээг эрчүүдийн сүр хүчийг үзүүлдэг бол жудар нь илүү хөнгөн найр наадмын шинжтэй байдаг.",
    },
    {
        id: "9",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/dariganga9.jpg',
        titleEn: "Dariganga",
        titleMn: "Дарьганга",
        captionEn: "The Dariganga live in Dariganga, Naran, Ongon, Asgat, and Bayandelger Districts of Sükhbaatar Province. Dariganga people are renowned for their ornaments and handicrafts; accordingly, their dances are often dignified and poised, showcasing decorative accessories and finery.",
        captionMn: "Дарьганга угсаатан нь Сүхбаатар аймгийн Дарьганга, Наран, Онгон, Асгат, Баяндэлгэр сумдын нутагт амьдардаг. Дарьганначууд гоёл чимэглэл, гар урлалаараа алдартай. Тиймдээ ч бүжиг нь зүүсгэл гоёлоо гайхуулсан намбалаг байх нь олонтой. ",
    },
    {
        id: "10",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/uzemchin10.jpeg',
        titleEn: "Uzemchin",
        titleMn: "Үзэмчин",
        captionEn: "The Uzemchin inhabit Sergelen, Khalkhgol, Choibalsan, and Bayantümen Districts of Dornod Province. In Uzemchin dance, women are distinguished by elegant hand movements, while men more strongly display gestures drawn from national wrestling footwork and postures.",
        captionMn: "Үзэмчин угсаатан нь Дорнод айигийн Сэргэлэн, Халхгол, Чойбалсан, Баянтүмэн сумдуудаар нутгалдаг. Үзэмчин усаатны бүжиг нь эмэгтэй нь голдуу гоёмсог гарны хөдөлгөөнөөр ялгардаг бол эрчүүд нь үндэсний бөхийн дэвээ шаваагаа бүжигтээ илүү харуулдаг байна.",
    },
    {
        id: "11",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/altainurianhai11.jpeg',
        titleEn: "Altai Uriankhai",
        titleMn: "Алтайн Урианхай",
        captionEn: "The Altai Uriankhai live around the Altai Mountains in Bayan-Ölgii, Khovd, and Zavkhan Provinces. Their dance is characterized by imitative movements of mountains, waters, wildlife, the flight of birds, and the leaping of deer.",
        captionMn: "Алтайн Урианхай угсаатан нь Баян-Өлгий, Ховд,Завхан аймгийн алтайн уулс орчмоор амьдардаг. Бүжгийн онцлог нь уул, ус ан амьтаны хөдөлгөөн, шувууны нисэх, бугын дэвэлзэх мэт хөдөлгөөнүүдийг дуурайсан хөдөлгөөнүүд зонхилно.",
    },
    {
        id: "12",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/barga12.jpeg',
        titleEn: "Barga",
        titleMn: "Барга",
        captionEn: "The Barga people have long lived in Khölönbuir District of Dornod Province and have preserved their customs to this day. A distinctive feature of Barga dance is that both men and women perform powerful movements and often dance facing each other in pairs.",
        captionMn: "Барга угсаатан нь эртнээс одоогийн Дорнод аймгийн Хөлөнбуйр суманд нутаглаж өнөөг хүртэл ёс  заншил аа хадгалсаар ирсэн билээ. Барга угсаатны хөдөлгөөний онцлог бол эр, эм ялгаагүй хүчирхэг хөдөлгөөн хийдэг бөгөөд ихэвчлэн өрөөлдөж бүжиглэдгээрээ илүү онцлог билээ. ",
    },
    {
        id: "13",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/hoton13.jpeg',
        titleEn: "Khoton",
        titleMn: "Хотон",
        captionEn: "The Khoton inhabit Tes and Ömnögovi Districts of Uvs Province. Their style is marked by brisk, lively bii biyelgee. Movements keep tight rhythm and often imitate quick actions like gathering and sifting grain.",
        captionMn: "Хотон угсаатан нь Увс аймгийн Тэс, Өмнөговь сумдуудаар нутгладаг. Хэмнэл нь цоглог түргэн бий биелгээгээр онцлог. Хөдөлгөөн нь хэмнэлдээ зохицсон түргэн тариа будаа түүх, шигшэх зэрэг хөдөлгөөн хийдгээрээ онцлог.",
    },  
    {
        id: "14",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/uuld14.jpeg',
        titleEn: "Ööld",
        titleMn: "Өөлд",
        captionEn: "The Ööld live in Khatgal, Tsetserleg, and Mörön Districts of Khövsgöl Province. Ööld men perform bii biyelgee with broad, grounded steps that express the vigor of herdsmen and hunters, while women move with soft steps, waving their hands and flexibly rolling the shoulders.",
        captionMn: "Өөлд угсаатан нь Хөвсгөл аймгийн Хатгал, Цэцэрлэг, Мөрөн сумдуудар нутаглан суудаг. Өөлд угсаатны эрчүүд адуучин эрс, анчны сүр жавхланг харуулсан алхам том газар тулсан бий биелгээ, эмэгтэйчүүд нь гараа даллаж мөр уян хатан хөдөлгөж зөөлөн алхдаг онцлогтой.",
    },
    {
        id: "15",
        src: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/zahchin15.jpeg",
        titleEn: "Zakhchin",
        titleMn: "Захчин",
        captionEn: "The Zakhchin live in Baruuntuurun, Züüngovi, Davst, and Malchin Districts of Uvs Province. They are an ethnic group that has excellently preserved the “bii biyelgee” (seated/ground dance). Men dance powerfully, embodying the grandeur of a hunter, while women move lyrically—swaying softly as if picking flowers or sprinkling water.",
        captionMn: "Захчин угсаатан нь Увс аймгийн Баруунтуруун, Зүүнговь, Давст, Малчин сумуудаар нутаглан амьдардаг. Захчин угсаатнууд бий биелгээг маш сайн хадгалсан угсаатан юм. Эрчүүд нь хүчтэй, анчин хүний сүр жавхланг илтгэнэ. Эмэгтэй нь цэцэг түүх, ус дэвсэх мэт зөөлөн найган ганхах мэт уянгалаг.",
    },
  ];