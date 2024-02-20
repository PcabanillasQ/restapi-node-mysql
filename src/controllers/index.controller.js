import { pool } from "../db.js";

export const ping = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from employee");
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log({ error });
  }
};
