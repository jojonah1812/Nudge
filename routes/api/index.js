const router = require("express").Router();
const userRoutes = require("../api/user");
const jobRoutes = require("../api/jobs");
const isUserAuthenticated = require("../../middleware/isAuthenticated");

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);

router.get("/secret", isUserAuthenticated, (req, res) => {
  res.send("this is a secret!");
});

module.exports = router;
