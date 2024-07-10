import  db from "../database/db.js";

export const getAllStudents = (req, res) => {
  const sql = "SELECT * FROM students_info";

  db.query(sql, (error, data) => {
    if (error) return res.json(error);
    res.json(data);
  });
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  const sql = `SELECT * FROM students_info WHERE id = ${id}`;

  db.query(sql, (error, data) => {
    if (error) return res.json(error);

    if (data.length <= 0)
      return res.json({ msg: "Student Not Found!" }).status(404);
    res.json(data).status(200);
  });
};
