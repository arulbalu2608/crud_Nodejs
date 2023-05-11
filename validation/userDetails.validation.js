const Joi = require("joi");

const userJoiSchema = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  email: Joi.string().email().min(5).max(50).required(),
});

module.exports = userJoiSchema;
