import React from "react";
import { useState, useEffect } from "react";

function AdvertpageRow5_3 () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <>
      <div className="card">
        {products.map((values) => {
          return (
            <div keys={values.id}>
              <div className="card_body">
                <div class="card_container">
              
                  <div class="card_column">
                  <h2> 3-column grid on colum</h2>
                    <div className="card_box_1">
                      <div className="content">
                        <h3>{values.title}</h3>
                        {/* <p>{values.description}</p> */}
                        <p>${values.price}</p>
                      </div>
                      <img src={values.image} alt={values.title} />
                    </div>
                    <p> This is first column of our grid system</p>
                  </div>

                  <div class="card_column">
                    <h2> 2-column grid on colum</h2>
                     <div className="card_box_1">
                      <div className="content">
                        <h3>{values.title}</h3>
                        {/* <p>{values.description}</p> */}
                        <p>${values.price}</p>
                      </div>
                      <img src={values.image} alt={values.title} />
                    </div>
                    <p> This is first column of our grid system</p>
                  </div>

                  <div class="card_column">
                    <h2>1-colum grid on colum </h2>
                      <div className="card_box_1">
                      <div className="content">
                        <h3>{values.title}</h3>
                        {/* <p>{values.description}</p> */}
                        <p>${values.price}</p>
                      </div>
                      <img src={values.image} alt={values.title} />
                    </div>
                    <p> This is first column of our grid system</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdvertpageRow5_3;