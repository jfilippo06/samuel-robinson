const { registerService, loginService } = require("../services/auth");

const registerController = async (req, res) => {
  try {
    const { email, nombre, clave } = req.body;
    await registerService(email, nombre, clave);
    res.json({ email, nombre, clave });
  } catch (error) {
    res.json(error.message);
  }
};

const loginController = async (req, res) => {
  try {
    const { nombre, clave } = req.body;
    const user = await loginService(nombre, clave);
    req.login(user, (err) => {
      if (err) throw new AppError("Error al crear la sesion", 403);
      res.redirect("/admin/noticia");
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/auth/login");
  }
};

const logOutController = async (req, res) => {
  req.logout(() => {});
  res.redirect("/");
};

module.exports = {
  registerController,
  loginController,
  logOutController,
};
