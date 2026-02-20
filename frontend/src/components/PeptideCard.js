import React from "react";

const PeptideCard = ({ peptide }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <h3>{peptide.name}</h3>
    <p><strong>Sequence:</strong> {peptide.sequence}</p>
    <p>{peptide.description}</p>
    <small>Created by: {peptide.creator}</small>
  </div>
);

export default PeptideCard;
