const router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    var work = "work";
    const newUser = new User({
        userName: req.body.userName,
        Email: req.body.Email,
        Password: CryptoJS.AES.encrypt(req.body.Password, process.env.PASS_SEC).toString(),
        acountType: req.body.acountType === work ? "Work" : "hire"
    });
    try {
        const saveUser = await newUser.save()
        res.send(saveUser);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/one/email', async (req, res, next) => {
    const emailregister = await User.findOne({ Email: req.body.Email });
    emailregister && res.status(401).json("Email is already exist pleaze login");
    next()
})
router.post('/one/user', async (req, res, next) => {

    const UserExist = await User.findOne({ userName: req.body.userName });
    UserExist && res.status(401).json("user name is already exist");
    next()

})
router.post('/login', async (req, res) => {
    try {
        const userLogin = await User.findOne({ Email: req.body.Email });
        !userLogin && res.status(401).json("Wrong Email  pleaze register");

        const hashedPassword = CryptoJS.AES.decrypt(userLogin.Password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.Password && res.status(401).json("Wrong Password");
        const accesToken = jwt.sign({
            id: userLogin._id,
            typeUser: userLogin.typeUser
        }, process.env.JWT_SEC, { expiresIn: "3d" });
        const { Password, ...others } = userLogin._doc
        res.status(200).json({ ...others, accesToken })
    } catch (error) {
        res.status(500).json(error);

    }
})

module.exports = router;