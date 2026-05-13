import { useContext, useState } from "react";
import ProductContext from "./productContext";

const CartComponent = () => {
  const [cart, setCart] = useState([]);
  const products = useContext(ProductContext);

  console.log(cart);
  const handleAddToCart = (id) => {
    const product = products.find((pr) => pr.id === id);

    setCart([...cart, product]);
  };

  const handleRemove = (id) => {
    const prs = cart.filter((product) => product.id !== id);
    setCart(prs);
    console.log(prs);
  };
  return (
    <div>
      {/* add to cart */}

      <h2>Products available</h2>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>
            Add to cart
          </button>
        </li>
      ))}

      {/* products in cart */}
      <h2>Cart Summery</h2>
      {cart.length > 0 ? (
        cart.map((pr) => (
          <li key={pr.id}>
            <strong> {pr.title} </strong> -- {pr.price}
            <br /> <button onClick={() => handleRemove(pr.id)}>Remove</button>
          </li>
        ))
      ) : (
        <p>your cart is empty!</p>
      )}
    </div>
  );
};

export default CartComponent;
