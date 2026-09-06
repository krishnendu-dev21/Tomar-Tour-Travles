import React from "react";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import customer1 from "../assets/krishna.jpeg";
import customer2 from "../assets/purnendu.jpeg";
import customer3 from "../assets/ladis.jpg";
import customer4 from "../assets/customer4.jpg";
import customer5 from "../assets/user3.jpg";
import customer6 from "../assets/customer6.jpg";
import customer7 from "../assets/customer3.avif";
import customer8 from "../assets/customer5.jpg";
// import customer9 from "../assets/reviews/customer9.jpg";
// import customer10 from "../assets/reviews/customer10.jpg";

const reviews = [
  {
    id: 1,
    name: "Krishnendu Ghosh",
    location: "Connaught Place, New Delhi",
    image: customer1,
    rating: 5,
    review:
      "Excellent service! The car was clean and the journey was very comfortable.",
  },

  {
    id: 2,
    name: "Purnendu Ghosh",
    location: "Dwarka, New Delhi",
    image: customer2,
    rating: 5,
    review:
      "Very reliable travel service. Driver was professional and friendly.",
  },

  {
    id: 3,
    name: "Priya Roy",
    location: "Rohini, New Delhi",
    image: customer3,
    rating: 5,
    review:
      "Booking was very easy and the overall experience was excellent.",
  },

  {
    id: 4,
    name: "Sourav Ghosh",
    location: "Saket, New Delhi",
    image: customer4,
    rating: 4,
    review:
      "Good service and comfortable car. I will definitely book again.",
  },

  {
    id: 5,
    name: "Sneha Das",
    location: "Vasant Kunj, New Delhi",
    image: customer5,
    rating: 5,
    review:
      "Amazing experience with TOMAR TOUR & TRAVELS. Highly recommended!",
  },

  {
    id: 6,
    name: "Arjun Mondal",
    location: "Lajpat Nagar, New Delhi",
    image: customer6,
    rating: 5,
    review:
      "The journey was smooth and the driver reached on time. Great service.",
  },

  {
    id: 7,
    name: "Arjun Mondal",
    location: "Lajpat Nagar, New Delhi",
    image: customer7,
    rating: 5,
    review:
      "The journey was smooth and the driver reached on time. Great service.",
  },
  {
    id: 8,
    name: "Arjun Mondal",
    location: "Lajpat Nagar, New Delhi",
    image: customer8,
    rating: 5,
    review:
      "Amazing experience with TOMAR TOUR & TRAVELS. Highly recommended!",
  }
];



function Rating() {
  return (
    <section className="rating-section">

      <div className="rating-container">

        {/* Heading */}
        <div className="rating-header">
          <span className="rating-subtitle">
            CUSTOMER REVIEWS
          </span>

          <h2>
            What Our <span>Customers Say</span>
          </h2>

         <p>
         Trusted by our customers for comfortable, reliable and hassle-free
         journeys with  <br/> 
          <strong>TOMAR TOUR & TRAVELS .</strong>
         </p>


        </div>

        {/* Overall Rating */}
        <div className="overall-rating">

          <div className="rating-number">
            4.9
          </div>

          <div>
            <div className="rating-stars">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={21}
                  fill="currentColor"
                />
              ))}

            </div>

            <p>
              Based on 500+ reviews
            </p>
          </div>

        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="rating-swiper"
        >

          {reviews.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="review-card">

                {/* User */}
                <div className="review-top">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="review-image"
                  />

                  <div className="review-user">

                    <h3>
                      {item.name}
                    </h3>

                    <span>
                      {item.location}
                    </span>

                  </div>

                </div>

                {/* Stars */}
                <div className="review-stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill={
                        star <= item.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}

                </div>

                {/* Review */}
                <p className="review-text">
                  "{item.review}"
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Rating;
