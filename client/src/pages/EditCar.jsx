import React, { useState } from "react";
import CarsAPI from "../services/CarsAPI.jsx";
import "../App.css";

const EditCar = (id) => {
  //Will represent which options is currently selected
  const [option, setOption] = useState("roof");
  //Array that will store the selections that the user makes.
  const [selections, setSelections] = useState([]);
  //const [carName, setCarName] = useState("My new Car!");
  const [car, setCar] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const carData = await CarsAPI.getCarById(id);
        setCar(carData);

        const initialSelctions = [];

        initalSelections.push({ category: "roof", ...carData.roof });
        initalSelections.push({ category: "exterior", ...carData.exterior });
        initalSelections.push({ category: "wheels", ...carData.wheels });
        initalSelections.push({
          category: "accessories",
          ...carData.accessories,
        });
        initialSelctions.push({ category: "name", ...carData.name });
        initialSelctions.push({category: "price", ...carData.price})

        setSelections(initialSelections);
      } catch (error) {
        throw error;
      }
    })();
  }, [id]);

  const roofOptions = [
    {
      Name: "Regular",
      Price: 0,
      Image:
        "https://images.pond5.com/car-roof-window-close-glacier-footage-159894509_iconl.jpeg",
    },
    {
      Name: "Convertible",
      Price: 2000,
      Image:
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/7a0a3c6148108c9c64425dd85e0181fa3cccb652/photos/9eze6yn8-tgrUpGxmKG-(edit).jpg?t=166357208777",
    },
  ];

  const exteriorOptions = [
    {
      Name: "Shiny Black",
      Price: 5000,
      Image:
        "https://media.istockphoto.com/id/1308375221/photo/black-metal-steel-plate-and-metallic-texture-on-dark-background-with-shiny-pattern-stainless.jpg?s=612x612&w=0&k=20&c=lkNvABYU_K5MOm0quw26ayF9cWHMkpnWuBYjDbBR0Go=",
    },
    {
      Name: "Off White",
      Price: 7000,
      Image:
        "https://glecopaint.com/cdn/shop/products/oc-38-acadiawhite_2000x_60c9c68a-4235-4970-871a-bb92d0bb25f8_600x.png?v=1617309776",
    },
    {
      Name: "Silver",
      Price: 4000,
      Image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALEAuwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADBAIAAQb/xAAcEAEAAwEBAQEBAAAAAAAAAAAAAgMxAUGBIRH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+/qW0oqd+LqQW1KoYlqVQwG/GOteMyANiWxVZiawElgJHs3qeegLuveM9exAsFEMTw4ohgHrPEFaiAFgaIo4WINeDkXwcgDINh5AsBLNP3VE9T90A1YtpRVYtpBdUqhiWpVDAb4xJvjEgDZiaaiaewEtqeaixNPQFJ0XsnnALBRBPWeOAorUQTwPEDxwsQwNEG+4LpfBd0ByBYeQLATWJu6osB3QBVi2lFVi2oF1OKY4mpVQwG+YxJvjEgBNNYpmmsBLYnmosTzAcnnNeyeR34BYKIJ4KIAetRBPWogBoliKOFiDXg5E8HIBSDYaXA2AlsB09qbugOlZWiqW0gtpxXDEtOKog34x1tiWACaexRNNYCWzep5aps9TS0B9eO7r0CRUQBA9YKIYeAIHgBoF4KBeA14PpPB9AcgWHkCwEtqbuqbAd0AUrakVK2oF1OKopacUxwCcYm3zGJgGeJbVU8S2AlmnlqiwEwF13OvJO4BonrBA8AUQPBPA8APHCxFAsNBrwfS9wXQHMFmHkCYJbAd09ifugGr1bUiq9W1AupVQxJTiuGA3xiZBzAM8S2Kp4msBJaCZ7ATAPXvHddwCQUQxPBRDAPWeIKzwA8C8DA0Qa8HIng5gKQbDyBMEs/U0t6psTd0BVYtqRVYtpBbTiuOJK8VQwCcYk3xiQAmmsUzTWglsBJRYmloC7r3jyTogWCiCeCiAHgesFaiAGjheYKJYg14Ppe4LoDmCzDzBZgJbU3dU2A6AKs4tpRUrqQW1KYYmqVQ5+A3xiRByAE01imaawE1nqaWqLASAMnRd3XoEgogniogB61EAQPADRLEUcLEG/Byb8H0ByBYbobAS2A7qixN3QDTvxdShpXUgtpVxxJUqhgEHJvjEgBYmmpmmtBNanme3E8gF17zryTogWCiCeGqKwUQPAEDwA0cLEUC8BrwfSeD6A5AsPIFgJrE3dU2Ju6AqVtKGrFtILqlUMS04qhgE/v4OTfGJAGxLYpmmsBLanmosTzAfXcd13AJBRWngohgKIGgCtRADQNEMSxBocieD6ApBsNINmAlsB3T2A7oAqxbSiqxbSC6nFUMS04qhgN8YkQcgBNNYpmmtBLYnmotxPMBSdx3XcA0DwBA8APBRDE9aiAGiWIoGiD3wfS9wXQFIMzdDYCWwHdPYDugCrFtTnAuqziqGOcDfjEsc4ATTWucCazE0tc4BSdxzgLFRB64DwPBzgNA0Xjgb7guvXAKQLHjgTWA7rnA//9k=",
    },
    {
      Name: "Red",
      Price: 6000,
      Image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUXFxgYFxcXFxcXFxoYFxUXHRcXGBgdHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJRABAQEAAQEIAgMAAAAAAAAAAAERAvAhQVFhcYGRoTGxEsHR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBQP/xAAaEQEBAQADAQAAAAAAAAAAAAAAEQECIUFR/9oADAMBAAIRAxEAPwDkYtHi6piYuJABQSMxSUBJBYcghIqAAvIlFKYcjQShTRNW0xIUUwLVES/hLFoAKQVmzvVZUoiphSihVwBFIRBexD2/YKrOKQRUoYCdf6SKigAIaENAwwWeAoVJFA00AKAglpi1FFgYAkDQFlZq6UQ0gAUlVBSRUWgaakUCouogRUMUUKiAaUVF1FsQDA1YKIqRAww0iiljKgomkgLUFlBKqABxLSUQAAMLAAMIAC0EppTBTL5/IdniBDAhghqphRRFBCpBaAIoErTIi0oCoYBRQACwVARdQEXQhgKJqioFUEFxADSEEIUoKZ6/ISARcRUQ1alEVFENBYEMAgacgImnIgCwARcCwUoEAwkCAGiCKaYCrEIoISAAUtNApAoAEgFCQBUpACFhgCs4KIUCgRLCKCYsSLaAaYgLKJFoIogLIUwFMMEsEKRZADFTAUWpUBpnVQRqIFFEtWoIYqW0EUVBpYypgIBogupQFKAFLQFRcDBAhSQVU01Aq2AAaAIVF1cFKypKAIogEAKGIKsWVmAlS+lVnleuwErcosTRpbEVAKBAEXAQgqaKEixARaAFDAQIqChhaaIEKYBgVNFFMBAoABUBqpguCs4NIIS9aGAdqFMFIaUlAtRQEFICYsEAqhgFgn6XAQ1VwETVpgJFiLxoYWIoCGKggKgGCposVKumAQRoGcJSHEEz0E5dfhRmt0TfIwaM/KpS9eILYh7GgtSRNIFWhgAqX6MAkXkmL+QSwVKBaacVBBFgJReMIIUJDO4Eiou9oYaSCYAXCEgBJ4KddwIpaAe6JfT9KDU/aRUtFDU5cgQjUqGgi0LQON681lQBcIWpBRcZzvWiGKF84NFE4qIqYAMxd8FSAtomAKmhvaIcVqQwXxNXPZagh9ouoC2eK9vgysBZb3SDPv8AdAutcuvhjlVBORxsJcAL0nJePX9gHpT+WAG9G9hgCrvXXqTrr5QAvXws+wDDVQFxeM1EA8Xr7JQET3UAKeiAHIoCaaaAeU1cQFOJgCFMAX6Tl5z7AIzvPcf/2Q==",
    },
  ];

  const wheelOptions = [
    {
      Name: "Standard",
      Price: 1000,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29x7TcMYY9QIn5egAAHLQ4VHenalWaXNAz1-9Oydeu5AD2FxRJIxeBAHiupKOUpUP6o8&usqp=CAU",
    },
    {
      Name: "Sport",
      Price: 3000,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2JJaXvPWO_CYZnV0HLg0s34HY7fKBZaynw&s",
    },
    {
      Name: "Alloy",
      Price: 2500,
      Image:
        "https://carwow-uk-wp-3.imgix.net/alloy-wheels-bmw-m5-m-performance.png",
    },
  ];

  const accessoryOptions = [
    {
      Name: "Pink Dice",
      Price: 50,
      Image: "https://i.ebayimg.com/images/g/wHkAAOSw3ZtipE3q/s-l400.jpg",
    },
    {
      Name: "Pink Leather Steering Wheel Cover",
      Price: 45,
      Image: "https://i.ebayimg.com/images/g/PVYAAOSwIw5kZlKs/s-l400.jpg",
    },
    {
      Name: "Seat Cover",
      Price: 150,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJWqSXloyUcVmosFqjhaab1eb9Z97pE_m9g&s",
    },
    {
      Name: "Black Velvet Luxury Floor Mats",
      Price: 100,
      Image:
        "https://www.manicci.com/wp-content/uploads/2021/09/Manicci-Luxury-Leather-Diamond-Car-Floor-Mats-3.jpg",
    },
    {
      Name: "Sanrio Car Wrap",
      Price: 800,
      Image:
        "https://yeswrap.com/cdn/shop/files/HelloKittypinkCarWrap.png?v=1726756069",
    },
  ];

  const getOptions = () => {
    switch (option) {
      case "roof":
        return roofOptions;
      case "exterior":
        return exteriorOptions;
      case "wheels":
        return wheelOptions;
      case "accessories":
        return accessoryOptions;
      default:
        return [];
    }
  };

  const handleSelectOption = (selectedOption) => {
    const updatedSelections = selections.filter(
      (item) => item.category !== option
    );
    setSelections([
      ...updatedSelections,
      { category: option, ...selectedOption },
    ]);
  };

  const getTotalCost = () => {
    return selections.reduce((total, item) => total + item.Price, 0);
  };

  const submitCarEdits = async (event) => {
    //event.preventDefault();

    alert("In submit car");
    if (selections.length < 4) {
      alert("At least 1 selection field is empty, cannot create car :(");
    } else {
      //Here I add the code to push to the database
      alert("Gonna push to database");
      let newCar = {
        name: carName,
        roof: selections[0],
        exterior: selections[1],
        wheels: selections[2],
        accessories: selections[3],
        price: getTotalCost(),
      };
      console.log(`Car is ${JSON.stringify(car, null, 2)}`);
      try {
        await CarsAPI.editCat(car.id);
        window.location = "../";
      } catch (error) {
        console.error("Error pushing to database", error);
      }
    }
  };

  return (
    <div className="createCar">
      <h1>Edit your car</h1>
      <div className="category-buttons">
        <button onClick={() => setOption("roof")}>Roof</button>
        <button onClick={() => setOption("exterior")}>Exterior</button>
        <button onClick={() => setOption("wheels")}>Wheels</button>
        <button onClick={() => setOption("accessories")}>Accessories</button>
      </div>

      <div className="options-display">
        {getOptions().map((opt, index) => (
          <div
            key={index}
            className="option-card"
            onClick={() => handleSelectOption(opt)}
          >
            <img src={opt.Image} alt={opt.Name} className="option-pic" />
            <h3>{opt.Name}</h3>
            <p>${opt.Price}</p>
          </div>
        ))}
      </div>

      <h3>Finally, name your awesome car!</h3>
      <input type="text" onChange={(e) => setCarName(e.target.value)} />

      <div className="selectedOptions">
        <h2>Your custom car, {carName}</h2>
        <ul>
          {selections.map((sel, index) => (
            <li key={index}>
              {sel.category}: {sel.Name} (${sel.Price})
              <img className="option-pic" src={sel.Image} alt={sel.Name} />
            </li>
          ))}
        </ul>
        <h3>Total Cost: ${getTotalCost()}</h3>
      </div>

      <button onClick={() => createCar()}>Create!</button>
    </div>
  );
};

export default EditCar;
