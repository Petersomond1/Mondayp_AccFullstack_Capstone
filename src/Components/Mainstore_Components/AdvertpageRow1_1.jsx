// FETCH-&-RENDER SINGLE-PRODUCT USING ID AT LEVEL-1
// FXN TO FETCH A SINGLE PRODUCT AND ALSO WITH A CARD TO RENDER OR PRINT OUT THE SINGLE PRODUCT AT LEVEL-1


import React from 'react'
import { useState, useEffect } from 'react';
import './AdvertpageRow.css';

function AdvertpageRow1_1({id = 12}) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        (async () => {
            try {

               
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'

                    }
                })
                const result = await response.json();

                // console.log(result);



                setProduct(result);
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        })()
    }, []);
    return (
        <>
            {product && <div className='container'>

                <div key={product.id}>

                    <div className="box_single">
                        <div className="content">
                            <h3 >{product.category}</h3>
                        </div>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div><p>Advert theme</p></div>
                </div>
            </div>
            }

        </>

    )
}

export default AdvertpageRow1_1;

