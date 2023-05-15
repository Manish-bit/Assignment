const NoteModel = require("../model/Notes");

const createNotes = async (req, res) => {
  const newNotes = new NoteModel(req.body);
  try {
    const savedNotes = await newNotes.save();
    res.status(200).json(savedNotes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateNotes = async (req, res) => {
  try {
    const updatedNotes = await NoteModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNotes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteNotes = async (req, res) => {
  try {
    await NoteModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Note deleted sucessfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createNotes, updateNotes, getNotes, deleteNotes };
