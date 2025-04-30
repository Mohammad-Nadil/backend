import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    avatar: [
      {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        },
      },
    ],
    password: {
      type: String,
      default: null,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordOTP: {
      type: Number,
    },
    forgotPasswordOTPExpiry: {
      type: Date,
    },
    // role: {
    //   type: String,
    //   enum: ['admin', 'user'],
    //   default: 'user',
    // },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
