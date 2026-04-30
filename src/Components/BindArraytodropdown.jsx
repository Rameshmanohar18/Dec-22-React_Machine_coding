import React, { useState } from "react";

const BindArraytodropdown = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Peach",
    "Cherry",
    "Kiwi",
    "Papaya",
    "Lemon",
    "Coconut",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Apricot",
    "Fig",
    "Pomegranate",
    "Guava",
    "Dragonfruit",
    "Cranberry",
    "Tangerine",
    "Clementine",
    "Date",
    "Elderberry",
    "Jackfruit",
    "Lychee",
    "Nectarine",
    "Persimmon",
    "Quince",
    "Starfruit",
    "Ugli fruit",
    "Yuzu",
    "Currant",
    "Mulberry",
    "Salak",
    "Soursop",
    "Tamarind",
    "Breadfruit",
    "Longan",
    "Rambutan",
    "Jujube",
    "Medlar",
    "Miracle fruit",
    "Cloudberry",
    "Huckleberry",
    "Marionberry",
    "Boysenberry",
    "Loganberry",
    "Barberry",
    "Serviceberry",
    "Chokeberry",
    "Sea buckthorn",
    "Bilberry",
  ];

  // Array of objects
  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Australia" },
    { id: 5, name: "Germany" },
    { id: 6, name: "France" },
    { id: 7, name: "Japan" },
    { id: 8, name: "China" },
    { id: 9, name: "Brazil" },
    { id: 10, name: "South Africa" },
    { id: 11, name: "Russia" },
    { id: 12, name: "Italy" },
    { id: 13, name: "Spain" },
    { id: 14, name: "Mexico" },
    { id: 15, name: "Indonesia" },
    { id: 16, name: "Netherlands" },
    { id: 17, name: "Switzerland" },
    { id: 18, name: "Sweden" },
    { id: 19, name: "Norway" },
    { id: 20, name: "Denmark" },
  ];

  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    // <div>BindArraytodropdown</div>
    <div>
      {/* Simple array */}
      <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        <option value="">Select Fruit</option>
        {fruits.map((fruit, idx) => (
          <option key={idx} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <p>Selected Fruit: {selectedFruit}</p>

      {/* Array of objects */}
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <p>Selected Country ID: {selectedCountry}</p>
    </div>
  );
};

export default BindArraytodropdown;
