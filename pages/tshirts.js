import Link from 'next/link'
import React from 'react'
import Product from '../models/Product';
const mongoose = require("mongoose");

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            {products.map((item) => {

              return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                <a className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto h-[36vh] block" src={item.img} />
                  {/* in image diff */}
                  {/* md:mx-0 h-[30vh] md:h-[36vh] */}
                </a>
                <div className="mt-4 text-center ">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">₹{item.price}</p>
                  <p className="mt-1">S, M, L, XL ,XXL</p>
                </div>
              </div></Link>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {

  // Do it this way with fetch or directly write logic which is recommended in documentation
  // let res = await fetch("http://localhost:3000/api/getproducts")
  // let products = await res.text()

  // Direct logic
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  
  let products = await Product.find({category:"tshirts"})

  return {
    // fetch way
    // props: {products:JSON.parse(products)}, // will be passed to the page component as props

    // Direct logic
    props: { products: JSON.parse(JSON.stringify(products))}
  }
}

export default Tshirts
