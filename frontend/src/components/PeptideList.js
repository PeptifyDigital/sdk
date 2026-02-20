import React, { useEffect, useState } from "react";
import { fetchPeptides } from "../api/peptideApi";
import PeptideCard from "./PeptideCard";

const PeptideList = () => {
  const [peptides, setPeptides] = useState([]);

  useEffect(() => {
    fetchPeptides().then(res => setPeptides(res.data));
  }, []);

  return (
    <div>
      <h2>Peptide Library</h2>
      {peptides.map(p => <PeptideCard key={p._id} peptide={p} />)}
    </div>
  );
};

export default PeptideList;
