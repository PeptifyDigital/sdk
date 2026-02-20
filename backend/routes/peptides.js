const express = require("express");
const router = express.Router();
const { getPeptides, addPeptide } = require("../controllers/peptideController");

router.get("/", getPeptides);
router.post("/", addPeptide);

module.exports = router;
