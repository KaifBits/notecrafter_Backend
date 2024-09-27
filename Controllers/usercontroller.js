const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getDb } = require('../database.js');

// Function to add a new user
addUser = async (req, res) => {
    const { username, emailid, password,recipie,movies ,plans,books} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    try {
        const newUser = {
            username,
            emailid, 
            recipie,
            movies,
            password: hashedPassword,
            plans:plans,
            books:books
        };

        const result = await getDb().collection("user").insertOne(newUser);
        res.status(201).json({ message: "User created successfully", userId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User creation failed" });
    }
};

// Function for user authentication
loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await getDb().collection("user").findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate a token
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Login failed" });
    }
};
module.exports={addUser,loginUser};