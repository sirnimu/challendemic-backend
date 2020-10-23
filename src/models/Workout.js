const { model, Schema } = require('mongoose');

const workoutSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        type: String,
        amount: Number,
        created_date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = model('Workout', workoutSchema);