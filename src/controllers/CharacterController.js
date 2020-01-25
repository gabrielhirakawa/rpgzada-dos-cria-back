const Character = require("../models/Character");

module.exports = {
  async store(req, res) {
    const { name, life, kind, race, attrs } = req.body;

    const character = await Character.create({
      name,
      life,
      kind,
      race,
      attrs
    });

    res.json(character);
  },

  async index(req, res) {
    const characters = await Character.find();

    res.json(characters);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, life, kind, race, attrs } = req.body;

    let character = await Character.findById({ _id: id });

    if (!character) {
      return res.status(400).json({ error: "Character does not exists" });
    }

    character = await Character.updateOne({
      name,
      life,
      kind,
      race,
      attrs
    });

    res.json(character);
  },

  async delete(req, res) {
    const { id } = req.params;

    let character = await Character.findById({ _id: id });

    if (!character) {
      return res.status(400).json({ error: "Character does not exists" });
    }

    character = await Character.deleteOne({ _id: id });
    res.json({ deleted: "ok" });
  }
};
