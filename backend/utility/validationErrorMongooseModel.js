const validationErrorMongooseModel = (res, error) => {
  const simplifiedErrors = Object.keys(error.errors).map((key) => {
    return {
      field: key,
      message: error.errors[key].message,
      value: error.errors[key].value,
    };
  });
  console.error('Validation errors:', simplifiedErrors);
  res.status(500).json(simplifiedErrors);
};

module.exports = validationErrorMongooseModel;
