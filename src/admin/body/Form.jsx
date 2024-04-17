import React, { useRef } from "react";
import { add_data } from "../../api/api";
import { base_url, post_users } from "../../constant";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const addUser = async () => {
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(user);

    await add_data(base_url, post_users, user);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              Create an Account
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name :- </label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" ref={nameRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label"> Email address :- </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" res={emailRef} />
                </div>
                <div className="mb-3">
                  <label className="form-label"> Password :- </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" ref={passwordRef} />
                </div>
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-light border border-dark" onClick={addUser}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
