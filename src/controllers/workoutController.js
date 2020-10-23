import Workout from '../models/Workout';

export const getWorkouts = (req, res) => {
    Workout.find({}, (err, workout) => {
        if (err){
            res.send(err);
        }
        res.json(workout);
    })
}

export const addNewWorkout = (req, res) => {
    let newWorkout = new Workout(req.body);
    newWorkout.save((err, workout) => {
        if (err){
            res.send(err);
        }
        res.json(workout);
    });
  }