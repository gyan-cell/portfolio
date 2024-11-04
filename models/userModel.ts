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
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  profileImage: {
    type: String,
    default: '/default-avatar.png'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  provider: {
    type: String,
    enum: ['github', 'google', 'credentials'],
  },
  providerAccountId: {
    type: String
  }
}, {
  timestamps: true
})

// Method to get user's public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};


const User: mongoose.Model<UserType> = mongoose.models.User || mongoose.model('User', userSchema);

export default User

