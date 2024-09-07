import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for Booking
interface IBooking extends Document {
    customerName: string;
    customerEmail: string;
    phoneNumber: string;
    hotel: mongoose.Types.ObjectId;
    room: mongoose.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    totalGuests: number;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'cancelled'; // Standardized
    paymentMethod: 'credit_card' | 'cash'; // Standardized
    createdAt: Date;
    updatedAt: Date;
}

// Define the schema for Booking
const bookingSchema: Schema<IBooking> = new Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, match: /.+\@.+\..+/ }, 
    phoneNumber: { type: String, required: true },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalGuests: { type: Number, required: true, min: 1 }, // Ensures at least 1 guest
    totalPrice: { type: Number, required: true, min: 0 }, // Ensures the price is non-negative
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }, // Matching enum
    paymentMethod: { type: String, enum: ['credit_card', 'cash'], required: true }, // Matching enum
}, {
    timestamps: true
});

// Create the model from the schema
const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;

