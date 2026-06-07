function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="card">
          <img
            src="https://via.placeholder.com/200"
            alt="Phone"
          />
          <h3>iPhone 15</h3>
          <p>₹79,999</p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/200"
            alt="Laptop"
          />
          <h3>Gaming Laptop</h3>
          <p>₹89,999</p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/200"
            alt="Headphones"
          />
          <h3>Headphones</h3>
          <p>₹4,999</p>
        </div>

      </div>
    </section>
  );
}

export default Products;