// const FormData = require('../models/formdataModel');

// const formController = {};

// formController.submitForm = async (req, res) => {
//     try {
//         const { name, email, optionalField } = req.body;
//         const formData = new FormData({
//             name,
//             email,
//             optionalField
//         });
//         const savedData = await formData.save();
//         res.json(savedData);
//     } catch (error) {
//         console.error('Error submitting form data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// module.exports = formController;


const FootballPlayer = require('../models/formdataModel');

const formController = {};

formController.submitForm = async (req, res) => {
    try {
        const { name, age, nationality, club, position, goals_scored } = req.body;
        const playerData = new FootballPlayer({
            name,
            age,
            nationality,
            club,
            position,
            goals_scored
        });
        const savedData = await playerData.save();
        res.json(savedData);
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = formController;
