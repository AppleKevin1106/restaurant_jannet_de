module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      elements: [
        {
          type: mongoose.Schema.Types.ObjectID, ref: 'elements'
        }
      ]
    },
    {timestamps: true}
  );
  const Category = mongoose.model('categories', schema);
  return Category;
}