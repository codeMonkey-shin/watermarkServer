const sharp = require("sharp")
module.exports = {
    getWatermarkImage: async (req, res) => { //  워터마크 적용할 이미지를 받아서 워터마크가 적용된 이미지 리턴
        try {
            console.log("test");
            const inputImage = req.body.base64
            console.log("inputImage");
            const decoded = Buffer.from(inputImage, 'base64')
            const image = await sharp(decoded);
            const resizedIcon = await sharp('/home/ubuntu/watermarkServer/controllers/icon/aifrica.png')
                .resize({ width: 64,height:64 })
                .toBuffer();
            const watermarked = await image.composite([{
                input: resizedIcon,
                top:420,
                left:420,
            }]);
            console.log(Buffer.from(await watermarked.toBuffer()).toString('base64'))
            res.status(200).json({result : Buffer.from(await watermarked.toBuffer()).toString('base64')});
        } catch (err) {
            console.log(err)
            res.status(400).json({ message: err.message });
        }
    }


}