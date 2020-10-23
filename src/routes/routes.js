 import { createNewUser, getUsers, getUserByID, deleteUser} from '../controllers/userController';
 import { getWorkouts, addNewWorkout} from '../controllers/workoutController';

 const routes = (app) => {
     app.route('/users')
        .get(getUsers)
        .post(createNewUser);

    app.route('/user/:userID')
        .get(getUserByID)
        .delete(deleteUser);

    app.route('/workouts')
        .get(getWorkouts)
        .post(addNewWorkout)
 }

 export default routes;