'use client';

import { useLanguage } from '@/contexts/language-context';
import SimpleLoadingImage from '@/components/simple-loading-image';

export default function DanceEnsemble() {
  const { language } = useLanguage();

  return (
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
  );
}
