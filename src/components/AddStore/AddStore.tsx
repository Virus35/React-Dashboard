import React, { useState, useEffect } from "react";
import "./AddStore.scss";

type OperatingHours = {
  [key: string]: { open: string; close: string };
};

const initialOperatingHours: OperatingHours = {
  monday: { open: "", close: "" },
  tuesday: { open: "", close: "" },
  wednesday: { open: "", close: "" },
  thursday: { open: "", close: "" },
  friday: { open: "", close: "" },
  saturday: { open: "", close: "" },
  sunday: { open: "", close: "" },
};

const AddStore: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [managerName, setManagerName] = useState("");
  const [operatingHours, setOperatingHours] = useState<OperatingHours>(
    initialOperatingHours
  );
  const [storeType, setStoreType] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("storeData");
    if (storedData) {
      const {
        storeName,
        storeAddress,
        phoneNumber,
        email,
        managerName,
        operatingHours,
        storeType,
        additionalNotes,
      } = JSON.parse(storedData);
      setStoreName(storeName);
      setStoreAddress(storeAddress);
      setPhoneNumber(phoneNumber);
      setEmail(email);
      setManagerName(managerName);
      setOperatingHours(operatingHours);
      setStoreType(storeType);
      setAdditionalNotes(additionalNotes);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storeData = {
      storeName,
      storeAddress,
      phoneNumber,
      email,
      managerName,
      operatingHours,
      storeType,
      additionalNotes,
    };
    localStorage.setItem("storeData", JSON.stringify(storeData));
    alert("Store data saved successfully!");
  };

  return (
    <div className="add-store">
      <h2>Add Store</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Store Name:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Store Address:</label>
          <textarea
            value={storeAddress}
            onChange={(e) => setStoreAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Manager Name:</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Operating Hours:</label>
          {Object.keys(operatingHours).map((day) => (
            <div key={day} className="operating-hours">
              <label>{day.charAt(0).toUpperCase() + day.slice(1)}:</label>
              <input
                type="time"
                value={operatingHours[day].open}
                onChange={(e) =>
                  setOperatingHours({
                    ...operatingHours,
                    [day]: { ...operatingHours[day], open: e.target.value },
                  })
                }
                required
              />
              <input
                type="time"
                value={operatingHours[day].close}
                onChange={(e) =>
                  setOperatingHours({
                    ...operatingHours,
                    [day]: { ...operatingHours[day], close: e.target.value },
                  })
                }
                required
              />
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Store Type:</label>
          <select
            value={storeType}
            onChange={(e) => setStoreType(e.target.value)}
            required
          >
            <option value="">Select Store Type</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Cafe</option>
            <option value="retail">Retail</option>
          </select>
        </div>
        <div className="form-group">
          <label>Additional Notes:</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
        <button type="submit">Add Store</button>
      </form>
    </div>
  );
};

export default AddStore;
