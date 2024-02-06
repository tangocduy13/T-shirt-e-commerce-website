import { getProductsList } from "../repositories/productRepository.js";

const getProducts = async (req, res) => {
  const { page, limit } = req.query;
  const { row, totalPage } = await getProductsList({ page, limit });
  res.status(200).json({ products: row, pageNum: totalPage });
};

export { getProducts };
