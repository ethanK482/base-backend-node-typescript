import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa interface cho Room
interface IRoom extends Document {
    hotel: mongoose.Types.ObjectId; // Liên kết đến Hotel
    roomNumber: string;
    type: 'single' | 'double' | 'suite'; // Loại phòng
    pricePerNight: number;
    capacity: number; // Số lượng khách có thể ở
    amenities: string[]; // Tiện ích của phòng
    isAvailable: boolean;
    description?: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

// Định nghĩa schema cho Room
const roomSchema: Schema<IRoom> = new Schema({
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }, // Liên kết tới Hotel entity
    roomNumber: { type: String, required: true },
    type: { type: String, enum: ['single', 'double', 'suite'], required: true },
    pricePerNight: { type: Number, required: true },
    capacity: { type: Number, required: true },
    amenities: [{ type: String }], // Các tiện ích như máy lạnh, TV, minibar...
    isAvailable: { type: Boolean, default: true },
    description: { type: String },
    images: [{ type: String }],
}, {
    timestamps: true
});

// Tạo model từ schema
const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;
