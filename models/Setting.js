import mongoose from "mongoose";

const Schema = mongoose.Schema;

const settingSchema = new Schema({
  settingType: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Setting || mongoose.model("Setting", settingSchema);
