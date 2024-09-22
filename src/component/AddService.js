// components/AddService.js
import React, { useState } from "react";

const AddService = ({ addService }) => {
  const [newService, setNewService] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addService({ ...newService, id: Date.now() });
    setNewService({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Service Name"
          value={newService.name}
          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Price"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
        Add Service
      </button>
    </form>
  );
};

export default AddService;
