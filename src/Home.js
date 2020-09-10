import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        alt=""
      />

      <div className="home__allProducts">
        <div className="home__productsRow">
          <Product
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
            id={1}
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
            id={1}
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
            id={1}
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
            id={1}
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
