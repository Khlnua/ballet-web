interface Choreographer {
    id: string;
    nameEn: string;
    nameMn: string;
    titleEn: string;
    titleMn: string;
    positionEn: string;
    positionMn: string;
    birthEn: string;
    birthMn: string;
    timeline: Array<{
      periodEn: string;
      periodMn: string;
    }>;
    achievementsEn: string;
    achievementsMn: string;
    image: string;
  }
  
 export const choreographers: Choreographer[] = [
    {
      id: '1',
      nameEn: 'Sevjid Tserendulam',
      nameMn: 'Цэрэндуламын Сэвжид',
      titleEn: 'Choreographer of the Century, People\'s Artist, State Prize Laureate',
      titleMn: 'Зууны манлай бүжиг дэглээч, Ардын Жүжигчин, Төрийн Шагналт',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'Born in 1916 in Khatanzug sum, Dornogovi province',
      birthMn: '1916 онд Дорноговь аймгийн Хатанбулаг суманд төрсөн',
      timeline: [
        {
          periodEn: '1936-1939: Actress at Dornogovi provincial club',
          periodMn: '1936-1939 онд Дорноговь аймгийн клубт жүжүигчин'
        },
        {
          periodEn: '1939-1946: Military Theater',
          periodMn: '1939-1946 онд Цэргийн театр'
        },
        {
          periodEn: '1946-1959: Dancer at State Central Theater and provincial theaters',
          periodMn: '1946-1959 онд Улсын төв театр болон Ховд, Баян-Өлгий аймгийн театрт бүжигчин'
        },
        {
          periodEn: '1959: Appointed choreographer and teacher at National Grand Art Theater',
          periodMn: '1959 оноос Үндэсний Урлагийн Их Театр-т бүжиг дэглээч багшаар томилогдон ажиллах болсон'
        }
      ],
      achievementsEn: 'Ts. Sevjid dedicated fifty years of his talent and hard work to the development of Mongolian folk dance. During his career, he choreographed more than 200 dances. Among his most outstanding works are Jalam Khar, Milkmaid, Mongolian Dance Suite, Spinning Wool, Energetic Youth, Young People of the Countryside, and Queens—all considered masterpieces of the Theater\'s repertoire. On November 9, 1996, the Folk Dance Ensemble of the Theater was named after Tserendulam Sevjid, honoring him as People\'s Artist, State Prize Laureate, and the "Choreographer of the Century." His name continues to inspire the ensemble to this day.',
      achievementsMn: 'Ц.Сэвжид ардын бүжгийн хөгжилд 50 жилийн хөдөлмөр, авьяас билгээ зориулсан юм. Тэрээр нийт ажиллаж байх хугацаандаа 200 гаруй бүжиг дэглэсэн. Үүнээс дурьдвал "Жалам хар","Саальчин", "Монгол бүжгийн чуулга", "Ээрүүлт", "Адуучин залуус", "Хөдөө нутгийн залуус", "Хатад" гээд ҮУИТ-ын орчин цагийн сор болсон бүтээлүүд юм. ҮУИТ-ын Бүжгийн чуулгыг 1996 оны 11-р сарын 9-нд Монгол Улсын Ардын жүжигчин, Төрийн шагналт, Зууны манлай бүжиг дэглээч Цэрэндуламын Сэвжидийн нэрээр нэрлэн алдаршуулж өнөөг хүртэл овголсоор байна.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/%D0%A6.%D0%A1%D1%8D%D0%B2%D0%B6%D0%B8%D0%B4.jpg'
    },
    {
      id: '2',
      nameEn: 'Sukhbaatar Sevjid',
      nameMn: 'Сэвжидийн Сүхбаатар',
      titleEn: 'Honored Artist, State Prize Laureate, Merited Art Worker',
      titleMn: 'Хөдөлмөрийн Баатар, Төрийн Шагналт, Урлагийн Гавьяат Зүтгэлтэн',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'Born in 1951 in Ulaanbaatar',
      birthMn: '1951 онд Улаанбаатар хотод төрсөн',
      timeline: [
        {
          periodEn: '1971: Graduated from Secondary School of Music and Dance as a dancer',
          periodMn: '1971 онд Хөгжим бүжгийн дунд сургуулийг бүжигчний мэргэжлээр төгссөн'
        },
        {
          periodEn: '1971-1976: Worked as performer at National Grand Art Theater',
          periodMn: '1971-1976 онд ҮУИТ-т бүжигчнээр ажилласан'
        },
        {
          periodEn: 'Studied choreography and directing at A.V. Lunacharsky State Institute for Theatre Arts, Moscow',
          periodMn: 'ЗХУ-ын Москва хотын А.В.Луначарскийн нэрэмжит театр урлагийн дээд сургуульд бүжиг дэглээч, найруулагчийн мэргэжил эзэмшсэн'
        }
      ],
      achievementsEn: 'Among his outstanding works are Chichirgene, Shigsregt, Energetic Youth, Tookhuu Goson, The Four Tumens, Mongolian Ethnic Traditions, and Call of the Four Oirads. He staged more than 150 solo, duet, and ensemble dances, bringing them vividly to life on stage. Following in his father\'s footsteps, he also staged Mongolia\'s very first dance dramas—Legend of the Sun and Golden Lineage—thus continuing the artistic legacy of his family while significantly enriching the nation\'s dance heritage.',
      achievementsMn: 'Түүний сор болсон бүтээлээс дурьдвал "Чичиргэнэ", "Шигшрэгт", "Цоглог залуус", "Тоохуу госон", "Дөрвөн тунсаг", "Монгол угсаатаны уламжлал", "Дөрвөн Ойрадын уриа" зэрэг 150 гаруй гоцлол болон цөөхүүл, олон хүний болон свют бүжгийг тайзнаа амилуулхаас гадна аавынхаа орыг залгаж Монголын анхны бүжгэн жүжиг болох "Нарны домог", "Алтан ураг" бүжгэн жүжгүүдийг тайзнаа амилуулсан билээ.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/S.Suhbaatar.JPG'
    },
    {
      id: '3',
      nameEn: 'Bayarbaatar Davaasuren',
      nameMn: 'Даваасүрэн Баярбаатар',
      titleEn: 'Merited Art Worker',
      titleMn: 'Урлагийн Гавьяат Зүтгэлтэн',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'Born in 1971 in Sharga soum, Gobi-Altai province',
      birthMn: '1971 онд Говь-Алтай аймгийн Шарга суманд төрсөн',
      timeline: [
        {
          periodEn: '1988: Graduated as a dancer from Secondary School of Music and Dance',
          periodMn: '1988 онд ХБДС-д бүжигчин мэргэжлээр төгссөн'
        },
        {
          periodEn: '1994-1998: Earned Master\'s degree in choreography at University of Arts and Culture',
          periodMn: '1994-1998 онд СУИС-д бүжиг дэглээч мэргэжил эзэмшиж Магистр зэрэг хамгаалсан'
        },
        {
          periodEn: 'Studied modern dance at "Atelie Des-mal" Dance Institute, Lyon, France',
          periodMn: 'Францын Лион хотод "Atelie Des-mal" бүжгийн хүрээлэнд орчин үеийн бүжгээр мэргэжил дээшлүүлсэн'
        },
        {
          periodEn: '2010-2019: Served as Chief Choreographer at National Grand Art Theater',
          periodMn: '2010-2019 он хүртэл ҮУИТ-т Ерөнхий бүжиг дэглээчээр ажиллсан билээ'
        }
      ],
      achievementsEn: 'During his tenure, he staged more than 100 works, including Joroon Joroo, Let Me Be Your Body, Hunnu Ballad, Ornament of Altai, and Grand Celebration. He also brought to life Mongolia\'s first modern dance dramas such as Wolf Caught in a Trap and Between the Bear and the Dragon, as well as historical dance dramas like Nomads and Great Queens of Mongolia, winning wide acclaim from audiences.',
      achievementsMn: 'Ажиллаж байх хугацаандаа "Жороон жороо", "Бие чинь болъё", Хүннү дуулал", "Алтайн чимэг", "Их цэнгэл наадаан" зэрэг 100 гаруй бүтээлийг амилуулж мөн "Мэргэнд буусан чоно", "Баавгай луугийн хооронд" гэх анхнны модерн бүжгэн жүжгүүд, "Нүүдэл", "Монголын их хатад" түүхэн бүжгэн жүжгүүдийг тайзнаа тавьж үзэгч олоны хртээл болгосон билээ.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/%D0%A3%D0%93%D0%97%20%D0%94.%D0%91%D0%90%D0%AF%D0%A0%D0%91%D0%90%D0%90%D0%A2%D0%90%D0%A0.JPG'},
    {
      id: '4',
      nameEn: 'Khashkhuu Khatankhuyag',
      nameMn: 'Хатанхуяг Хашхүү',
      titleEn: 'Merited Artist',
      titleMn: 'Соёлын Тэргүүний Ажилтан',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'Born in 1988 in Sainshand, Dornogovi province',
      birthMn: '1988 онд Дорноговь аймгийн Сайншанд суманд төрсөн',
      timeline: [
        {
          periodEn: '2001-2005: Studied dance performance at College of Music and Dance',
          periodMn: '2001-2005 онд ХБК-ын (Бүжгийн жүжигчин) мэргэжлээр төгсөж уралцаж байх хугацаандаа'
        },
        {
          periodEn: '2004: Trained in modern dance with ADF company, United States',
          periodMn: '2004 онд АНУ-ын ADF компанид орчин үеийн бүжгийн мэргэжлээр мэргэжил дээшлүүлж'
        },
        {
          periodEn: 'Earned Master\'s degree in choreography from Russian University of Theatre Arts (GITIS), Moscow',
          periodMn: 'ОХУ-ын Москва хотын Театр урлагийн их сургуулийг (ГИТИС) бүжиг дэглээч мэргэжлээр (Магистр)-ын зэрэг хамгаалсан'
        },
        {
          periodEn: '2012-present: Working as choreographer at National Grand Art Theater',
          periodMn: '2012 оноос одоог хүртэл ҮУИТ-ын бүжигчин, бүжиг дэглээчээр ажиллаж байна'
        }
      ],
      achievementsEn: 'Among his works are the dance drama Arag, the Alungoo Queen scene in Great Queens of Mongolia, the modern dance drama Catwoman, the dance drama Heavenly Saint, choreography for the stage play State Without a Seal, and other pieces such as Wolf Spirit, Great Borjigon, Sacred Hearth, Borjigon Suugsaraa, and Splendor of the Mother Sky. His repertoire also includes dozens of other choreographed dances.',
      achievementsMn: 'Түүний туурвисан уран бүтээлүүдээс дурьдвал "Араг" бүжгэн жүжиг, "Монголын их хатад" Алунгоо хатаны хэсэг, "Муур эмэгтэй" орчин үеийн бүжгэн жүжиг, "Тэнгэрийн хутагт" бүжгэн жүжиг", "Тамгагүй төр" жүжгийн бүжгийн дэглээч, "Чоно сүлд", "Их Боржигон", "Гал голомт", "Боржигон сугсараа", "Эх тэнрэрйин үзэсгэлэн" зэрэг бүжгэн жүжгүүд тайзны бүтээл болон олон арван бүжгүүдийг дэглэсээр яваа дэглээч юм.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/GDkhashhuu.jpeg'
    },
    {
      id: '5',
      nameEn: 'Davaakhuu Altangerel',
      nameMn: 'Алтангэрэл Даваахүү',
      titleEn: 'Honored Artist of Mongolia',
      titleMn: 'Монгол Улсын Гавьяат Жүжигчин',
      positionEn: 'Trainer and Teacher',
      positionMn: 'Дасгалжуулагч багш',
      birthEn: 'Born in 1976 in Bulgan soum, Bulgan province',
      birthMn: '1976 онд Булган аймгийн Булган суманд төрсөн',
      timeline: [
        {
          periodEn: '1990: Graduated from José Martí Secondary School No. 52, Ulaanbaatar',
          periodMn: '1990 онд Улаанбаатар хотын Хосе Мартын нэрэмжит 10 жилийн 52-р сургуулийг төгсөөд'
        },
        {
          periodEn: '1992: Joined National Grand Art Theater as apprentice, became full member same year',
          periodMn: 'ҮУИТ-т 1992 оноос дагалдан бүжигчнээр ажиллаж тухайн жилдээ үндсэн бүжигчин болсон'
        },
        {
          periodEn: '2008: Graduated from University of Arts and Culture as choreographer and teacher, appointed trainer at Theater',
          periodMn: '2008 онд СУИС-ыг бүжиг дэглэгч, бүжгийн багшаар төгсөж тэр ондоо ҮУИТ-ын дасгалжуулагч багшаар ажилласан'
        }
      ],
      achievementsEn: 'Driven by his passion for choreography, he has left behind many remarkable works for the Dance Ensemble. Notable among them are Wind of Shilniin Bogd, Youth of Minjin Khangai, My Borjigon Perch Fish, Dance of the Bridesmaids, and Song of the Bird of the Wind.',
      achievementsMn: 'Ажиллаж байх хугацаандаа тэрээр бүжиг дэглэх хүсэлдээ хөтлөгдөн олон арван сор болсон бүтээлүүдээ бүжгийн чуулгад үлдээжээ. Бүжүүдээс дурьдвал "Шилнийн богдын салхи", "Минжийн хангайн залуус", "Боржигоны бор яргай мину", "Бэр бэрээчүүдийн бүжиг", "Салхит шувуун" зэрэг юм.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/A.Davaakhuu%20(2).JPG'
    }
  ];