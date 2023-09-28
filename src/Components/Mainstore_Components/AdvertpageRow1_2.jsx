import React from "react";
import { useState, useEffect } from "react";

function AdvertpageRow1_2 () {
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
        <products
          key={values.id}
          id={values.id}
          title={values.title}
          price={values.price}
          description={values.description}
          category={values.category}
          image={values.image}
        />
          return (
            <div key={values.id}>
              <div className="card_body_single">
                <div class="card_container_single">
              
                  <div class="card_column">
                  <h2> {values.category}</h2>
                    <div className="card_box_1">
                      <div className="content">
                        {/* <h3>{values.title}</h3> */}
                        {/* <p>{values.description}</p> */}
                        </div>
                      <img src={values.image} alt={values.title} />
                    </div>
                    <p>Advertorial</p>
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

export default AdvertpageRow1_2;
