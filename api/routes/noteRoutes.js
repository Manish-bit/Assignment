const {
  createNotes,
  updateNotes,
  getNotes,
  deleteNotes,
} = require("../controllers/noteController");

const router = require("express").Router();

router.post("/", createNotes);
router.get("/", getNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

module.exports = router;
