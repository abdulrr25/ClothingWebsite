"use client"

import React from 'react'
import ProductCard from './ProductCard'

const productData=[
    {
        img:"/jacket1.jpg",
        title: "Jacket",
        desc:"MEN Full-Jacket",
        rating:4,
        price:"55.00",
    },
    {
        img:"/jacket2.jpg",
        title: "Jacket",
        desc:"MEN Full-Jacket",
        rating:4,
        price:"60.00",
    },
    {
        img:"/shirt1.jpg",
        title: "Shirt",
        desc:"MEN Full-Sleeves Shirt",
        rating:4,
        price:"80.00",
    },
    {
        img:"/sports1.jpg",
        title: "Sports Track Pants",
        desc:"MEN Black Track Pants",
        rating:3,
        price:"40.00",
    },
    {
        img:"/watch1.jpg",
        title: "Watch",
        desc:"MEN Watch",
        rating:3,
        price:"20.00",
    },
    {
        img:"/watch2.jpg",
        title: "steelWatch",
        desc:"MEN Watch",
        rating:5,
        price:"50.00",
    },

]




const NewProducts = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className='container mx-auto px-4'>
        <h2 className='font-medium text-2xl pb-4 text-center sm:text-left'>
          New Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
          {productData.map((item, index) => (
        <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc ={item.desc}
            rating={item.rating}
            price={item.price}
            />
)



        )}


        </div>
        </div>
    </div>
  )
}

export default NewProducts