import User from '../models/User'

export const createNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
      if (err){
          res.send(err);
      }
      res.json(user);
  });
}

export const getUsers = (req,res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  });
}

export const getUserByID = (req,res) => {
  User.findById(req.params.userID, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  });
}

export const deleteUser = (req,res) => {
  User.deleteOne({ _id: req.params.userID }, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json({message: "User successfully deleted"})
  });
}
