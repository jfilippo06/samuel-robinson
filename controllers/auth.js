const { registerService } = require("../services/auth");

const registerController = async (req, res) => {
  try {
    const { email, nombre, clave } = req.body;
    await registerService(email, nombre, clave);
    res.json({ email, nombre, clave });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  registerController,
};
