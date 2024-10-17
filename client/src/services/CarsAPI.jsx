//Here, define functions to get, add, update, and delete cars by calling the API

//getAllCars, getCar, createCar

//export the functions
const createCar = async (car) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cars/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create car  ${errorData.error}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error Making a car", error.message);
  }
};
const getAllCars = async () => {
  try {
    const response = await fetch("/api/cars");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
};

const getCarById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/cars/${id}`);
  const data = await response.json();
  return data;
};

const updateCar = async (id) => {
  const response = await fetch(`/api/cars/${id}/update`);
  const data = await response.json();
  return data;
};

const deleteCar = async (id) => {
  const response = await fetch(`/api/cars/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to delete car: ${errorMessage}`);
  }
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    return data;
  } else {
    return {};
  }
};

export default { createCar, getAllCars, getCarById, updateCar, deleteCar };
