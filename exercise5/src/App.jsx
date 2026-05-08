import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const handleCart = () => {
    setProducts([
      ...products,
      {
        id: crypto.randomUUID(),
        title: title,
        qty: 1,
        price: Number(price),
      },
    ]);
  };
  const handleQtyInc = (id) => {
    const updatedProducts = products.map((prod) =>
      prod.id === id
        ? {
            ...prod,
            qty: prod.qty + 1,
          }
        : prod,
    );
    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.qty,
    0,
  );
  const handleQtyDec = (id) => {
    const updatedProducts = products.map((product) => {
      return product.id === id
        ? {
            ...product,
            qty: product.qty - 1,
          }
        : product;
    });

    setProducts(updatedProducts);
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);
  };
  return (
    <div className="py-4 px-6 space-x-2">
      <input
        className="border rounded-md px-2"
        placeholder="Enter product title"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <input
        className="border rounded-md px-2"
        placeholder="Enter product price"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        name=""
        id=""
      />
      <button
        onClick={handleCart}
        className=" bg-orange-400 rounded-md text-white font-semibold px-2 cursor-pointer"
      >
        Add Product
      </button>

      <h2>Products in cart</h2>

      {products.map((product) => {
        return (
          <ul
            key={product.id}
            className="py-2 border border-gray-300 rounded-md my-4 px-2 w-[30%]"
          >
            <li>title : {product.title} </li>
            <li>price : {product.price} </li>

            <li>quantity : {product.qty} </li>
            <button
              onClick={() => handleQtyDec(product.id)}
              className="bg-black cursor-pointer text-white font-semibold rounded-md px-6 mx-1"
            >
              -
            </button>
            <button
              onClick={() => handleQtyInc(product.id)}
              className="bg-black cursor-pointer text-white font-semibold rounded-md px-6 mx-1"
            >
              +
            </button>
            <button
              onClick={() => handleRemove(product.id)}
              className="bg-red-500 text-white font-semibold px-2 rounded-md cursor-pointer"
            >
              Remove
            </button>
          </ul>
        );
      })}

      <h1>Total Price : {totalPrice}</h1>
    </div>
  );
};

export default App;
