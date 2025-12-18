import React, { useState } from "react";

const CreateProduct = () => {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [info, setInfo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const product = { pname, price, qty, info };
    console.log("Product Data:", product);

    alert("Product Created Successfully!");

    setPname("");
    setPrice("");
    setQty("");
    setInfo("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Create Product</h4>
            </div>

            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={pname}
                    onChange={(e) => setPname(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Product Info</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button className="btn btn-success">
                    Create Product
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
