import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './container.css';



const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image" style={{height:"400px"}}>
              <img
                src={image}
                alt={title}
                
              />
            </div>
            <div className="mainContent">
              <div className="">{title}</div>
              <div className="">${price}</div>
              <div className="">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
