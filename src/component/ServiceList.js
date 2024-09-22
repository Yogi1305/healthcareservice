// components/ServiceList.js
import React, { useState } from "react";

const ServiceList = ({ services = [], updateService, deleteService }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", description: "", price: "" });

  const handleEdit = (service) => {
    setEditId(service.id);
    setEditData(service);
  };

  const handleUpdate = () => {
    updateService({ ...editData });
    setEditId(null);
  };

  return (
    <div className="container mx-auto">
      {services.length > 0 ? (
        services.map((service) => (
          <div key={service.id} className="bg-white shadow-md p-6 mb-4 rounded-lg">
            {editId === service.id ? (
              <>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="border border-gray-300 p-2 mb-2 w-full rounded-lg"
                />
                <input
                  type="text"
                  value={editData.description}
                  onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  className="border border-gray-300 p-2 mb-2 w-full rounded-lg"
                />
                <input
                  type="number"
                  value={editData.price}
                  onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                  className="border border-gray-300 p-2 mb-2 w-full rounded-lg"
                />
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-gray-700 font-semibold mb-4">${service.price}</p>
                <button
                  onClick={() => handleEdit(service)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(service.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No services available</p>
      )}
    </div>
  );
};

export default ServiceList;
