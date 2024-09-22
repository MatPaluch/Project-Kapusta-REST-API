const Joi = require("joi");
const schema = Joi.object({
  email: Joi.string().email().max(64).required(),
  password: Joi.string()
    .min(8)
    .max(64)
    .required()
    .pattern(new RegExp("(?=.*[a-z])"), { name: "lowercase" }) // Co najmniej jedna mała litera
    .pattern(new RegExp("(?=.*[A-Z])"), { name: "uppercase" }) // Co najmniej jedna wielka litera
    .pattern(new RegExp("(?=.*[0-9])"), { name: "number" }) // Co najmniej jedna cyfra
    .pattern(new RegExp("(?=.*[!@#$%^&*])"), { name: "special" }), // Co najmniej jeden znak specjalny
});

const messages = {
  lowercase: "Password must contain at least one lowercase letter",
  uppercase: "Password must contain at least one uppercase letter",
  number: "Password must contain at least one number.",
  special: "Password must contain at least one special character.",
};

module.exports = (body) => {
  const { error } = schema.validate(body);

  if (error) {
    const errorOptions = error.details[0];
    if (errorOptions.type === "string.pattern.name") {
      return messages[errorOptions.context.name];
    }
    return errorOptions.message;
  } else {
    return true;
  }
};
