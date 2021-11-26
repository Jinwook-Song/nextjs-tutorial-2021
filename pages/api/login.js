export default function Login(req, res) {
  if (req.method === "POST") {
    // a_name cookie 생성
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
}
