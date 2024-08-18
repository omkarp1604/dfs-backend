import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  UserName: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Mobile: { type: String, required: true },
  Dob: { type: String, required: true },
  Task: { type: String, required: true },
  Rating: { type: String, required: true },
  CompletedTasks: { type: String, required: true },
  JobType: { type: String, required: true },
  Gender: { type: String, required: true },
  ImagePath: { type: String, required: true },
  Address: { type: String, required: true },
});

export default mongoose.model("employee", employeeSchema);
