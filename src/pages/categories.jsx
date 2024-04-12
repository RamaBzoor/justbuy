import "./pages.css";

function Categories(data) {
  let ar1 = data.data;
    return (
      <div className="container">
        <div className="card-container">
          {
            ar1.map(product =>
              <div className="card" key={Math.random()}>
                <div><img src={product.mainImage.secure_url} className="product-img" /></div>
                <div>{product.name}</div>
                <div className="price-div">${product.price}</div>
              </div>
            )
          }
        </div>
      </div>
      
    )
  }
  
  export default Categories;