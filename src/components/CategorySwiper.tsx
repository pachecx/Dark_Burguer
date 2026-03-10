// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination, Keyboard } from "swiper/modules";
// import { mockItems } from "../data/Produtos.mock";
// import type { MenuItem } from "../data/types.produtos";
// import { categories } from "../data/types.produtos";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// export function DarkBuguerSwiper({ slides }: { slides: React.ReactNode[] }) {
//   return (
//     <div className="db-swiper">
//       <Swiper
//         modules={[EffectCoverflow, Navigation, Pagination, Keyboard]}
//         className="db-swiper__instance"
//         effect="coverflow"
//         centeredSlides
//         grabCursor
//         speed={650}
//         keyboard={{ enabled: true }}
//         navigation
//         pagination={{ clickable: true }} // bullets neon
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 18,
//           depth: 160,
//           modifier: 1.2,
//           slideShadows: false,
//         }}
//         breakpoints={{
//           0: { slidesPerView: 1.15, spaceBetween: 14 },
//           640: { slidesPerView: 1.6, spaceBetween: 18 },
//           900: { slidesPerView: 2.2, spaceBetween: 22 },
//           1200: { slidesPerView: 3, spaceBetween: 26 },
//         }}
//       >
//       {mockItems.map((item: MenuItem) => (
//           <SwiperSlide key={item.id} className="db-swiper__slide">
//             <div className="db-card">{item.name}</div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }