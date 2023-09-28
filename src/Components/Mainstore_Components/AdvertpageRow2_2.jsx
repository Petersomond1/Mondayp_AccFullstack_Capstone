import "react-slideshow-image/dist/styles.css";
import React from "react";
import { useState, useEffect } from "react";

function AdvertpageRow_2 () {
  // https://fakestoreapi.com/products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const json = await response.json();
      setProducts(json);
    })();
  }, []);
  return (
    <>
      <div className="container">
        {products.map((values) => {
          return (
            <>
              <div className="advert2_main_1">
                <div className="advert1_header">{values.category}</div>
                <div className="box_1">
                  <div className="content">
                    <h3>{values.title}</h3>
                    {/* <p>{values.description}</p> */}
                    <p>${values.price}</p>
                  </div>
                  <img src={values.image} alt={values.title} />
                </div>
                <div className="advert1_footer">Explore Amazon Fashion</div>
              </div>

              <div className="advert2_main_2">
                <div className="advert1_header">{values.category}</div>
                <div className="box_1">
                  <div className="content">
                    <h3>{values.title}</h3>
                    {/* <p>{values.description}</p> */}
                    <p>${values.price}</p>
                  </div>
                  <img src={values.image} alt={values.title} />
                </div>
                <div className="advert1_footer">Explore Amazon Fashion</div>
              </div>

              <div className="advert2_main_3">
                <div className="advert1_header">{values.category}</div>
                <div className="box_1">
                  <div className="content">
                    <h3>{values.title}</h3>
                    {/* <p>{values.description}</p> */}
                    <p>${values.price}</p>
                  </div>
                  <img src={values.image} alt={values.title} />
                </div>
                <div className="advert1_footer">Explore Amazon Fashion</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AdvertpageRow_2;
