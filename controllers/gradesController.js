import { db } from "../models/index.js";

const Grade = db.gradesModel;

const index = async (req, res) => {
  if (req.query.name) {
    const { name } = req.query;
    const data = await Grade.findOne({ name });
    return res.json(data);
  } else {
    const data = await Grade.find({});

    return res.json(data);
  }
};

const store = async (req, res) => {
  await Grade.create(req.body);

  return res.status(200).json({ message: "Criado com sucesso" });
};

const destroyAll = async (req, res) => {
  await Grade.deleteMany();

  return res
    .status(200)
    .json({ message: "Todos os registros deletados com sucesso" });
};

const update = async (req, res) => {
  const { name, subject, type, value } = req.body;
  const { id } = req.params;

  const data = await Grade.findOneAndUpdate(
    { id },
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

};

const destroy = async (req,res) => {
  const { id } = req.params;

  await Grade.findOneAndRemove({id});

  return res.status(200).json({message: "Deletado com sucesso!"});
  
}

export {
    index,
    store,
    destroyAll,
    update,
    destroy
}
