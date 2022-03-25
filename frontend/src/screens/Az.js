
import React from "react";


export default function Az() {
    const pizzas= [
        {
          _id: "1",
          name: "Margherita",
          category: "Vegetable",
          image: "/images/pizza1.jpg",
          description: "Pan pizza - crispy on the outside",
          price: 60,
          rating: 4.5,
          numReviews: 10,
          countInStock: 6,
        },
        {
          _id: "2",
          name: "Tuna Fish",
          category: "Fish",
          image: "/images/pizza2.jpg",
          price: 50,
          brand: "tuna",
          rating: 4.2,
          numReviews: 5,
          countInStock: 6,
        },
        {
          _id: "3",
          name: "BBQ Pizza",
          category: "Pants",
          image: "/images/diavola.jpg",
          price: 70,
          brand: "chicken meat",
          rating: 4.5,
          numReviews: 8,
          countInStock: 6,
        },
        {
          _id: "4",
          name: "Turkish Pizza",
          category: "Pants",
          image: "/images/ham.jpg",
          price: 80,
          brand: "spicy",
          rating: 4.5,
          numReviews: 8,
          countInStock: 6,
        },
        {
          _id: "5",
          name: "Vegan Pizza",
          category: "fish",
          image: "/images/napoletana.jpg",
          price: 40,
          brand: " vegan",
          rating: 4.5,
          numReviews: 8,
          countInStock: 6,
        },
        {
          _id: "6",
          name: "Cheese Pizza",
          category: "vegan",
          image: "/images/cheese.jpg",
          price: 30,
          brand: " cheese",
          rating: 4.5,
          numReviews: 8,
        },
        {
          _id: "7",
          name: "Rustica Pizza",
          category: "meat",
          image: "/images/margherita.jpg",
          price: 45,
          brand: " meat",
          rating: 4.5,
          numReviews: 8,
        },
        {
          _id: "8",
          name: "Tomato Fresca Pizza",
          category: "vegan",
          image: "/images/margherita.jpg",
          price: 90,
          brand: " vegan",
          rating: 4.5,
          numReviews: 8,
        },
      ];
  return (
    <div className="pizza-list">
      {pizzas.map((mn, index) => <Pizza
          key={index}
        image={mn.image}
          name={mn.name}
          price={mn.price}
          rating={mn.rating}
          category={mn.category}
        />)}
    </div>
  );
}
function Pizza({ image, name,price, rating, category }) {
    return (
      <div className="pizza-container">
        
        <img className="pizza-image" src={image} alt={name} />
        <h2 className="pizza-name">{name}
            </h2>
           <div className="pizza-specs">
           
            <h3 className="pizza-price">Rs: {price}</h3>
            <p  className="pizza-rating">{rating}⭐</p>
           <p className="pizza-category">{category}</p> 
           </div>
           <button type="button" class="btn btn-danger">Add to Cart</button>
      </div>
    );
  }
  