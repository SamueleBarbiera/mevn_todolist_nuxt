const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        oggetto: {
            type: String,
            required: [true, "name field is required"],
        },
        data: {
            type: String,
            required: [true, "age field is required"],
        },
    },
    {timestamps: true}
);

module.exports = model("users", userSchema);
