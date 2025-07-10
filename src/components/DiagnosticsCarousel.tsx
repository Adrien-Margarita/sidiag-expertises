import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { diagnostics } from "../data/diagnosticsData";

export default function DiagnosticsCarousel() {
  return (
    <section className="bg-white pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sidiag-dark mb-6">
          Découvrez les diagnostics immobiliers réglementaires
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Nous réalisons tous les diagnostics obligatoires pour la vente et la location, avec précision et rapidité.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {diagnostics.map((diag) => (
            <SwiperSlide key={diag.title} className="pb-4">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between border border-gray-100 min-h-[260px]">
  <img src={diag.icon} alt="" className="w-12 h-12 mx-auto mb-4" />
  <h3 className="text-lg font-semibold text-sidiag-dark mb-2">{diag.title}</h3>
  <p className="text-sm text-gray-600 mb-4 flex-grow">{diag.description}</p>
  <a
    href={`diagnostic/${diag.slug}`}
    className="inline-flex items-center justify-center text-sidiag-mediumLight hover:text-sidiag-dark font-medium text-sm"
  >
    En savoir plus <ArrowRightIcon className="w-4 h-4 ml-1" />
  </a>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
