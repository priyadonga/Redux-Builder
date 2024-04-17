import React, { useEffect, useRef, useState } from "react";
import { base_url, get_product, post_product } from "../../constant";
import { add_data, get_data } from "../../api/api";
import { Switch } from "@mui/material";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const productNameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  async function addProduct() {
    const productToAdd = {
      productName: productNameRef.current.value,
      productImage: "https://imagescdn.thecollective.in/img/app/product/4/463982-3663667.jpg",
      price: priceRef.current.value,
      desc: descRef.current.value,
      available: true,
    };

    try {
      const res = await add_data(base_url, post_product, productToAdd);
      setProduct([...product, res.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  async function handleSwitch(id, available, index) {
    const updatedProduct = { ...product[index], available };

    try {
      await axios.put(`http://localhost:3001/products/${id}`, updatedProduct);
      setProduct(product.map((val, ind) => (ind === index ? updatedProduct : val)));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await get_data(base_url, get_product);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>

      {/* form---------------------------------- */}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header bg-dark text-white text-center">
                Add Your Product
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Product Name :- </label>
                    <input type="text" className="form-control" placeholder="Enter product name" ref={productNameRef} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price :- </label>
                    <input type="number" className="form-control" placeholder="Enter price" ref={priceRef} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Desc :-</label>
                    <input type="text" className="form-control" placeholder="Enter desc..." ref={descRef} />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-light border border-dark" onClick={addProduct}>Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table-------------------------------------- */}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-header bg-dark text-white text-center">
                Product List
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <img
                            src={item.productImage}
                            alt={item.productName}
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{item.productName}</td>
                        <td>$ {item.price}</td>
                        <td>{item.desc}</td>
                        <td>
                          <Switch
                            checked={item.available}
                            onChange={(e) =>
                              handleSwitch(item.id, e.target.checked, index)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;





