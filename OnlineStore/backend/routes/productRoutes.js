const express = require("express");
const router = express.Router();
const {
	getAllProducts,
	getProductById,
} = require("../controller/productContoller");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

module.exports = router;
