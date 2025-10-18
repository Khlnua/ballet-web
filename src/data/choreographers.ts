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
      titleEn: 'Leading Choreographer of the Century, People\'s Artist, State Prize Laureate',
      titleMn: 'Зууны манлай бүжиг дэглээч, Ардын Жүжигчин, Төрийн Шагналт',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'He was born in 1916 in Khatanbulag soum of Dornogovi aimag.',
      birthMn: '1916 онд Дорноговь аймгийн Хатанбулаг суманд төрсөн',
      timeline: [
        {
          periodEn: '1936-1939: Actor at Dornogovi provincial club',
          periodMn: '1936-1939 онд Дорноговь аймгийн клубт жүжүигчин'
        },
        {
          periodEn: '1939-1946: Military Theater',
          periodMn: '1939-1946 онд Цэргийн театр'
        },
        {
          periodEn: '1946-1959: Dancer at the State Central Theater and the theaters of Khovd and Bayan-Ulgii aimags.',
          periodMn: '1946-1959 онд Улсын төв театр болон Ховд, Баян-Өлгий аймгийн театрт бүжигчин'
        },
        {
          periodEn: '1959: Appointed choreographer and teacher at National Grand Art Theater',
          periodMn: '1959 оноос Үндэсний Урлагийн Их Театр-т бүжиг дэглээч багшаар томилогдон ажиллах болсон'
        }
      ],
      achievementsEn:'Sevjid dedicated 50 years of his work and talent to the development of folk dance. Throughout his career, he choreographed over 200 dances. Among them are "Jalam Khar," "The Milkmaid," "The  Mongolian Dance Ensemble," "Eruult," "The Grooms," "The Villagers," "The Queens" and other works that have become masterpieces of the theater\'s modern era. The folk theater dance ensemble was founded  on November 09, 1996, by People\'s Artist of Mongolia, State Prize laureate and leading choreographer of  the century, Sevjid Tserendulam and continues its activities to this day.',
      achievementsMn: 'Ц.Сэвжид ардын бүжгийн хөгжилд 50 жилийн хөдөлмөр, авьяас билгээ зориулсан юм. Тэрээр нийт ажиллаж байх хугацаандаа 200 гаруй бүжиг дэглэсэн. Үүнээс дурьдвал "Жалам хар","Саальчин", "Монгол бүжгийн чуулга", "Ээрүүлт", "Адуучин залуус", "Хөдөө нутгийн залуус", "Хатад" гээд ҮУИТ-ын орчин цагийн сор болсон бүтээлүүд юм. ҮУИТ-ын Бүжгийн чуулгыг 1996 оны 11-р сарын 9-нд Монгол Улсын Ардын жүжигчин, Төрийн шагналт, Зууны манлай бүжиг дэглээч Цэрэндуламын Сэвжидийн нэрээр нэрлэн алдаршуулж өнөөг хүртэл овголсоор байна.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/%D0%A6.%D0%A1%D1%8D%D0%B2%D0%B6%D0%B8%D0%B4.jpg'
    },
    {
      id: '2',
      nameEn: 'Sukhbaatar Sevjid',
      nameMn: 'Сэвжидийн Сүхбаатар',
      titleEn: 'State Prize Laureate, Honored Artist',
      titleMn: 'Төрийн Шагналт, Урлагийн Гавьяат Зүтгэлтэн',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'He was born in 1951 in Ulaanbaatar.',
      birthMn: '1951 онд Улаанбаатар хотод төрсөн',
      timeline: [
        {
          periodEn: '1971: Graduated from the Music and Choreography School with a degree in dance',
          periodMn: '1971 онд Хөгжим бүжгийн дунд сургуулийг бүжигчний мэргэжлээр төгссөн'
        },
        {
          periodEn: '1971-1976: Worked as performer at National Grand Art Theater',
          periodMn: '1971-1976 онд ҮУИТ-т бүжигчнээр ажилласан'
        },
        {
          periodEn: 'Studied choreography and directing at the A.V.Lunacharsky Moscow State Theatre Institute',
          periodMn: 'ЗХУ-ын Москва хотын А.В.Луначарскийн нэрэмжит театр урлагийн дээд сургуульд бүжиг дэглээч, найруулагчийн мэргэжил эзэмшсэн'
        }
      ],
      achievementsEn:'Among his most famous works are Chichirgene, Shigshregt, The Jolly Fellows, Tookhuu Goson, Durvun Tunsag, The Tradition of the Mongols,  The Cry of the Four Oirats and more than 150 solo, group and suite dances as well as the first Mongolian dance dramas The Solar Legend and Altan Urag, in the creation of which he accepted the legacy of his  father.',
      achievementsMn: 'Түүний сор болсон бүтээлээс дурьдвал "Чичиргэнэ", "Шигшрэгт", "Цоглог залуус", "Тоохуу госон", "Дөрвөн тунсаг", "Монгол угсаатаны уламжлал", "Дөрвөн Ойрадын уриа" зэрэг 150 гаруй гоцлол болон цөөхүүл, олон хүний болон свют бүжгийг тайзнаа амилуулхаас гадна аавынхаа орыг залгаж Монголын анхны бүжгэн жүжиг болох "Нарны домог", "Алтан ураг" бүжгэн жүжгүүдийг тайзнаа амилуулсан билээ.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/S.Suhbaatar.JPG'
    },
    {
      id: '3',
      nameEn: 'Bayarbaatar Davaasuren',
      nameMn: 'Даваасүрэн Баярбаатар',
      titleEn: 'Honored Artist',
      titleMn: 'Урлагийн Гавьяат Зүтгэлтэн',
      positionEn: 'Chief Choreographer',
      positionMn: 'Ерөнхий бүжиг дэглээч',
      birthEn: 'Born in 1971 in Sharga soum, Gobi-Altai province',
      birthMn: '1971 онд Говь-Алтай аймгийн Шарга суманд төрсөн',
      timeline: [
        {
          periodEn: '1988: Graduated from the State University of Dance and Music with a degree in dance',
          periodMn: '1988 онд ХБДС-д бүжигчин мэргэжлээр төгссөн'
        },
        {
          periodEn: '1994-1998: Earned Master\'s degree in choreography at University of Arts and Culture',
          periodMn: '1994-1998 онд СУИС-д бүжиг дэглээч мэргэжил эзэмшиж Магистр зэрэг хамгаалсан'
        },
        {
          periodEn: 'Studied modern dance at the Atelier Desmal Dance Institute in Lyon, France.',
          periodMn: 'Францын Лион хотод "Atelie Des-mal" бүжгийн хүрээлэнд орчин үеийн бүжгээр мэргэжил дээшлүүлсэн'
        },
        {
          periodEn: '2010-2019: Served as Chief Choreographer at National Grand Art Theater',
          periodMn: '2010-2019 он хүртэл ҮУИТ-т Ерөнхий бүжиг дэглээчээр ажиллсан билээ'
        }
      ],
      achievementsEn:'During his  career, he performed more than 100 works, including "Joroon Joroo", "I Want to Be Your Body", "Hymn of the Huns", "Decoration of Altai", "Great Holiday" as well as the first modern ballets "Wolf from the  Prophecy", "Between the Bear and the Dragon", historical ballets "Nomad" and "Mongolian Great  Queens" to the delight of the audience. ',
      achievementsMn: 'Ажиллаж байх хугацаандаа "Жороон жороо", "Бие чинь болъё", Хүннү дуулал", "Алтайн чимэг", "Их цэнгэл наадаан" зэрэг 100 гаруй бүтээлийг амилуулж мөн "Мэргэнд буусан чоно", "Баавгай луугийн хооронд" гэх анхнны модерн бүжгэн жүжгүүд, "Нүүдэл", "Монголын их хатад" түүхэн бүжгэн жүжгүүдийг тайзнаа тавьж үзэгч олоны хртээл болгосон билээ.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/%D0%A3%D0%93%D0%97%20%D0%94.%D0%91%D0%90%D0%AF%D0%A0%D0%91%D0%90%D0%90%D0%A2%D0%90%D0%A0.JPG'},
    {
      id: '4',
      nameEn: 'Khashkhuu Khatankhuyag',
      nameMn: 'Хатанхуяг Хашхүү',
      titleEn: 'Cultural leader',
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
      achievementsEn:'His works include the ballet "Arag", the role of  Alungoo-khatan in "The Great Queens of Mongolia", the modern ballet "Catwoman", the ballet "Heavenly  Priest", the ballet "State without seal", the ballet "Wolf Totem", "The Great Borjigon", "Gal Golomt",  "Borjigon sugsaraa", "Ekh Tengeriin Erkhes" and many other dances as well as stage productions and  dozens of other dances. ',
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
      achievementsEn:'Throughout his career, he was driven by a desire to pursue choreography and left behind  dozens of successful works for dance ensembles. Among the dances the following stand out: “Wind of  Shiliin Bogd”, “Minjiin Khangain Zaluus”, “Borjigonii Bor Yargai Minu”, “Ber Bereechuudiin Bujig” and “Bird of the Wind”. ',
      achievementsMn: 'Ажиллаж байх хугацаандаа тэрээр бүжиг дэглэх хүсэлдээ хөтлөгдөн олон арван сор болсон бүтээлүүдээ бүжгийн чуулгад үлдээжээ. Бүжүүдээс дурьдвал "Шилнийн богдын салхи", "Минжийн хангайн залуус", "Боржигоны бор яргай мину", "Бэр бэрээчүүдийн бүжиг", "Салхит шувуун" зэрэг юм.',
      image: 'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bagshnar/A.Davaakhuu%20(2).JPG'
    }
  ];