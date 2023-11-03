const Airline = require("../models/airlineModel");

const getAllAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find({});
    res.status(200).json(airlines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAirlineById = async (req, res) => {
  try {
    const { id } = req.params;
    const airline = await Airline.findById(id);
    res.status(200).json(airline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// const addAirline = async (req, res) => {
//   try {

//     const { airline, flightNumber, departureCity, arrivalCity, departureTime, arrivalTime } = req.body;

//     if (!airline || !flightNumber || !departureCity || !arrivalCity || !departureTime || !arrivalTime) {
//       return res.status(400).json({ error: 'Please provide all required fields.' });
//     }

//     const newAirline = new Airline({
//       airline,
//       flightNumber,
//       departureCity,
//       arrivalCity,
//       departureTime,
//       arrivalTime,
//     });

//     await newAirline.save();

//     res.status(200).json({ message: "Airline added successfully", airline: newAirline });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred while adding the airline" });
//   }
// };


const addAirline = async (req, res) => {
  try {
    const airline = await Airline.create(req.body);
    console.log(airline);
    res.status(200).json(airline);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// const updateAirline = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { airline, flightNumber, departureCity, arrivalCity, departureTime, arrivalTime } = req.body;

//     if (!airline || !flightNumber || !departureCity || !arrivalCity || !departureTime || !arrivalTime) {
//       return res.status(400).json({ error: 'Please provide all required fields.' });
//     }

//     const updatedAirline = await Airline.findByIdAndUpdate(
//       id,
//       {
//         airline,
//         flightNumber,
//         departureCity,
//         arrivalCity,
//         departureTime,
//         arrivalTime,
//       },
//       { new: true } // to return the updated document
//     );

//     if (!updatedAirline) {
//       return res.status(404).json({ message: `Cannot find any airline with ID ${id}` });
//     }

//     res.status(200).json(updatedAirline); // return the updated airline
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const updateAirline = async (req, res) => {
  try {
    const { id } = req.params;
    const airline = await Airline.findByIdAndUpdate(id, req.body);
    if (!airline) {
      return res
        .status(404)
        .json({ message: `cannot find any airline with ID ${id}` });
    }
    const updatedAirline = await Airline.findById(id);
    res.status(200).json(updatedAirline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAirline = async (req, res) => {
  try {
    const { id } = req.params;
    const airline = await Airline.findByIdAndDelete(id);
    if (!airline) {
      return res
        .status(404)
        .json({ message: `cannot find any airline with ID ${id}` });
    }
    res.status(200).json(airline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllAirlines,
  getAirlineById,
  addAirline,
  updateAirline,
  deleteAirline,
};
