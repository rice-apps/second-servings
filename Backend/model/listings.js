const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const debug = require("debug")("app:user");

const listingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    quantity: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1024,
    },
});

listingsSchema.methods.generateAuthToken = function () {
    debug(this);
    const token = jwt.sign(
        {
            _id: this._id,
            name: this.name,
            description: this.description,
            quantity: this.quantity,
        },
        config.get("jwtKey")
    );
    return token;
};

const listings = mongoose.model("listings", listingsSchema);

exports.listings = listings;
