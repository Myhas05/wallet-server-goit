const router = require("express").Router();

const {
  getAllCosts,
  findById,
  postCosts,
  updatePrice,
  deleteCostById
} = require("../controllers/costsController");

// POST request for creating new Cost item.
router.post("/", postCosts);

// GET request for list of all Cost items.
router.get("/", getAllCosts);

// GET request for one Cost item.
router.get("/:id", findById);

// PATCH request for updating Price field at one Cost item.
router.patch("/:id", updatePrice);

// DELETE request for deleting one Cost item.
router.delete("/:id", deleteCostById);

module.exports = router;
