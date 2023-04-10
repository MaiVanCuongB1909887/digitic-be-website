const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:Number,
        rdefault:0,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    images: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toponseek.com%2Fblogs%2Fviet-blog%2F&psig=AOvVaw2eVKwtpj50a4GhsS4ZRoAz&ust=1679124756862000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMi81ae54v0CFQAAAAAdAAAAABAE",
    },
    author: {
        type: String,
        default: "Admin",
    },
    images: [],
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);