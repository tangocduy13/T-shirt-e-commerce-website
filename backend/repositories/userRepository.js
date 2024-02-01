import pool from "../helper/connectToDB.js";
import brypt from "bcrypt";
import bcrypt from "bcrypt";
const registerUser = async ({ phone, password }) => {
  const hashPassword = await brypt.hash(password, 10);
  const [ResultSetHeader] = await pool.execute(
    `insert into user (phone, password) values ('${phone}', '${hashPassword}')`,
  );
  return {
    id: ResultSetHeader.insertId,
    phone: phone,
  };
};

const loginUser = async ({ accountName, password }) => {
  if (accountName.includes("@")) {
    const [row] = await pool.query(
      `select * from user where email = '${accountName}'`,
    );
    const match = bcrypt.compare(password, row[0].password);
    if (match) {
      return {
        id: row[0].id,
        fullName: row[0].fullName,
        role: row[0].role,
      };
    } else {
      return null;
    }
  } else {
    const [row] = await pool.query(
      `select * from user where phone = '${accountName}'`,
    );
    const match = bcrypt.compare(password, row[0].password);
    if (match) {
      return {
        id: row[0].id,
        fullName: row[0].fullName,
        role: row[0].role,
      };
    } else {
      return null;
    }
  }
};

const getUserById = async (id) => {
  const [row] = await pool.query(`select * from user where id = ${id}`);
  return row[0];
};

export { registerUser, loginUser };
