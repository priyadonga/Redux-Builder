import React from "react";

const Table = ({ data }) => {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="card shadow">
          <div className="card-header bg-dark text-white text-center">User List</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
              {data.map((val, index) => (
                  <tr key={index}>
                    <th>{val.id}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Table;
