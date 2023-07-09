const { people } = require("../data");

const getPeople = (req, res) => {
  res.json(people);
};

const addPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({ success: true, name: name });
  }
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) {
    res.status(404).json({ message: "Person not found" });
  }
  res.json(person);
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const personIndex = people.findIndex((p) => p.id === parseInt(id));
  if (personIndex === -1) {
    return res.status(404).json({ message: "Person not found" });
  }

  if (name) {
    people[personIndex].name = name;
    return res.json({ success: true, data: people[personIndex] });
  }

  return res.status(400).json({ success: false, message: "Name required" });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const newPeople = people.filter((p) => p.id !== parseInt(id));

  if (newPeople.length === people.length) {
    return res.status(404).json({ message: "Person not found" });
  }

  //people = newPeople;
  return res.json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
