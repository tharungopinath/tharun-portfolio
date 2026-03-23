const express = require("express");
const router = express.Router();
const resumeData = require("../data/resumeData");

// Full resume
router.get("/", (req, res) => {
  res.json(resumeData);
});

// Individual sections
router.get("/contact", (req, res) => res.json(resumeData.contact));
router.get("/skills", (req, res) => res.json(resumeData.skills));
router.get("/education", (req, res) => res.json(resumeData.education));
router.get("/projects", (req, res) => res.json(resumeData.projects));
router.get("/experience", (req, res) => res.json(resumeData.experience));
router.get("/competitions", (req, res) => res.json(resumeData.competitions));
router.get("/certifications", (req, res) =>
  res.json(resumeData.certifications)
);

module.exports = router;
