const Bootcamp = require("../models/Bootcamp");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
	let query;
	const reqQuery = { ...req.query };
	const removeFields = ["sort"];
	removeFields.forEach((val) => delete reqQuery[val]);
	let queryString = JSON.stringify(reqQuery);
	queryString = queryString.replace(
		/\b(gt|gte|lt|lte)\b/g,
		(match) => `$${match}`
	);

	query = Bootcamp.find(JSON.parse(queryString));

	if (req.query.sort) {
		const sortByArr = req.query.sort.split(",");
		const sortByStr = sortByArr.join(" ");
		query = query.sort(sortByStr);
	} else {
		query.sort("-price");
	}

	const bootcamps = await query;

	res.status(200).json({
		success: true,
		data: bootcamps,
	});
});

exports.createNewBootcamp = asyncHandler(async (req, res, next) => {
	const bootcamp = await Bootcamp.create(req.body);
	res.status(200).json({
		success: true,
		data: bootcamp,
	});
});

exports.updateBootcampById = asyncHandler(async (req, res, next) => {
	let bootcamp = await Bootcamp.findById(req.params.id);

	if (!bootcamp) {
		return next(
			new ErrorResponse(`Bootcamp ${req.params.id} not found`, "404")
		);
	}

	bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		success: true,
		data: bootcamp,
	});
});

exports.deleteBootcampById = asyncHandler(async (req, res, next) => {
	let bootcamp = await Bootcamp.findById(req.params.id);

	if (!bootcamp) {
		return next(
			new ErrorResponse(`Bootcamp ${req.params.id} not found`, "404")
		);
	}

	await bootcamp.remove();
	res.status(200).json({
		success: true,
		data: bootcamp,
	});
});
