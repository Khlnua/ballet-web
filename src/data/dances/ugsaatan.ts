export interface UgsaatanDances {
    id: string;
    src: string;
    titleEn: string;
    titleMn: string;
    captionEn: string;
    captionMn: string;
  }

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
      titleEn: "Khalkha",
      titleMn: "Халх",
      captionEn:'The Khalkha are the main ethnic group found in the central and western regions of Mongolia. The  main characteristics of their movements include a broad chest, varied arm positions, rapid  shoulder and leg movements and repetitive movements.',
      captionMn: "Халх угсаатан нь Монгол ороны төв болон баруун зүүн бүсүүдээр тархан суусан голлох угсаатан юм. Тэдний хөдөлгөөний гол онцлог нь ханхгар цээж, гарын олон төрлийн байрлалууд, мөрний сугсараа чичэргээ хөлний хурдтай сольбоо, давхилдах хөдөлгөөнүүд оршдог. ",
    },
    {
        id: "2",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatantuva2.jpg',
        titleEn: "Tuva",
        titleMn: "Тува",
        captionEn: 'The non-Mongolian Tuvan sub-ethnic group lives in the Tsagaannuur, Renchinlkhumbe and Ulan Uul soums of the Khuvsgul aimag. Tuvans primarily dance to the khoyomei rhythm. Men have a  strong, fast rhythm with wide steps while women use slow, mixed movements of the arms and  legs.',
        captionMn: "Тува угсаатан нь Хөвсгөл аймгийн Цагааннуур, Рэнчинлхүмбэ, Улаан уул сумдын нутагт суурьшан амьдардаг. Тува угсаатан нь гол төлөв хөөмэйн ая хэмнэлд бүжиглэдэг. Эрчүүд нь эрчтэй хурдан хэмнэлтэй, том алхам хөлийн хурдан хөдөлгөөн харин эмэгтэйчүүд нь хэмнэл удаан гар хөлийн хосолсон хөдөлгөөн хийдэг онцлогтой.",
    },
    {
        id: "3",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatanmyangad3.jpg',
        titleEn: "Myangad",
        titleMn: "Мянгад",
        captionEn:'The Myangad ethnic group lives in the Bayan-Ulgii, Uvs and Khovd aimags as well as a small number in the Bulgan and Zavkhan aimags. Men of this ethnic group perform the dance using  strong movements of the shoulders and chest while women are distinguished by a melodic, soft, yet noble and graceful dance.',
        captionMn: "Мянгад угсаатан нь Баян-Өлгий, Увс, Ховд аймгуудаар мөн цөөн тоогоор Булган, Завхан аймгуудаар тархан суурьшдаг. Уг угсаатны эрчүүд нь мөр, цээжээр хүчтэй хөдөлгөөн хийж биелдэг бол эмэгтэйчүүд нь уянгалаг зөөлөн хэдий ч эрхэмсэг мөн аягатай бий биелгээ хийдгээрээ онцлог. ",
    },
    {
        id: "4",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/ugsaatantsaatan4.jpg',
        titleEn: "Tsaatan",
        titleMn: "Цаатан",
        captionEn: 'The Tsaatan sub-ethnic group lives in the Ulaan-Taiga Mountains of the Tsagannuur soum of the  Khuvsgul aimag. They are the only ethnic group practicing reindeer herding. Their dance style is  characterized by energetic and vigorous movements associated with reindeer, performed primarily to the sound of drums, gongs and oral songs. ',
        captionMn: "Цаатан угсаатан нь Хөвсгөл аймгийн Цагааннуур сумын Улаан тайгын уулсаар нутагладаг. Тэд цаа буга маллаж амьдардаг ганц угсаатан юм. Уг угсаатны бүжгийн онлог бол голдуу хэнгэрэг, хамрын хуур, аман дуугаар цаа бугатай холбоотой цоглог эрчимтэй хөдөгөөн хийдгээрээ онцлог билээ. ",
    },
    {
        id: "5",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/bayad5.jpg',
        titleEn: "Bayad",
        titleMn: "Баяд",
        captionEn:'The Bayad ethnic group lives in the Uvs and Khovd aimags as well as in some soums of the Bayan Ulgii aimag. The Bayad ethnic group is a unique ethnic group that performs a distinctive dance  that involves sitting on the ground, kneeling, smoothly moving the arms and shoulders, pressing the head from one shoulder to the other and then moving it to the other.',
        captionMn: "Баяд угсаатан нь Увс, Ховд аймагт мөн Баян-Өлгий аймгийн зарим сумдуудаар нутагтай. Баяд угсаатны бүжигт газар суугаа хөдөлгөөн, өвдөг дээр суун тонгойж гэдийх, гар мөрөөр нарийн хөдөлгөөн хийн мөрөөрөө толгойгоо түлхэн нөгөө мөрлүүгээ шилжүүлэн  биелдэг онцлог бүжигтэй угсаатан юм.",
    },
    {
        id: "6",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/buriad6.JPG',
        titleEn: "Buryats",
        titleMn: "Буриад",
        captionEn:'The Buryat ethnic group is found primarily in the northern parts of the Khentii, Khuvsgul and Selenge aimags, with a small number in the Bulgan and Dornod aimags. Buryats play the davsgan khuraan and sing and dance in a circle. Their dance style is to dance in a circle, holding hands and swinging the tassels on their hats. ',
        captionMn: "Буриад угсаатнууд ихэвчлэн Хэнтий, Хөвсгөл, Сэлэнгэ аймгйин хойд хэсэгт, мөн Булган Дорнод аймгуудад цөөн тоогоор бий. Буриадууд Давсган хуураан татаж, дуугаан дуулж тойрон бүжиг хийнэ. Тэдний бүжгийн онлог гэвэл гар гараан барин малгайн дээрх цацаг аа хөдөлгөн тойрон бүжиг хийдэг.",
    },
    {
        id: "7",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/durvud7.jpg',
        titleEn: "Durvud",
        titleMn: "Дөрвөд",
        captionEn:'The Durvud ethnic group lives in the Sagil, Turgen, Zuungobi and Naranbulag soums of the Uvs  aimag as well as in small numbers in the Bayan-Ulgii and Khovd aimags. Men are characterized by  strong and sweeping movements while women are smooth but noble. Their steps are small and light and their arm movements are flexible.',
        captionMn: "Дөрвөд угсаатан нь Увс аймгийн Сагил, Түргэн, Зүүнговь, Наранбулаг суманд мөн цөөн тоогоор Баян-Өлгий, Ховд аймгуудаар нутагладаг. Тэдний хөдөлгөөний онцлог гэвэл эрчүүд нь хүчтэй том хөдөлгөөн давамгайлдаг бол эмэгтэйчүүд нь зөөлөн боловч эрхэмсэг, алхам нь жижиг хөнгөн, гарын хөдөлгөөн нь уян налархай бийгээ биелдэг юм.",
    },
    {
        id: "8",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/torguud8.jpg',
        titleEn: "Torguud",
        titleMn: "Торгууд",
        captionEn:'The Torguud ethnic group lives in the Khovd, Uvs and Zavkhan aimags, on the Altai Peninsula and  in the Lake Khyargas basin. The characteristic features of their dance are that men perform it with the pomp of a brave warrior, while women perform it with pomp and pageantry. Torguud dance also includes variations such as agsal and judar where agsal demonstrates the men\'s strength  while judar is lighter and more festive.',
        captionMn: "Торгууд угсаатан нь Ховд, Увс, Завхан аймаг, Алтайн нурууны хөндий, Хяргас нуурын сав газраар нутагладаг. Тэдний бүжгийн онцлог нь дотор эрчүүд нь намбалаг баатар эрсийн сүр үзүүлэн биелдэг бол эмэгтэйчүүд цоглог эрч хүчтэйгээр биелдэг. Мөн торгууд бий биелгээ нь агсал, жудар зэрэг төрлүүдтэй бөгөөд агсал бий биелгээг эрчүүдийн сүр хүчийг үзүүлдэг бол жудар нь илүү хөнгөн найр наадмын шинжтэй байдаг.",
    },
    {
        id: "9",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/dariganga9.jpg',
        titleEn: "Dariganga",
        titleMn: "Дарьганга",
        captionEn:'The Dariganga ethnic group lives in the Dariganga, Naran, Ongon, Asgat and Bayandelger soums  of Sukhbaatar aimag. Dariganga are famous for their jewelry and handicrafts. Therefore, their dances are often elegant and feature jewelry.',
        captionMn: "Дарьганга угсаатан нь Сүхбаатар аймгийн Дарьганга, Наран, Онгон, Асгат, Баяндэлгэр сумдын нутагт амьдардаг. Дарьганначууд гоёл чимэглэл, гар урлалаараа алдартай. Тиймдээ ч бүжиг нь зүүсгэл гоёлоо гайхуулсан намбалаг байх нь олонтой. ",
    },
    {
        id: "10",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/uzemchin10.jpeg',
        titleEn: "Uzemchin",
        titleMn: "Үзэмчин",
        captionEn:'The Uzemchin ethnic group lives in the Sergelen, Khalkgol, Choibalsan and Bayantumen soums of Dornod aimag. Uzemchin dance is characterized by graceful arm movements, with women  excelling in graceful arm movements and men demonstrating traditional wrestling skills.',
        captionMn: "Үзэмчин угсаатан нь Дорнод айигийн Сэргэлэн, Халхгол, Чойбалсан, Баянтүмэн сумдуудаар нутгалдаг. Үзэмчин усаатны бүжиг нь эмэгтэй нь голдуу гоёмсог гарны хөдөлгөөнөөр ялгардаг бол эрчүүд нь үндэсний бөхийн дэвээ шаваагаа бүжигтээ илүү харуулдаг байна.",
    },
    {
        id: "11",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/altainurianhai11.jpeg',
        titleEn: "Altai Uriankhai",
        titleMn: "Алтайн Урианхай",
        captionEn:'The Altai Uriankhai ethnic group lives in the Altai Mountains, in the Bayan-Ulgii, Khovd and Zavkhan aimags. Their dance is characterized by movements that imitate those of animals, birds  and deer.',
        captionMn: "Алтайн Урианхай угсаатан нь Баян-Өлгий, Ховд,Завхан аймгийн алтайн уулс орчмоор амьдардаг. Бүжгийн онцлог нь уул, ус ан амьтаны хөдөлгөөн, шувууны нисэх, бугын дэвэлзэх мэт хөдөлгөөнүүдийг дуурайсан хөдөлгөөнүүд зонхилно.",
    },
    {
        id: "12",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/barga12.jpeg',
        titleEn: "Barga",
        titleMn: "Барга",
        captionEn:'The Barga ethnic group has long inhabited the territory of today\'s Khulunbuir soum in the Dornod  aimag and has preserved its customs to this day. A characteristic feature of the Barga ethnic group  is that both men and women perform energetic movements and their dance is often unique in  that they dance alone.',
        captionMn: "Барга угсаатан нь эртнээс одоогийн Дорнод аймгийн Хөлөнбуйр суманд нутаглаж өнөөг хүртэл ёс  заншил аа хадгалсаар ирсэн билээ. Барга угсаатны хөдөлгөөний онцлог бол эр, эм ялгаагүй хүчирхэг хөдөлгөөн хийдэг бөгөөд ихэвчлэн өрөөлдөж бүжиглэдгээрээ илүү онцлог билээ. ",
    },
    {
        id: "13",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/hoton13.jpeg',
        titleEn: "Khoton",
        titleMn: "Хотон",
        captionEn:'The Khoton sub-ethnic group lives in the Tes and Umnugovi soums of the Uvs aimag. Their rhythm is characterized by rapid dance movements. Their movements are characterized by quick  movements, typical of threshing and sifting rice which harmonize with the rhythm.',
        captionMn: "Хотон угсаатан нь Увс аймгийн Тэс, Өмнөговь сумдуудаар нутгладаг. Хэмнэл нь цоглог түргэн бий биелгээгээр онцлог. Хөдөлгөөн нь хэмнэлдээ зохицсон түргэн тариа будаа түүх, шигшэх зэрэг хөдөлгөөн хийдгээрээ онцлог.",
    },  
    {
        id: "14",
        src: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/uuld14.jpeg',
        titleEn: "Uuld",
        titleMn: "Өөлд",
        captionEn:'The Uuld ethnic group lives in the Khatgal, Tsetserleg and Murun soums of the Khuvsgul aimag. Uuld men are distinguished by their large, stocky build which conveys the dignity of riders and hunters while women walk softly, swinging their arms and moving their shoulders flexibly.',
        captionMn: "Өөлд угсаатан нь Хөвсгөл аймгийн Хатгал, Цэцэрлэг, Мөрөн сумдуудар нутаглан суудаг. Өөлд угсаатны эрчүүд адуучин эрс, анчны сүр жавхланг харуулсан алхам том газар тулсан бий биелгээ, эмэгтэйчүүд нь гараа даллаж мөр уян хатан хөдөлгөж зөөлөн алхдаг онцлогтой.",
    },
    {
        id: "15",
        src: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/zahchin15.jpeg",
        titleEn: "Zakhchin",
        titleMn: "Захчин",
        captionEn:'The Zakhchin ethnic group lives in the Baruunturuun, Zuungobi, Davst and Malchin soums of the  Uvs aimag. The Zakhchin are an ethnic group that has well-preserved their dance form. The men are strong and possess the majesty of a hunter. The women are melodic as if picking flowers and treading water, swaying gently.',
        captionMn: "Захчин угсаатан нь Увс аймгийн Баруунтуруун, Зүүнговь, Давст, Малчин сумуудаар нутаглан амьдардаг. Захчин угсаатнууд бий биелгээг маш сайн хадгалсан угсаатан юм. Эрчүүд нь хүчтэй, анчин хүний сүр жавхланг илтгэнэ. Эмэгтэй нь цэцэг түүх, ус дэвсэх мэт зөөлөн найган ганхах мэт уянгалаг.",
    },
  ];