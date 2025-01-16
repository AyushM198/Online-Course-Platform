//Alternate Total complete code

const express = require('express');

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
const authRoutes = require('./Routes/AuthRouter')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
require('dotenv').config()
require('./models/db')
const PORT = process.env.PORT || 4000


const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
})
const userModel = mongoose.model('user', userSchema);

const courseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    image: String,
    duration: String,
    price: String,
    instructor: String,
    students: String,
    rating: String,
    level: String,

});

const Course = mongoose.model("Course", courseSchema);

const userProfile = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: String,
    image: String, // Base64-encoded image
    bio: String,
});

const User = mongoose.model('Profile', userProfile);


app.use(cors())
app.use(bodyParser.json({ limit: '10mb' })); // Increase limit to 10MB
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // For URL-encoded data
const authToken = (req, res, next) => {
    const token = req.headers['authorization']?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: "Token Not Found" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded);
        console.log(token);
        next();
    }
    catch (err) {
        return res.status(403)
            .json({ message: "Unauthorized, JWT token is required" });
    }
}
// app.use(authToken)
app.get('/', authToken, async (req, res) => {
    const user = await userModel.find()
    res.json(user)
    // res.send('Hello World!')
})

app.get('/ping', (req, res) => {
    res.send('PONG')
})
app.use(bodyParser.json())
// app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

// app.get('/',async (req, res) => {
//     const users = await Course.find();
//     res.json(users);
// })
app.use(express.json());


app.post('/register', async (req, res) => {
    try {


        const { name, email, password } = req.body
        const saltRounts = 10;
        const salt = await bcrypt.hash(password, saltRounts);
        console.log(salt);
        const newUser = new userModel({
            name,
            email,
            password: salt
        })
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' })

    } catch {
        res.status(500).json({ message: 'Internal server error' })
    }
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });



    if (user) {
        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
            res.status(200).json({ message: 'Login successful', token });
        }
        else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
})



// POST API to add a course
app.post("/api/courses", async (req, res) => {
    try {
        const {
            id,
            name,
            category,
            image,
            duration,
            price,
            instructor,
            students,
            rating,
            level,

        } = req.body;

        // Validation
        if (!id || !name || !image || !duration || !price || !instructor) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Create a new course
        const newCourse = new Course({
            id,
            name,
            category,
            image,
            duration,
            price,
            instructor,
            students,
            rating,
            level,

        });

        // Save to database
        const savedCourse = await newCourse.save();

        // Response
        res.status(201).json({ message: "Course added successfully", data: savedCourse });
    } catch (error) {
        console.error("Error adding course:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.get('/api/courses', async (req, res) => {
    try {
        const { type } = req.query;

        // Fetch courses based on type filter if provided
        const query = type ? { name: new RegExp(type, 'i') } : {};
        const courses = await Course.find(query);

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error: error.message });
    }
});


// app.get("/profile/:email", async (req, res) => {
//     const email = req.params.email;
//     try {
//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json({ message: "Internal server error", error: err });
//     }
// });


//CreateProfile

app.post('/api/profile', async (req, res) => {
    const { name, email, bio,location, image } = req.body; // Expect image in Base64 format
    try {
        let user = await User.findOne({ email });
        if (user) {
            // Update existing profile
            user.name = name;
            user.bio = bio;
            user.location = location;
            user.image = image;
        } else {
            // Create new profile
            user = new User({ name, email, bio, image });
        }
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/profile/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
app.put('/api/profile/:email', async (req, res) => {
    const { email, name, bio, location, image } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { name, bio, location, image } },
            { new: true } // Returns the updated document
        );
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


app.get("/products/get", (req, res) => {
    Products.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})


