const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty. Please enter a password.'],
    lowercase: true
  },
  educationLevel: {
    type: String,
    enum: ['Undergraduate', 'Postgraduate'],
    required: true
  },
  interests: {
    type: [String],
    enum: ["Frontend","Backend","Full-Stack","Data scientist","AI Developer"],
    required: true
  },
  progress: {
    currentEcademicYear: { 
        type: Number, 
        default: 0, 
        required: true },
    enfEcademicYear: { 
        type: Number, 
        default: 0, 
        required: true }
  },
  priorKnowledge: {
    type: [String], 
    enum: ['Java', 'Python', 'JavaScript','Rust'], 
    required: true
  },
  futureCareerInterest: {
    type: String, 
    enum: ['Software Engineer', 'Data Scientist', 'AI Developer','Consultant'], 
    required: true
  }},
  {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);
