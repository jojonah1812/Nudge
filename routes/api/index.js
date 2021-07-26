const router = require("express").Router();
const userRoutes = require("./user");
const jobRoutes = require("./jobs");
const isUserAuthenticated = require("../../middleware/isAuthenticated");

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);

router.get("/secret", isUserAuthenticated, (req, res) => {
  res.send("this is a secret!");
});

module.exports = router;
