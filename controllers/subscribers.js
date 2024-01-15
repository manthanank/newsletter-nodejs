const Subscribers = require('../models/subscribers.js');
const { sendNewsletter } = require('../utils/newsletter.js');

exports.createSubscribers = async (req, res, next) => {
    // console.log(req.body);
    const email = req.body.email;

    try {
        // Check if the email already exists in the database
        const existingSubscriber = await Subscribers.findOne({ email });

        if (existingSubscriber) {
            // Email already exists, send a message
            return res.send('Email already subscribed. Check your email for the welcome newsletter.');
        }

        // Email doesn't exist, save to the database
        const newSubscriber = new Subscribers({ email });
        const savedSubscriber = await newSubscriber.save();
        // console.log('Subscription saved to the database:', savedSubscriber);

        // For simplicity, let's just print it to the console
        console.log(`New subscription: ${email}`);

        // Send a welcome newsletter
        const welcomeSubject = 'Welcome to Our Newsletter!';
        const welcomeContent = '<p>Thank you for subscribing to our newsletter!</p>';
        sendNewsletter(email, welcomeSubject, welcomeContent);

        res.send('Subscription successful! Check your email for a welcome newsletter.');
    } catch (error) {
        // Handle database or other errors
        console.error('Error creating subscription:', error);
        next(error);
    }
};
