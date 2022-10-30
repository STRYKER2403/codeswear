import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {

        let user = await User.findOne({ email: req.body.email })

        var bytes = CryptoJS.AES.decrypt(user.password, 'secret key');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedData) {
                res.status(200).json({ success: true, email: user.email, name: user.name })
            }
            else {
                res.status(400).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(400).json({ success: false, error: "No User Found" })
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler)
