import mongoose from "mongoose";

const jobSchema  = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      
    },
    salary: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    companyname:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);