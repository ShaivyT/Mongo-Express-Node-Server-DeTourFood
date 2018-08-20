const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    orderId: Number,
    status: {
        type: String,
        enum: [
            'INCOMPLETE',
            'COMPLETED'
        ]
    },
    totalPrice: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    orderItems: [{
        menuItemId: String,
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RestaurantModel'
        },
        menuItem: String,
        menuItemPrice: String
    }]
}, {collection: 'orders'});