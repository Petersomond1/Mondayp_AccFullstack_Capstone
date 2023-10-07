import React from 'react'
import { useState, useEffect } from 'react';
import Product from './Product'; // import the Product component
import { useParams } from 'react-router-dom';

function CategoryStore() {
    const [Products, setProducts] = useState([]);
    let { Category } = useParams();
console.log(Category)


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${Category}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const result = await response.json();

                console.log(result);

                setProducts(result);
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        })()
    }, []);
    return (
        <>
            {Products && Products.map(product => (
                <Product 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                />
            ))}
        </>
    )
}

export default CategoryStore;













// import Product from './Product';

// function CategoryStore({ products }) {
//     if (!products) return <div>Loading.......</div>

//     return (
//         <div>
//             {products.map(product => (
//                 <Product 
//                     key={product.id}
//                     id={product.id}
//                     title={product.title}
//                     price={product.price}
//                     description={product.description}
//                     category={product.category}
//                     image={product.image}
//                 />
//             ))}
//         </div>
//     );
// }

// export async function getServerSideProps(context) {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const products = await res.json();

//     return { props: { products } };
// }

// export default CategoryStore;










// import React, { useEffect, useState } from 'react'
// import Product from './Product';

// function CategoryStore() {
//     const [Products, setProducts] = useState([])

//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json'
//                  }
//                 })
//                 const products = await response.json();
//                 setProducts(products);
//                 console.log (products)
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         })()}, []);
        
//     if (Products.length === 0) return <div>Loading.......</div>

//     return (
//         <div>
//             {Products.map(product => (
//                 <Product 
//                     key={product.id}
//                     id={product.id}
//                     title={product.title}
//                     price={product.price}
//                     description={product.description}
//                     category={product.category}
//                     image={product.image}
//                 />
//             ))}
//         </div>
//     );
// }

// export default CategoryStore;

