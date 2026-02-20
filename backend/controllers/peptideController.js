const Peptide = require("../models/Peptide");

// Get all peptides
const getPeptides = async (req, res) => {
  try {
    const peptides = await Peptide.find();
    res.json(peptides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new peptide
const addPeptide = async (req, res) => {
  const { name, sequence, description, creator } = req.body;
  try {
    const newPeptide = new Peptide({ name, sequence, description, creator });
    await newPeptide.save();
    res.status(201).json(newPeptide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getPeptides, addPeptide };
