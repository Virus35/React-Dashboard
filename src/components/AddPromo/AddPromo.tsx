// src/components/AddPromo.tsx
import React, { useState, useEffect } from "react";
import "./AddPromo.scss";

const AddPromo: React.FC = () => {
  const [promoName, setPromoName] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("promoData");
    if (storedData) {
      const { promoName, promoCode, discount, startDate, endDate } =
        JSON.parse(storedData);
      setPromoName(promoName);
      setPromoCode(promoCode);
      setDiscount(discount);
      setStartDate(startDate);
      setEndDate(endDate);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const promoData = { promoName, promoCode, discount, startDate, endDate };
    localStorage.setItem("promoData", JSON.stringify(promoData));
    alert("Promo data saved successfully!");
  };

  return (
    <div className="add-promo">
      <h2>Add Promo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Promo Name:</label>
          <input
            type="text"
            value={promoName}
            onChange={(e) => setPromoName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Promo Code:</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Discount (%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Promo</button>
      </form>
    </div>
  );
};

export default AddPromo;
