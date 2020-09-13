import React from "react";
import "./Home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="home">
      <Carousel
        className="home__carousel"
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={false}
        infiniteLoop
        autoPlay
        swipeable
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img
            className="home__image1"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
            alt=""
          />
        </div>
        <div className="home__image">
          <img
            // className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/September/Bes_of-tech_Sept_1500x600._CB405702641_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="home__image1"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            alt=""
          />
        </div>
      </Carousel>

      <div className="home__allProducts">
        <div className="home__productsRow">
          <Product
            className="home__product"
            id={1}
            title={
              "Samsung Electronics Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone | US Version | 512GB of Storage | Mobile Gaming Smartphone | Long-Lasting Battery | Mystic Black"
            }
            price={1249}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81oVkYC%2BBzL._AC_SL1500_.jpg"
            }
          />

          <Product
            className="home__product"
            id={2}
            title={
              "Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band"
            }
            price={384.95}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71mbZF8PT1L._AC_SL1500_.jpg"
            }
          />
        </div>
        <div className="home__productsRow">
          <Product
            className="home__product"
            id={3}
            title={
              "Mytrix Playstation 4 Pro 2TB SSHD Console with Dualshock 4 Wireless Controller Bundle, 4K HDR, Playstation Pro Enhanced with Solid State Hybrid Drive"
            }
            price={632}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61WuIrRvfTL._AC_SL1500_.jpg"
            }
          />

          <Product
            className="home__product"
            id={4}
            title={
              "Dell AlienWare m15 R1 15.6'' FHD 144Hz Laptop, Intel Core i7, 16GB RAM, 512GB SSD, GeForce RTX 2070 8GB GDDR6 with Max-Q Design, Thunderbolt, HDMI, Windows 10 (RTX 2070)"
            }
            price={1699}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61Xs2lcltRL._AC_SL1500_.jpg"
            }
          />
          <Product
            className="home__product"
            id={5}
            title={
              "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Grey)"
            }
            price={99}
            rating={4}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SL1100_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
