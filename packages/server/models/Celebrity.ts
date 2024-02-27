import { model, Schema } from 'mongoose';

const celebritySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: {
    positive: Number,
    negative: Number
  },
});

export default model('Celebrity', celebritySchema);
