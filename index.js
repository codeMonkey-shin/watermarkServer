const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const watermarkRoutes = require("./routes/watermark");
const app = express();
const PORT = 4567;

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);


// api 통신을 위한 모듈 설정
app.use(bodyParser.json({ limit : "50mb",extended: true }));
app.use(bodyParser.urlencoded({ limit : "50mb",extended: true }));



//라우터 설정
app.use("/watermark", watermarkRoutes);





app.listen(PORT, async () => {
    console.log(`      🚀 HTTP Server is starting on ${PORT}`);
});