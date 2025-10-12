const indexRoute = async (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: "The Route has been setup !",
  });
};

export { indexRoute };
