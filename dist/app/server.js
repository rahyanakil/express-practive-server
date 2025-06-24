import app from "./app.js";
let server;
const port = 5000;
const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log(`Example App listening on port ${port}`);
    });
};
bootstrap();
