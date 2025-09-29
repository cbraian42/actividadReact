import "./MisComponentes.css";

function Producto({ name, price, discount = 0, category }) {
  const finalPrice = discount > 0 
    ? price - (price * discount) / 100 
    : price;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p className="category">{category}</p>

      {discount > 0 ? (
        <p>
          <span className="original-price">€{price.toFixed(2)}</span>
          <span className="discounted-price">€{finalPrice.toFixed(2)}</span>
          <span className="discount-badge">-{discount}%</span>
        </p>
      ) : (
        <p className="discounted-price">€{price.toFixed(2)}</p>
      )}
    </div>
  );
}

export default Producto;
