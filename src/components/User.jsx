import React, { Component, use } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      data: [],
      editingItem: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { age, data, name, editingItem } = this.state;
    if (Number(age) < 0) {
      return alert("xato");
    }

    if (editingItem) {
      const editedData = data.map((user) =>
        user.id === editingItem.id ? { id: editingItem.id, name, age } : user
      );
      this.setState({ data: editedData, name: "", age: "", editingItem: null });
    } else {
      const user = {
        id: Date.now(),
        name,
        age: Number(age),
      };
      this.setState({ data: [...data, user], name: "", age: "" });
    }
  };

  handleDelete = (id) => {
    this.setState({ data: this.state.data.filter((user) => user.id !== id) });
  };

  handleUpdate = (user) => {
    console.log(user);
    this.setState({ name: user.name, age: user.age, editingItem: user });
  };
  handleCancel = () => {
    this.setState({ editingItem: null });
  };

  render() {
    const { age, name, data, editingItem } = this.state;
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-20">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User</h2>
        <form
          onSubmit={this.handleSubmit}
          action=""
          className="flex flex-col gap-10"
        >
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md "
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
            type="number"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
            {editingItem ? "update" : "submit"}
          </button>
        </form>
        <div className="mt-6 space-y-4">
          {data?.map((user) => (
            <div key={user.id} className="border p-4 rounded-md shadow-lg">
              <h3 className="text-lg font-medium text-gray-700">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.age} years old</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => this.handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded "
                >
                  delete
                </button>
                <button
                  onClick={() => this.handleUpdate(user)}
                  className="px-3 py-1 bg-green-400 text-white rounded  "
                >
                  update
                </button>
              </div>
              <hr className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
