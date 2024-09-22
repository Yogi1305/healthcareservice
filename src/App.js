// App.js
import React, { useState } from "react";
import ServiceList from "../src/component/ServiceList";
import AddService from "../src/component/AddService";
import "./index.css"


function App() {
  const [services, setServices] = useState([]);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Healthcare Services
      </h1>
      <AddService addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
