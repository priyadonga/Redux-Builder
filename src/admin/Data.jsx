import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_PENDING, UPDATE_USER_PENDING } from "../redux-saga/user/action/action";

const Data = () => {
  const [view, setView] = useState();
  const product = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: DELETE_USER_PENDING, payload: id });
  };

  const handleView = (id, index) => {
    const data = product.user[index];
    setView(data);
  };

  const handleInputChange = (e) => {
    setView({ ...view, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch({ type: UPDATE_USER_PENDING, payload: view });
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {product.user?.map((val, index) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.productName}</td>
              <td>{val.price}</td>
              <td>{val.desc}</td>
              <td>
                <button onClick={() => handleDelete(val.id)} className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button onClick={() => handleView(val.id, index)} className="btn btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {view && (
        <>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="card shadow">
                  <div className="card-header bg-success text-light text-center">
                    Update Your Product
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Product Name :- </label>
                        <input type="text" name="productName" value={view.productName} onChange={handleInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Price :- </label>
                        <input type="text" name="price" value={view.price} onChange={handleInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Desc :-</label>
                        <input type="text" name="desc" value={view.desc} onChange={handleInputChange} />
                      </div>
                      <div className="d-grid gap-2">
                        <button onClick={handleUpdate} className="btn btn-success">Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Data;
