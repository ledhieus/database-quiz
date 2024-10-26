const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json"); // Tệp JSON chứa dữ liệu
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;

server.use(middlewares);

// Sử dụng các phương thức đầy đủ
server.use(router);


server.listen(PORT);
