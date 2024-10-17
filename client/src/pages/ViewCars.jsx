import React, { useState, useEffect } from "react";
import "../App.css";
import CarsAPI from "../services/CarsAPI.jsx";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const carData = await CarsAPI.getAllCars();
        setCars(carData);
      } catch (error) {
        throw error;
      }
    })();
  }, [refresh]);

  const deleteCar = async (event, id) => {
    console.log("This is delete car, id is" + id);
    try {
      const response = await CarsAPI.deleteCar(id);
      //window.location = "../";
      console.log("Response from API:", response);
      console.log("Car deleted");
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error deleting car", error);
    }
  };

  return (
    <div>
      <h1>Your cars</h1>
      {cars && cars.length > 0 ? (
        cars.map((car, index) => (
          <div key={car.id} className="car_overview_container">
            <h5>{car.name}</h5>
            <a href="./edit/:id">Edit Car</a>
            <br />
            <button onClick={(event) => deleteCar(event, car.id)}>
              Delete car
            </button>
            <div className="attribute_container">
              <div className="car_attribute">
                <p>{car.roof.Name}</p>
                <img src={car.roof.Image} />
              </div>
              <div className="car_attribute">
                <p>{car.exterior.Name}</p>
                <img src={car.exterior.Image} />
              </div>
              <div className="car_attribute">
                <p>{car.wheels.Name}</p>
                <img src={car.wheels.Image} />
              </div>
              <div className="car_attribute">
                <p>{car.accessories.Name}</p>
                <img src={car.accessories.Image} />
              </div>
              <hr />
              <h3>Price: ${car.price}</h3>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <h2>No cars here!</h2>
      )}
    </div>
  );
};

export default ViewCars;
