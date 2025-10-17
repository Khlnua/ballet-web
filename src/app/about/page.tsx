'use client';

import Image from 'next/image';
import { aboutImages } from '@/data/about-images';
import { useLanguage } from '@/contexts/language-context';
import { useState } from 'react';
import { div } from 'framer-motion/client';
import SimpleLoadingImage from '@/components/simple-loading-image';

export default function AboutPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('theater');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 pt-8 pb-20">


        {/* Navigation Tabs */}
        <div className="flex justify-center gap-1 sm:gap-4 mb-16">
          {[
            { id: 'theater', label: language === 'en' ? 'Theater History' : 'Театрын түүх' },
            { id: 'international', label: language === 'en' ? 'International Cooperation' : 'Гадаад хамтын ажиллагаа' },
            { id: 'ensemble', label: language === 'en' ? 'Dance Ensemble' : 'Бүжгийн чуулга' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-1 py-1.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-1 leading-tight text-center ${
                activeTab === tab.id
                  ? 'bg-gold text-black'
                  : 'bg-gold/20 text-gold hover:bg-gold/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Theater History Section */}
        {activeTab === 'theater' && (
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
                        ? 'Honored Artist of Mongolia, Director of the National Grand Art Theatre'
                        : 'Үндэсний урлагийн их театрын захирал, Урлагийн гавъяат зүтгэлтэн'
                      }
                    </p>
                  </div>
                </div>
                
                {/* Director's Message */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gold mb-4 classic-heading">
                    {language === 'en' ? 'Director\'s Message' : 'Захирлын мэндчилгээ'}
                  </h3>
                  <div className="text-gold-light/90 classic-text leading-relaxed space-y-4">
                    {language === 'en' ? (
                      <div>
                        <p className="mb-4">
                          This year marks the 75th anniversary of the founding of the National Grand Art Theatre. Celebrating this milestone holds great significance, as it allows us to honor, promote, and widely share the invaluable contributions and achievements our institution has made to the history of both national and world culture and art.
                        </p>
                        <p className="mb-4">
                          In commemoration of this anniversary, we have undertaken various initiatives, including the publication of books and brochures chronicling the theatre's historic journey, the production of DVDs and CDs, the creation of television and radio programs, the dissemination of informative series on social media, and the making of a documentary film. We are also organizing a grand Gala performance to celebrate this occasion.
                        </p>
                        <p>
                          We believe that the theatre's artistic endeavors and activities, as the pioneering institution of traditional performing arts, play an important role in nurturing patriotism among the younger generation, strengthening national consciousness, and instilling pride in our cultural heritage. Furthermore, we hope that our continued work will significantly contribute to promoting Mongolia abroad and to authentically representing the rich, unique, and intangible cultural heritage of our nation.
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
                    src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/teartzurag.jpg" 
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
                        : '1950 оны 12 сарын 1-нийг тус чуулга байгуулагдсан түүхэн он гэж тооцож өнөөг хүрлээ'
                    },
                    {
                      year: '2002',
                      title: language === 'en' ? 'Academic Title' : 'Эрдмийн цол',
                      description: language === 'en'
                        ? 'Awarded the "Academic" title by Resolution No. 166, becoming "Academic Ensemble of National Song and Dance"'
                        : 'Монгол улсын Засгийн газар 2002 онд тус чуулгын олон жил хүсэн хүлээсэн "Эрдмийн" хэмээх цолыг 166 дугаар тогтоолоор олгож "Үндэсний дуу бүжгийн Эрдмийн чуулга" хэмээн өөрчлөн'
                    },
                    {
                      year: '2016',
                      title: language === 'en' ? 'Current Name' : 'Одоогийн нэр',
                      description: language === 'en'
                        ? 'Renamed to "National Grand Art Theater" by Resolution No. 129'
                        : '2016 онд МУ-н Засгийн газрийн 129 дугаар тогтоолоор Үндэсний Урлагийн Их Театр гэж нэрлэсэн'
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
                      src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/teartzurag.jpg" 
                      width={400} 
                      height={800} 
                      alt={language === 'en' ? 'National Grand Art Theater' : 'Үндэсний Урлагийн Их Театр'}
                      className="rounded-lg shadow-2xl object-cover w-full h-full"
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
                      Throughout its seventy-five years of history, today's National Grand Art Theater has undergone several changes in its name. It was once called "Estrada Concert Bureau," "Folk Song, Dance, and National Music Ensemble," "State Folk Song and Dance Ensemble," and "State Folk Song and Dance Company."
                    </p>
                    <p>
                      The multiple changes in name should be viewed in connection with the expansion of the theater's structure, membership, repertoire, creative development, scope of activities, and its growing international reputation. The creative works of the theater have continuously evolved and renewed with the times and with professional advancements, spanning over six decades.
                    </p>
                    <p>
                      The development of the National Grand Art Theater's artistry is inseparable from the talent, dedication, creative thinking, and effective policies of its successive leaders, artistic directors, and teachers. Over the course of its history, the Theater has earned the admiration and respect of the public with its productions and artistic talent, and has produced dozens of prominent figures whose achievements have been recognized by the state and people.
                    </p>
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
        )}

        {/* International Cooperation Section */}
        {activeTab === 'international' && (
            <div className="space-y-8">
              {/* Timeline Section Header */}
             <div className='flex flex-col lg:flex-row gap-4'>
             <div className='flex-1'>
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-4">
              <h3 className="text-lg font-bold text-gold mb-2 classic-heading text-center">
                {language === 'en' ? 'World Youth and Student Festivals Journey' : 'Дэлхий Залуучууд оюутны их наадмын аялал'}
              </h3>
            </div>
            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-4">
              {/* Timeline Container */}
              <div className="relative max-w-4xl mx-auto">
                {/* Central Timeline Line */}
                <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold via-gold/60 to-gold"></div>
                
                {/* Timeline Items */}
                <div className="space-y-4">
                  {[
                    { year: '1947', location: 'Prague, Czechoslovakia', festival: 'I', flag: '🇨🇿' },
                    { year: '1951', location: 'Berlin, GDR', festival: 'III', flag: '🇩🇪' },
                    { year: '1953', location: 'Bucharest, Romania', festival: 'IV', flag: '🇷🇴' },
                    { year: '1955', location: 'Warsaw, Poland', festival: 'V', flag: '🇵🇱' },
                    { year: '1957', location: 'Moscow, USSR', festival: 'VI', flag: '🇷🇺' },
                    { year: '1959', location: 'Vienna, Austria', festival: 'VII', flag: '🇦🇹' },
                    { year: '1962', location: 'Helsinki, Finland', festival: 'VIII', flag: '🇫🇮' },
                    { year: '1965', location: 'Algiers, Algeria', festival: 'IX', flag: '🇩🇿' },
                    { year: '1968', location: 'Sofia, Bulgaria', festival: 'IX', flag: '🇧🇬' },
                    { year: '1973', location: 'Berlin, GDR', festival: 'X', flag: '🇩🇪' },
                    { year: '1978', location: 'Havana, Cuba', festival: 'XI', flag: '🇨🇺' },
                    { year: '1985', location: 'Moscow, USSR', festival: 'XII', flag: '🇷🇺' },
                    { year: '1989', location: 'Pyongyang, DPRK', festival: 'XIII', flag: '🇰🇵' }
                  ].map((festival, index) => (
                    <div key={index} className="relative flex items-center">
                      {/* Timeline Point */}
                      <div className="absolute left-6 w-4 h-4 bg-gold rounded-full border-2 border-black z-10 flex items-center justify-center">
                      </div>
                      
                      {/* Year Badge */}
                      <div className="w-24 text-center">
                        <div className="bg-gold text-black pl-10 text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap inline-block">
                          {festival.year}
                        </div>
                      </div>
                      
                          {/* Content Card */}
                          <div className="ml-6 w-52">
                            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3  transition-all duration-300 hover:bg-black/50 w-full">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm">{festival.flag}</span>
                            <div className="text-gold-light/90 text-sm font-medium">{festival.location}</div>
                          </div>
                          <div className="text-gold/70 text-xs">{festival.festival} Festival</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
<div className='flex-1'>
            {/* Continents Section Header */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-4">
              <h3 className="text-lg font-bold text-gold mb-2 classic-heading text-center">
                {language === 'en' ? 'Global Journey - Countries and Continents Visited' : 'Дэлхийн аялал - Айлчлан тоглосон тив, улс орнууд'}
              </h3>
            </div>

            {/* Continents Section */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 w-full justify-center items-center rounded-xl p-4">
              {/* Continents Grid */}
              <div className="space-y-3 flex flex-col w-full justify-center items-start">
            {[
              {
                continent: language === 'en' ? 'Asia' : 'Ази',
                color: 'from-gold/20 to-gold/10',
                countries: language === 'en' 
                  ? 'UAE, Afghanistan, Burma, Vietnam, DPRK, South Korea, Indonesia, Laos, Malaysia, Singapore, Taiwan, Thailand, Sri Lanka, India, Japan'
                  : 'АНЭУ, Афганистан, Бирм, Вьетнам, БНАСАУ, БНСУ, Индонез, Лаос, Малайз, Сингапур, Тайвань, Тайланд, Шри-ланг, Энэтхэг, Япон',
                count: 15
              },
              {
                continent: language === 'en' ? 'Africa' : 'Африк',
                color: 'from-gold/20 to-gold/10',
                countries: language === 'en' ? 'Algeria, Guinea, Mali' : 'Алжир, Гвиней, Мали',
                count: 3
              },
              {
                continent: language === 'en' ? 'America' : 'Америк',
                color: 'from-gold/20 to-gold/10',
                countries: language === 'en' ? 'USA, Canada, Cuba, Puerto Rico' : 'АНУ, Канад, Куба, Пуэрто-рико',
                count: 4
              },
              {
                continent: language === 'en' ? 'Europe' : 'Европ',
                color: 'from-gold/20 to-gold/10',
                countries: language === 'en' 
                  ? 'Austria, Azerbaijan, England, Armenia, Bulgaria, Belgium, Belarus, Germany, Georgia, Spain, Italy, Kazakhstan, Kyrgyzstan, Latvia, Lithuania, Moldova, Netherlands, Russia, Poland, Romania, Uzbekistan, Ukraine, Hungary, Tajikistan, Turkey, Finland, France, Czech Republic, Sweden, Switzerland, Estonia'
                  : 'Австри, Азербайжан, Англи, Армен, Болгар, Бельги, Белорусь, Герман, Гүрж, Испани, Итали, Казакстан, Киргиз, Латви, Литва, Молдав, Нидерланди, ОХУ, Польш, Румын, Узбек, Укриан, Унгар, Тажикстан, Турк, Финлянд, Франц, ХБНГУ, Чех, Швед, Швейцари, Эстони',
                count: 32
              }
            ].map((region, index) => (
              <div key={index} className={`bg-gradient-to-br ${region.color} rounded-lg p-5 hover:border-gold/40 transition-all duration-300 hover:scale-105 w-full`}>
                <h4 className="text-lg font-bold text-gold mb-2">{region.continent}</h4>
                <p className="text-gold-light/80 text-sm leading-relaxed">{region.countries}</p>
              </div>
            ))}
              </div>
            </div>
</div>
            </div>
          </div>
        )}

        {/* Dance Ensemble Section */}
        {activeTab === 'ensemble' && (
          <div className="space-y-16">
            {/* Ensemble History */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 ">
             <div>

              <div className='flex gap-10 items-center justify-center'>
                <SimpleLoadingImage
                  src={'https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/Concert-575.jpg'}
                  alt="Ensemble History"
                  width={1000}
                  height={1000}
                  itemId="ensemble-history-image"
                />
              </div>

              <div className="prose prose-lg text-gold-light/90 classic-text leading-relaxed mt-10">
                {language === 'en' ? (
                  <div className="space-y-4">
                    <p>
                      On November 9, 1996, by Order No. 119 of the Minister of Enlightenment of Mongolia, the Folk Dance Ensemble of the National Grand Art Theater was named after Ts. Sevjid — People's Artist, State Prize Laureate, and the "Choreographer of the Century."
                    </p>
                    <p>
                      Since then, the ensemble named after the great choreographer has advanced remarkably: from folk and national traditional bii biyelgee dances to ritual-inspired stage performances, from stage dances to national dance dramas, and from national dance dramas to modern ballet productions.
                    </p>
                    <p>
                      This development is the result of the talent, tireless efforts, and artistic dedication of generations of skilled dancers and choreographers. Among the new generation of artists, young choreographers have emerged to carry forward the legacy of Ts. Sevjid and S. Sukhbaatar, proving that the fountain of Mongolian dance art is inexhaustible.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      Их театрын ардын бүжгийн чуулгын хамт олныг 1996 оны 11-р сарын 9-нд Монгол Улсын Гэгээрлийн сайдын 119 дүгээр тушаалаар Ардын жүжигчин, Төрийн шагналт, Зууны манлай бүжиг дэглээч Цэрэндуламын Сэвжидийн нэрээр нэрлэн, түүний нэрэмжит болгосон билээ.
                    </p>
                    <p>
                      Их бүжиг дэглээчийн нэрэмжит ардын бүжгйин чуулгын хамт олон ардын болон үндэсний язгуур бий биелгээгээс уламжлалт зан үйлийн тайзны бүжигт, тайзны бүжгээс үндэсний бүжгэн жүжигт, үндэсний бүжгэн жүжгээс орчин үеийн модерн балетыг бүтээх болтлоо хөгжин дэвшиж ирсэн нь үе үеийн чадварлаг бүжигчид, бүжиг дэглээчдийн ур чадвар, нөр их хүч хөдөлмөрийн үр шим билээ.
                    </p>
                    <p>
                      Бүжгийн чуулгын хамт олны шинэ үеийнхний дотроос Ц.Сэвжид, С.Сүхбаатар нарын халааг залгамжлах залуу бүжиг дэглээчид төрөн гарч байгаа нь бүжгийн урлагийн ундрага шавхагдашгүйг гэрчилнэ.
                    </p>
                  </div>
                )}
              </div>

             </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
