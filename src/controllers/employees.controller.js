import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from employee");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "ocurrio un error",
    });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("select * from employee where id=?", [id]);
    if (!rows.length) {
      return res.status(404).send({
        error: true,
        message: "no se encontro el empleado con ese codigo",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: true, message: "Ocurrio un error" });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "insert into employee(name, salary) values (?,?)",
      [name, salary]
    );
    res.send({ name, salary, id: rows.insertId });
  } catch (error) {
    res.status(500).json({ error: true, message: "Ocurrio un error" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "update employee set name= ifnull(?,name), salary=ifnull(?,salary) where id=?",
      [name, salary, id]
    );
    if (!result.affectedRows) {
      return res.status(404).json({
        error: true,
        message: "no se encotnro el empleado con ese id",
      });
    }

    const [rows] = await pool.query("select * from employee where id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: true, message: "Ocurrio un error" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("delete from employee where id=?", [id]);
    console.log(result);
    if (!result.affectedRows) {
      return res.status(404).json({
        error: true,
        message: "no se encontro un empleado con ese codigo",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: true, message: "Ocurrio un error" });
  }
};
