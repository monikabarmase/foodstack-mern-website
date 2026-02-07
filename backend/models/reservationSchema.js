import mongoose  from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[4, "First name contain at least 3 character"],
        maxLength:[30, " First name cannot exceed 30 character"],
    },
     lastName: {
        type: String,
        required: true,
        minLength:[4, "last name contain at least 4 character"],
        maxLength:[30, " last name cannot exceed 30 character"],
    },
     email: {
        type: String,
        required: true,
        validate:[validator.isEmail, "Provide a valid email"],
    },
     phone: {
        type: String,
        required: true,
        minLength:[10, "phone number must contain only 10 digits"],
        maxLength:[10, " phone number must contain only 10 digits"],
    },
    time:{
         type: String,
          required: true,     
    },
     date:{
         type: String,
          required: true,     
    },
});


export const Reservation = mongoose.model("Reservation",reservationSchema);