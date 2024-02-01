import jwt from "jsonwebtoken";

const checkAuthentication = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Bạn chưa đăng nhập",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    else next();
  });
};

const checkUserIsAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Vui lòng đăng nhập để sử dụng tính năng này",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Lỗi xác thực danh tính" });
    const role = decoded.userInfo.role;
    if (role !== "admin") {
      res.status(403).json({
        message: "Bạn không có quyền truy cập tính năng này",
      });
    } else next();
  });
};

export { checkAuthentication, checkUserIsAdmin };
