'use client';

import { useLanguage } from '@/contexts/language-context';
import SimpleLoadingImage from '@/components/simple-loading-image';

export default function TheaterHistory() {
  const { language } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Director's Message */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* Director Image */}
          <div className="flex-shrink-0 flex flex-col justify-between lg:max-w-sm">
            <SimpleLoadingImage 
              src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/darga.jpeg" 
              width={400} 
              height={500} 
              alt={language === 'en' ? 'Tsoggerel Gonchig, Director' : 'Гончигийн Цоггэрэл, Захирал'}
              className="rounded-lg shadow-lg object-cover w-full h-auto mx-auto lg:mx-0"
              itemId="director-image"
            />
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-gold classic-heading mb-2">
                {language === 'en' ? 'Tsoggerel Gonchig' : 'Гончигийн Цоггэрэл'}
              </h4>
              <p className="text-gold-light/90 classic-text text-base leading-relaxed">
                {language === 'en' 
                  ? 'State Honored Artist'
                  : 'Урлагийн гавъяат зүтгэлтэн'
                }
              </p>
              <p className="text-gold-light/90 classic-text text-base leading-relaxed">
              {language === 'en' 
                  ? 'Director of the National Art Grand Theater'
                  : 'Үндэсний урлагийн их театрын захирал'
                }
              </p>
            </div>
          </div>
          
          {/* Director's Message */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gold mb-4 classic-heading">
              {language === 'en' ? 'Greetings from Director' : 'Захирлын мэндчилгээ'}
            </h3>
            <div className="text-gold-light/90 classic-text leading-relaxed space-y-4">
              {language === 'en' ? (
                <div>
                  <p className="mb-4">
                  This year marks the 75th anniversary of the founding of the National Art Grand Theatre.  Celebrating our organization's anniversary is particularly significant for promoting and disseminating  information about our company's role and achievements in the cultural and artistic history of our country  and the world.                        </p>
                  <p className="mb-4">
                  In anticipation of the anniversary, we have published books and brochures dedicated to  the historical events of our theatre, promoted our works, created DVDs and CDs, prepared television and  radio programs, conducted educational series on social media, produced documentaries as well as we are organized commemorative events such as gala concerts.                         </p>
                  <p>
                  We believe that our theater's work and creativity will have a multifaceted impact, helping to  preserve pride in our ancient folk art, foster patriotism in the younger generation, and revive national  consciousness among the masses. Furthermore, we hope that they will make a significant contribution to  promoting our country abroad and truly introduce people to our inexhaustible and unique intangible  cultural heritage.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mb-4">
                    Үндэсний урлагийн их театрын үүсэн байгуулагдсаны 75 жилийн ойн баярт үйл явдал энэ онд тохиож байна. Байгууллагынхаа тэгш ойг тэмдэглэх нь улс орныхоо болоод дэлхийн нийтийн ёоёл, урлагийн түүхэнд манай хамт олны гүйцэтгэсэн үүрэг, бүтээсэн гавъяаг суртачлан таниулах, түгээн дэлгэрүүлэхэд онцгой ач холбогдолтой билээ.
                  </p>
                  <p className="mb-4">
                    Ойгоо угтаж их театрынхаа түүхэн үйл явдалтай холбоотой ном, товхимол хэвлүүлэх, бүтээл туурвилаа суртачлан таниулах, DVD, CD, бүтээх, телевиз, радиогийн нэвтрүүлэг бэлтгэх, олон нийтийн сүлжээгээр танин мэдэхүйн цуврал мэдээлэл явуулах, баримтат кино бүтээх, ойн хүндэтгэлийн арга хэмжээ-Гала тоглолтыг зохион байгуулхаар ажиллаа.
                  </p>
                  <p>
                    Манай театрын явуулдаг үйл ажиллагаа, уран бүтээлүүд ардын урлагийн ууган байгуулгаараа бахархах, залуу үеийнхнийхээ эх оронч үзлийг төлөвшүүлэх, олон түмний үндэсний ухамсрыг сэргээхэд томоохон түлхэц болх олон талын нөлөөтэй гэж үзэж байна. Цаашилбал гадаад оронд улс орноо суртачлах, соёлын биет бус өвийн шавхагдашгүй, давтагдашгүй өвөрмөц шинж байдлыг үнэн бодитоор таниулахад ихээхэн хувь нэмэр болно хэмээн найдаж байна.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">        
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile: Theater Image on top */}
          <div className="w-full lg:hidden mb-8">
            <SimpleLoadingImage 
              src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/teatre.jpg" 
              width={400} 
              height={600} 
              alt={language === 'en' ? 'National Grand Art Theater' : 'Үндэсний Урлагийн Их Театр'}
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
              itemId="theater-image-mobile"
            />
          </div>

          {/* Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30 hidden lg:block"></div>
            
            {[
              {
                year: '1950',
                title: language === 'en' ? 'Foundation' : 'Үүсэл',
                description: language === 'en' 
                  ? 'December 1, 1950 - Official founding date of the ensemble'
                  : '1950 оны 12 сарын 1-нийг тус чуулга байгуулагдсан түүхэн он гэж тооцож өнөөг хүрлээ.'
              },
              {
                year: '2002',
                title: language === 'en' ? 'Academic Title' : 'Эрдмийн цол',
                description: language === 'en'
                  ? 'Awarded the "Academic" title by Resolution No. 166, becoming "Academic Ensemble of National Song and Dance"'
                  : 'Монгол улсын Засгийн газар 2002 онд тус чуулгын олон жил хүсэн хүлээсэн "Эрдмийн" хэмээх цолыг 166 дугаар тогтоолоор олгож "Үндэсний дуу бүжгийн Эрдмийн чуулга" хэмээн өөрчлөгдсөн.'
              },
              {
                year: '2016',
                title: language === 'en' ? 'Current Name' : 'Одоогийн нэр',
                description: language === 'en'
                  ? 'Renamed to "National Grand Art Theater" by Resolution No. 129 of the Government of Mongolia'
                  : '2016 онд МУ-н Засгийн газрийн 129 дугаар тогтоолоор Үндэсний Урлагийн Их Театр гэж нэрлэсэн.'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg z-10">
                  {item.year}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-gold mb-4 classic-heading">{item.title}</h3>
                  <p className="text-gold-light/90 classic-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Theater Image on right */}
          <div className="hidden lg:block w-1/2">
            <div className="h-full">
              <SimpleLoadingImage 
                src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/teatre.jpg" 
                width={400} 
                height={800} 
                alt={language === 'en' ? 'National Grand Art Theater' : 'Үндэсний Урлагийн Их Театр'}
                className="rounded-lg shadow-2xl object-cover w-full h-full flex justify-center items-center"
                itemId="theater-image-desktop"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Theater Introduction */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 ">
        <h3 className="text-2xl font-bold text-gold mb-6 classic-heading">
          {language === 'en' ? 'Grand Teatre of National Art' : 'Үндэсний Урлагийн Их Театрын танилцуулга'}
        </h3>
        <div className="prose prose-lg text-gold-light/90 classic-text leading-relaxed">
          {language === 'en' ? (
            <div className="space-y-4">
              <p>
              The current National Art Grand Theater has changed its name several times over its seventy-five year history including "Bureau of Variety Concerts," "Ensemble of Folk Song, Dance and National Music” as well as "National Ensemble of Folk Song and Dance.</p>
              <p>
              These multiple name changes should be considered in light  of the growth and development of the theater's structure, staff, artistic creativity, services, operational  features, enrichment of its repertoire and growing international reputation. The theater's creative output  has been updated and transformed over the decades, reflecting the era and professional level. The growth and development of the National Art Grand Theater are inextricably linked to the talent, hard work,  creative thinking and rational policies of its management, artistic directors and teachers of each  generation. 
              </p>
              <p>
              Throughout its history, the Grand Theater has earned the admiration and respect of the public  for its creativity and talent, producing dozens of renowned performers whose achievements have been  recognized by the government and the people. Since its founding and development, the Grand Theater has played a key role in the country's international relations, proudly fulfilling its honorable and  responsible role, representing Mongolia to many countries in Asia, Africa, America and Europe, and  promoting and introducing traditional Mongolian folk art. Our artists not only masterfully performed  songs, music and dances from the countries they visited but also won gold, silver and bronze medals and  special awards at prestigious international competitions and festivals, and were repeatedly awarded  Grand Prix and other prizes at international folk-art festivals.               </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                Өнөөгийн Үндэсний Урлагийн Их Театр нь түүхийнхээ далан таван жилийн хугацаанд байгууллагынхаа нэршилээ "Эстрад концертын товчоо", Ардын дуу, танц, үндэсний хөгжмийн ансамбль", "Ардын дуу, танцны Улсын ансамбль", "Ардын дуу бүжгийн улсын чуулга", "Улсын ардын дуу бүжгийн чуулга" хэмээн хэд хэдэн удаа өөрчилж иржээ.
              </p>
              <p>
                Энэхүү олон удаа нэршил нь өөрчлөгдөн ирсэнийг театрын бүтэц, бүрэлдэхүүн, уран бүтээлийн өсөлт хөгжил, үйлчилгээнй цар хүрээ, үйл ажиллагааны онцлог, урын сангийн баяжилт, олон улсын нэр хүндийн өсөлттэй холбож үзэх ёстой.
              </p>
              <p>
                ҮУИТ-ын уран бүтээлийн өсөлт хөгжилт нь үе үеийн удирдлага, уран сайхны удирдагчид, багш нарын авъяас чадвар, хүч чармайлт, бүтээлч сэтгэлгээ, оновчой бодлоготой салшгүй холбоотой.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
