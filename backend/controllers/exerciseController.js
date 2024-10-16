const axios = require("axios");

// ExerciseDB API base URL and headers
const EXERCISE_DB_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const EXERCISE_DB_API_KEY = process.env.X_RAPIDAPI_KEY;
const EXERCISE_DB_API_HOST = process.env.X_RAPIDAPI_HOST;

const axiosInstance = axios.create({
  headers: {
    'x-rapidapi-host': EXERCISE_DB_API_HOST,
    'x-rapidapi-key': EXERCISE_DB_API_KEY,
  },
});

// Function to get the list of body parts
exports.getBodyPartList = async (req, res) => {
  try {
    const response = await axiosInstance.get(`${EXERCISE_DB_URL}/bodyPartList`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching body part list:', error);
    res.status(500).json({ error: 'Failed to fetch body part list' });
  }
};

exports.getExercisesByBodyPart = async (req, res) => {
  const { bodyPart } = req.params;

  try {
      const response = await axiosInstance.get(`${EXERCISE_DB_URL}/${bodyPart}`);
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching exercises:', error);
      res.status(500).json({ error: 'Failed to fetch exercises' });
  }
};