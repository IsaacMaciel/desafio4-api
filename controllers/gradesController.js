import { db } from "../models/index.js";

const Grade = db.gradesModel;

const index = async (req, res) => {
  try {
    if (req.query.name) {
      const { name } = req.query;
      const data = await Grade.findOne({ name });
      return res.json(data);
    } else {
      const data = await Grade.find({});

      return res.json(data);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Grade.findById(id);

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const store = async (req, res) => {
  try {
    await Grade.create(req.body);

    return res.status(200).json({ message: "Criado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const destroyAll = async (req, res) => {
  try {
    await Grade.deleteMany();

    return res
      .status(200)
      .json({ message: "Todos os registros deletados com sucesso" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const update = async (req, res) => {
  const { name, subject, type, value } = req.body;
  const { id } = req.params;

  try {
    const data = await Grade.findOneAndUpdate(
      { _id: id },
      {
        name,
        subject,
        type,
        value,
      },
      {
        new: true,
      }
    );

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    await Grade.findOneAndRemove({ _id: id });

    return res.status(200).json({ message: "Deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { index, store, destroyAll, update, destroy, show };
