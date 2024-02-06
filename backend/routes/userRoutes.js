import express from "express";
const router = express.Router();
import { checkUserIsAdmin } from "../middleware/verifyJWT.js";

router.use(checkUserIsAdmin);
router.post("/", (req, res) => {
  return res.status(200).json("ok xác thực danh tính thành công");
});
export default router;
