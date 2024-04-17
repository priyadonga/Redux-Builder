import React, { useEffect, useState } from "react";
import { base_url, get_product } from "../../constant";
import { get_data } from "../../api/api";
import axios from "axios";

const Product = ({ isAdmin }) => {
  const [products, setProducts] = useState([]);
  const [setAdminActionMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await get_data(base_url, get_product);
        console.log(res.data, "get product");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSwitch = async (id, available) => {
    try {
      await axios.put(`${base_url}/products/${id}`, { available });

      setProducts(products.map(product => product.id === id ? { ...product, available } : product));

      if (available) {
        setAdminActionMessage(`Admin switched on product: ${id}`);
      } else {
        setAdminActionMessage(`Admin switched off product: ${id}`);
      }

    } catch (error) {
      console.error("Error updating product availability:", error);
    }
  };

  return (
    <div className="row">
      {products
        .filter(product => product.available)
        .map((product, index) => (
          <div className="col-md-3" key={index}>
            <div className="card m-3" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <img src={product.productImage} className="card-img-top" alt="Product" style={{ width: "100%", height: "50%" }} />
              <div className="card-body">
                <h5 className="card-title">Product Name :- {product.productName}</h5>
                <p className="card-text">Price :- {product.price}</p>
                <p className="card-text">Description :- {product.desc}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
                {isAdmin && (
                  <div>
                    <input type="checkbox" checked={product.available} onChange={(e) => handleSwitch(product.id, e.target.checked)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
