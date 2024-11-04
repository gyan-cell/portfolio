import { UserType } from "@/types/user";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxLength: [60, 'Name cannot be more than 60 characters'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  profileImg: {
    type: String,
    default: 'null'
  }
})

// Add any pre-save middleware
userSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Method to get user's public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};


const User: mongoose.Model<UserType> = mongoose.models.User || mongoose.model('User', userSchema);

export default User

