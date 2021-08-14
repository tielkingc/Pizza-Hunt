const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{
    toJSON:{
        virtuals: true
    },
    id: false
}
);

const Pizza = model('Pizza', PizzaSchema);

PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

module.exports = Pizza;