import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable";

jest.mock("axios");

describe("App", () => {
  it("sucessfully fetched data from API", () => {
    const data = {
      gender: "female",
      name: {
        title: "Miss",
        first: "Dawn",
        last: "Hunt",
      },
      location: {
        street: {
          number: 8681,
          name: "Bollinger Rd",
        },
        city: "Medford",
        state: "Wisconsin",
        country: "United States",
        postcode: 30388,
        coordinates: {
          latitude: "9.8877",
          longitude: "161.4118",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "dawn.hunt@example.com",
      login: {
        uuid: "3735d08f-33e2-4ba8-a51d-8569cafee81c",
        username: "tinyleopard418",
        password: "bambi",
        salt: "o4lTOGhu",
        md5: "11d7fdfa9317a8b9b4c551d755c51e3f",
        sha1: "e884f15004fef1c281ef2c731814f7cf8853c721",
        sha256:
          "0b0b8e2dec766066c32503f7baa231bc162bf5d91ffa3d2fb71b9a788473e97e",
      },
      dob: {
        date: "1966-04-08T07:39:01.135Z",
        age: 54,
      },
      registered: {
        date: "2012-04-09T13:26:56.945Z",
        age: 8,
      },
      phone: "(698)-850-7682",
      cell: "(478)-532-0542",
      id: {
        name: "SSN",
        value: "378-26-0284",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      },
      nat: "US",
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it("fetches erroneously data from an API", () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});
