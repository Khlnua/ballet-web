interface Ontsloh {
  id: string;
  titleEn: string;
  titleMn: string;
  descriptionEn: string;
  descriptionMn: string;
  choreographerEn: string;
  choreographerMn: string;
  musicbyEn: string;
  musicbyMn: string;
  video: string;
}

export const performances: Ontsloh[] = [
    // {
    //     id: "1",
    //     titleEn: "Eerült",
    //     titleMn: "Ээрүүлт",
    //     descriptionEn: "This piece stylizes the domestic practice of Mongolian women spinning yarn with a spindle, presenting it on stage through refined, elegant movement and distinctive khairtssag gestures.",
    //     descriptionMn: "Тус бүжиг нь Монгол бүсгүйчүүдийн ахуйн зан үйл болох ээрүүлээр утас ээрхийг тайзны хэлбэрт оруулан уран тансаг хайрцаг хөдөлгөөн зэргээр үзүүлсэн нь онцлог юм.",
    //     choreographerEn: "Ts.Sevjid",
    //     choreographerMn: "Ц.Сэвжид",
    //     musicbyEn: "G.Tserendorj",
    //     musicbyMn: "Г.Цэрэндорж",
    //     video: ""
    // },
    {
        id: "2",
        titleEn: "Torguud Dance Suite",
        titleMn: "Торгууд бүжгийн чуулбар",
        descriptionEn: "The Torguud people's movement vocabulary is highly distinctive—men embody heroism while women are lively and spirited. In this dance, the men are likened to the mighty Altai mountains, and together with the women they perform a characteristic figure known as 'Büzhin ereen khavirga.'",
        descriptionMn: "Торгууд угсаатаны хөдөлгөөн нь өөрөө маш их онцлогтой бөгөөд эрчүүд нь баатарлаг бүсгүйчүүд нь сэргэлэн цовоо байдлыг илтгэнэ. Энэ бүжигт эрчүүдийг Алтай нутгийн ханагар уулсаар дүрсэлж бүсгүйчүүдтэй нийлэн бүжин эрээн хавирга гэх онцлог бүжиг ээ бүждэг билээ.",
        choreographerEn: "S.Sukhbaatar",
        choreographerMn: "С.Сүхбаатар",
        musicbyEn: "Kh.Bilegjargal",
        musicbyMn: "Х.Билэгжаргал",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/torguud%20bujgiin%20chuulbar.mp4"
    },
    {
        id: "3",
        titleEn: "Dorvon Berkh (Four Knucklebones)",
        titleMn: "Дөрвөн бэрх",
        descriptionEn: "From ancient times to today, Mongolians have played with shagai (ankle bones) during festivals and in daily leisure, casting 'the four berkh' for omens and blessings. This work personifies the four knucklebones on stage through four different ethnic dance styles.",
        descriptionMn: "Монголчууд эрт дээр үеэс нүүдэлчин ахуйгаа даган амьдарсаар ирсэн билээ. Эрт цагаас өнөө цаг хүртэл Монгол түмний их баярын өдрүүд болон өдөр тутамдаа чөлөөт цаг аа малын шагайгаар тоглож, аян зам хол ойрын зүйлсийг дөрвөн бэрх хаян бэлэг ерөөлөө үздэг билээ. Тэгвэл энэхүү дөрвөн шагайг тайзнаа дөрвөн өөр угсаатаны бийгээр амилуулсан бүтээл бол 'Дөрвөн бэрх' бүжиг юм.",
        choreographerEn: "S.Sukhbaatar",
        choreographerMn: "С.Сүхбаатар",
        musicbyEn: "R.Bat-Erdene",
        musicbyMn: "Р.Бат-Эрдэнэ",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/durvun%20berh.mp4"
    },
    {
        id: "4",
        titleEn: "Hunnu Ballad",
        titleMn: "Хүннү дууль",
        descriptionEn: "Portrays Modun Shanyu, great khan of Mongolia's first state, the Xiongnu (Hunnu), by invoking the falcon as a symbol of power and far-seeing vision.",
        descriptionMn: "Монголын анхны төрт улс болох Хүннү гүрний их хаан Модун Шаньюг тус бүжигт сүр хүчийн, алсын хараан бэлэгдэл болсон шонхор шувуунд залан дүрсэлжээ.",
        choreographerEn: "D.Bayarbaatar",
        choreographerMn: "Д.Баярбаатар",
        musicbyEn: "M.Birvaa",
        musicbyMn: "М.Бирваа",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/hunnu%20duuli.mp4"
    },
    {
        id: "5",
        titleEn: "Khengereg Festival",
        titleMn: "Хэнгэргийн баяр",
        descriptionEn: "Captures the distinctive culture of the Tsaatan people of northern Mongolia; a shaman soloist beats the khengereg (frame drum), leading the dancers—a centerpiece that captivates audiences.",
        descriptionMn: "Тус бүжигт Монгол ороны хойд нутагт нутаглан суух Цаатан угсаатаны онцлог шинжийг бүрэн оруулж мөн гоцлон бүжиглэх бөө нь хэнгэргээ дэлдэн бүжигчдээ бүжиглүүлдэгээрээ илүү үзэгч олоны анхаарлыг татдаг.",
        choreographerEn: "S.Sukhbaatar",
        choreographerMn: "С.Сүхбаатар",
        musicbyEn: "",
        musicbyMn: "",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/hengergiin%20bayr.mp4"
    },
    // {
    //     id: "6",
    //     titleEn: "Youth of the Countryside",
    //     titleMn: "Хөдөө нутгийн залуус",
    //     descriptionEn: "On the vast, open Gobi—amid camel caravans—the dance artistically portrays the handsome young men of the region.",
    //     descriptionMn: "Говь нутгийн уудам цэлгэрт тэмээн жин татуусан нутгийн сайхан залуусын дүрийг уг бүжигт уран сайхнаар харуулжээ.",
    //     choreographerEn: "Ts.Sevjid",
    //     choreographerMn: "Ц.Сэвжид",
    //     musicbyEn: "G.Tserendorj",
    //     musicbyMn: "Г.Цэрэндорж",
    //     video: ""
    // },
    // {
    //     id: "7",
    //     titleEn: "Nambat Biyelgee",
    //     titleMn: "Намбат биелгээ",
    //     descriptionEn: "A stage adaptation of indigenous bii/biyelgee dance forms, featuring the styles of the Torguud, Uriankhai, and Bayad peoples.",
    //     descriptionMn: "Уг бүжиг нь угсаатаны язгуур бие биелгээг тайзны хэлбэрт оруулсан бүтээл юм. Энэхүү бүжигт Торгууд, Урианхай, Баяд угсаатаны биелгээг харуулдаг.",
    //     choreographerEn: "Kh.Khashkhuu",
    //     choreographerMn: "Х.Хашхүү",
    //     musicbyEn: "O.Chinbat",
    //     musicbyMn: "О.Чинбат",
    //     video: ""
    // },
    {
        id: "8",
        titleEn: "Call of the Four Oirads",
        titleMn: "Дөрвөн Ойрадын уриа",
        descriptionEn: "A praise dance for the Oirat hero Galdan Baatar, this suite weaves together dances of the Dörvöd, Ööld, Torguud, and Zakhchin peoples of western Mongolia.",
        descriptionMn: "Дөрвөн Ойрадын баатар эр болох Галданбаа баатарыг магтан дуулсан бүжиг бөгөөд Монгол орны баруун хязгаараар оршин суух Дөрвөд, Өөлд, Торгууд, Захчин угсаатаны бүжгээс бүрддэг свют бүжиг билээ.",
        choreographerEn: "S.Sukhbaatar",
        choreographerMn: "С.Сүхбаатар",
        musicbyEn: "R.Bat-Erdene",
        musicbyMn: "Р.Бат-Эрдэнэ",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/durvun%20oiradiin%20uria.mp4"
    },
    {
        id: "9",
        titleEn: "Khün (Hunnu) Women",
        titleMn: "Хүн бүсгүйчүүд",
        descriptionEn: "Based on research into petroglyphs, this piece meticulously reconstructs movements to depict the daily life of women in the Hunnu era.",
        descriptionMn: "Энэхүү бүжигт Хүннү гүргний үеийн бүгүйчүүдийн ахуй амьдралыг хадны сүг зурагны судалгаан дээр үндэслэн хөдөлгөөн бүрийг нарийн шигтгэж өгчээ.",
        choreographerEn: "D.Enkhgerel",
        choreographerMn: "Д.Энхгэрэл",
        musicbyEn: "",
        musicbyMn: "",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/saalichin.mp4"
    },
    {
        id: "10",
        titleEn: "Sacred Hearth",
        titleMn: "Гал голомт",
        descriptionEn: "Three male soloists symbolize the three stones of the hearth, performing powerful stomping reminiscent of the Secret History of the Mongols—'stomping so that the knees graze the earth and the ribs are worn'—a defining feature of the dance.",
        descriptionMn: "Гоцлон бүжиглэх гурван эрсээр тулгын гурван чулууг бэлэгдэж Монгол нууц товчоон дээрх 'Өвдөг газрыг өлцөртөл, Хавирга газрыг халцартал дэвслэн бүжмүй' гэх ишлэл мэт дэвслэн бүжиглэдэг онцлогтой бүжиг билээ.",
        choreographerEn: "Kh.Khashkhuu",
        choreographerMn: "Х.Хашхүү",
        musicbyEn: "B.Tsatsral",
        musicbyMn: "Б.Цацрал",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/gal%20golomt.mp4"
    },
    {
        id: "11",
        titleEn: "Dorvon Tunsag (Four Tunsag)",
        titleMn: "Дөрвөн тунсаг",
        descriptionEn: "A dance suite that presents, in one elegant choreographic concept, the distinctive femininity of Khalkh, Barga (Bargu), Üzemchin, and Myangad women—distinguished through costume and movement.",
        descriptionMn: "Энэ бүжигт Халх, Бараг, Үзэмчин, Мянгад гэх угсаатаны бүсгүйчүүдийн онцлогийг нэг уран тансаг дэглэлтээр харуулсан билээ. Уг бүжиг нь мөн свют бүжгийн төрөл бөгөөд хувцас, бүжигийн хөдөлгөөн зэргээр дөрвөн өөр угсаатаныг таньж харуулах болно.",
        choreographerEn: "S.Sukhbaatar",
        choreographerMn: "С.Сүхбаатар",
        musicbyEn: "L.Byambadorj",
        musicbyMn: "Л.Бямбадорж",
        video: "https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/videosforfeatures/durvun%20tunsag.mp4"
    }
]