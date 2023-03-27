import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setformData] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    pushNotifications: "",
    country: "",
  });

  function onChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted Successfully !! Below are the form details : ");
    console.log(formData);
  }

  return (
    <div>
      <h1>Personal Details Form</h1>
      <form
        onSubmit={onSubmitHandler}
        className="form"
        title="Personal Details Form"
      >
        <label htmlFor="fName" className="label">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="Shouvik"
          onChange={onChangeHandler}
          value={formData.fName}
        />

        <label htmlFor="lName" className="label">
          Last Name
        </label>
        <input
          type="text"
          id="lName"
          name="lName"
          placeholder="Mukhopadhyay"
          onChange={onChangeHandler}
          value={formData.lName}
        />

        <label htmlFor="email" className="label">
          Email Id
        </label>
        <input
          type="email"
          id="email"
          placeholder="mukhopadhyay.shouvik24@gmail.com"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
        />

        <label htmlFor="country" className="label">
          Please choose your country
        </label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={onChangeHandler}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="France">France</option>
        </select>

        <label htmlFor="sAdd" className="label">
          Street Address
        </label>
        <input
          type="text"
          id="sAdd"
          placeholder="Vasundhara Enclave"
          name="address"
          value={formData.address}
          onChange={onChangeHandler}
        />

        <label htmlFor="city" className="label">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Delhi"
          name="city"
          value={formData.city}
          onChange={onChangeHandler}
        />

        <label htmlFor="state" className="label">
          State/Province
        </label>
        <input
          type="text"
          id="state"
          placeholder="Delhi"
          name="state"
          value={formData.state}
          onChange={onChangeHandler}
        />

        <label htmlFor="pinCode" className="label">
          Zip/Postal Code
        </label>
        <input
          type="number"
          id="pinCode"
          placeholder="110096"
          name="pinCode"
          value={formData.pinCode}
          onChange={onChangeHandler}
        />

        <label className="label" id="by-email">
          By Email
        </label>
        <div className="checkboxDiv1">
          <input
            type="checkbox"
            name="checkbox1"
            id="checkbox1"
            className="checkbox"
            value={formData.checkbox1}
            onChange={onChangeHandler}
            checked={formData.checkbox1}
          />
          <label htmlFor="checkbox1" className="label">
            Comments
          </label>
        </div>
        <div className="checkboxDiv2">
          <input
            type="checkbox"
            name="checkbox2"
            id="checkbox2"
            className="checkbox"
            value={formData.checkbox2}
            onChange={onChangeHandler}
            checked={formData.checkbox2}
          />
          <label htmlFor="checkbox2" className="label">
            Promotions
          </label>
        </div>

        <div className="checkboxDiv3">
          <input
            type="checkbox"
            name="checkbox3"
            id="checkbox3"
            className="checkbox"
            value={formData.checkbox3}
            onChange={onChangeHandler}
            checked={formData.checkbox3}
          />
          <label htmlFor="checkbox3" className="label">
            Offers
          </label>
        </div>

        <label className="label" id="pushNotifs">
          Push Notifications
        </label>
        <div className="radioDiv1">
          <input
            type="radio"
            id="raido1"
            name="pushNotifications"
            value="Everything"
            onChange={onChangeHandler}
          />
          <label htmlFor="radio1" className="label">
            Everything
          </label>
        </div>

        <div className="radioDiv2">
          <input
            type="radio"
            id="raido2"
            name="pushNotifications"
            value="Only Offers"
            onChange={onChangeHandler}
          />
          <label htmlFor="radio2" className="label">
            Only Offers
          </label>
        </div>

        <div className="radioDiv3">
          <input
            type="radio"
            id="raido3"
            name="pushNotifications"
            value="No Notifications"
            onChange={onChangeHandler}
          />
          <label htmlFor="radio3" className="label">
            No Notifications
          </label>
        </div>

        <button className="save-Btn">Save</button>
      </form>
    </div>
  );
};

export default App;
