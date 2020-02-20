const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as s", "s.id", "st.scheme_id")
    .select("s.scheme_name", "st.step_number", "st.instructions")
    .where("scheme_id", id);
}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
