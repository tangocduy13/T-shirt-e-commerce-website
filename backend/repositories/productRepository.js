import pool from "../helper/connectToDB.js";

const getProductsList = async ({ page, limit }) => {
  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 8;
  const [row] = await pool.query(
    `select * from product limit ${limitNum} offset ${(pageNum - 1) * limitNum}`,
  );
  const productNum = await countAllProduct();
  const totalPage = Math.ceil(productNum / limitNum);
  return { row, totalPage };
};

const countAllProduct = async () => {
  try {
    const [row] = await pool.query(`SELECT COUNT(*) FROM product`);
    return row[0]["COUNT(*)"];
  } catch (e) {
    console.log(e);
  }
};

export { getProductsList };
