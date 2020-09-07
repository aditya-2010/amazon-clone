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

      <div className="home__productsRow">
        <Product
          id={1}
          title={
            "Vincent Chase by Lenskart Matte Gunmetal Full Rim Hexagonal Nomades Polarized Unisex Sunglasses (VC S11745 -C1, Black Green)"
          }
          price={1}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51PGwqAylfL._UL1325_.jpg"
          }
        />

        <Product
          id={1}
          title={
            "Vincent Chase by Lenskart Matte Gunmetal Full Rim Hexagonal Nomades Polarized Unisex Sunglasses (VC S11745 -C1, Black Green)"
          }
          price={1}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51PGwqAylfL._UL1325_.jpg"
          }
        />
      </div>
      <div className="home__productsRow">
        <Product
          id={1}
          title={
            "Vincent Chase by Lenskart Matte Gunmetal Full Rim Hexagonal Nomades Polarized Unisex Sunglasses (VC S11745 -C1, Black Green)"
          }
          price={1}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51PGwqAylfL._UL1325_.jpg"
          }
        />

        <Product
          id={1}
          title={
            "Vincent Chase by Lenskart Matte Gunmetal Full Rim Hexagonal Nomades Polarized Unisex Sunglasses (VC S11745 -C1, Black Green)"
          }
          price={1}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51PGwqAylfL._UL1325_.jpg"
          }
        />
        <Product
          id={1}
          title={
            "Vincent Chase by Lenskart Matte Gunmetal Full Rim Hexagonal Nomades Polarized Unisex Sunglasses (VC S11745 -C1, Black Green)"
          }
          price={1}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51PGwqAylfL._UL1325_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
