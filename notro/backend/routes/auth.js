const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Gauravis$agoodBuy';

// Create a user using: POST "/api/auth/createuser". No login required

router.post('/createuser', [
    body('name', 'enter valid name').isLength({ min: 3 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'password must be at least 5 characters.').isLength({ min: 8 }),
],
    async (req, res) => {
        // if errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // check whether the user with this email exits already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: 'a user with this email already exits' });
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })

            const data = {
                user:{
                    id:user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);


            // res.json(user)
            res.json({authToken})
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send('some error occured')
        }
    })

module.exports = router