const { getEstudianteService } = require("../services/estudiante");

const getEstudianteController = async (req, res) => {
  try {
    const data = await getEstudianteService();
    res.json(data)
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getEstudianteController,
};
