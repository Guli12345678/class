import React, { Component, use } from "react";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      discount: "",
      data: [],
      editingItem: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { price, data, title, editingItem, discount } = this.state;
    if (Number(price) < 0) {
      return alert("xato");
    }
    if (Number(discount) > 100) {
      return alert("Discount has exceeded the limit!");
    }

    if (editingItem) {
      const editedData = data.map((product) =>
        product.id === editingItem.id
          ? { id: editingItem.id, title, price, discount }
          : product
      );
      this.setState({
        data: editedData,
        title: "",
        price: "",
        discount,
        editingItem: null,
      });
      console.log(discount);
    } else {
      const product = {
        id: Date.now(),
        title,
        price: Number(price),
        discount,
      };
      this.setState({ data: [...data, product], title: "", price: "" });
    }
  };

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((product) => product.id !== id),
    });
  };

  handleUpdate = (product) => {
    console.log(product);
    this.setState({
      title: product.title,
      price: product.price,
      editingItem: product,
      discount: Number(product.discount),
    });
  };
  handleCancel = () => {
    this.setState({ editingItem: null });
  };

  render() {
    const { price, title, data, editingItem, discount } = this.state;
    return (
      <div className="container mt-10  text-center">
        <h2>Product</h2>
        <form
          onSubmit={this.handleSubmit}
          action=""
          className="flex gap-10  justify-center mt-10"
        >
          <input
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
            className="shadow-lg indent-3"
            placeholder="title"
          />
          <input
            value={discount}
            onChange={(e) => this.setState({ discount: e.target.value })}
            type="number"
            className="shadow-lg indent-3"
            placeholder="discount"
          />
          <input
            value={price}
            onChange={(e) => this.setState({ price: e.target.value })}
            type="number"
            className="shadow-lg indent-3"
            placeholder="price"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            {editingItem ? "update" : "submit"}
          </button>
        </form>
        <div>
          {console.log(data)}
          {data?.map((product) => (
            <div
              key={product.id}
              className="mt-8 p-4 bg-white rounded-md shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Title: {product.title}
              </h3>
              <h3> Discount: {product.discount}</h3>
              <p className="text-sm text-gray-500">{product.price} USD</p>
              <p className="text-sm text-gray-500">
                With discount:
                {product.price -
                  (product.price * Number(product.discount)) / 100}
                USD
              </p>

              <div className="flex gap-4 mt-5">
                <button
                  onClick={() => this.handleDelete(product.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded "
                >
                  delete
                </button>
                <button
                  onClick={() => this.handleUpdate(product)}
                  className="px-3 py-1 bg-green-400 text-white rounded"
                >
                  update
                </button>
              </div>
              <hr className="mt-4 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
