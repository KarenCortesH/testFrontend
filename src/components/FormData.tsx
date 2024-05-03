import React, { useState } from "react";

export const FormData = ({ onFormSubmit }) => {
  //Estan los datos del new marker
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //Manejo Latitud
  const handleLatitude = (event) => {
    setLatitude(event.target.value);
  };
  //Manejo Longitud
  const handleLongitude = (event) => {
    setLongitude(event.target.value);
  };

  //Envio data
  const handleSubmit = () => {
    onFormSubmit(latitude, longitude);
  };
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="latitude"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Latitude
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={handleLatitude}
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Longitude
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            value={longitude}
            onChange={handleLongitude}
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
