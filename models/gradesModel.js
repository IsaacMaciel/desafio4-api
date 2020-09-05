export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      required: false,
    },
  });

  const Grades = mongoose.model("grades",schema,"grades");
  
  return Grades;
};
