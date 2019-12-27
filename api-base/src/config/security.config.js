exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send({
      error: "Access restricted",
      success: false
    });
  }
}
