import React, { useRef } from "react";
import { POST_USER_PENDING } from "../redux-saga/user/action/action";
import { useDispatch } from "react-redux";

const From = () => {
    const productNameRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();


    let dispatch = useDispatch()

    //add user
    let addUser = () => {

        let data = {
            productName: productNameRef.current.value,
            price: priceRef.current.value,
            desc: descRef.current.value,
        }

        console.log(data);

        dispatch({ type: POST_USER_PENDING, payload: data })
        
        productNameRef.current.value = "";
        priceRef.current.value = "";
        descRef.current.value = "";
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-light text-center">
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
                                        <button type="button" className="btn btn-primary" onClick={addUser}>Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default From