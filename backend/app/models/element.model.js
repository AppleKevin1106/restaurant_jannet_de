module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      price: Number,
      count: Number,
      category: 
        {
          type: mongoose.Schema.Types.ObjectID, ref: 'categories'
        }
      
    },
    {timestamps: true}
  );
  const Element = mongoose.model('elements', schema);
  return Element;
}
