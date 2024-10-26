const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json"); // Tệp JSON chứa dữ liệu
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Sử dụng các phương thức đầy đủ
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("JSON Server is running");
});

module.exports = server