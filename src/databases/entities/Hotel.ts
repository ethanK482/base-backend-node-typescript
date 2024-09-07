import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa interface cho Hotel
interface IHotel extends Document {
    name: string;
    address: string;
    city: string;
    country: string;
    rating: number;
    description: string;
    rooms: mongoose.Types.ObjectId[];
    amenities: string[];
    phoneNumber: string;
    email: string;
    website?: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

const hotelSchema: Schema<IHotel> = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 }, // Giới hạn đánh giá từ 0-5 sao
    description: { type: String },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }], // Liên kết tới Room entity
    amenities: [{ type: String }], // Các tiện ích như wifi, hồ bơi, nhà hàng...
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
    images: [{ type: String }],
}, {
    timestamps: true
});

// Tạo model từ schema
const Hotel = mongoose.model<IHotel>('Hotel', hotelSchema);

export default Hotel;
