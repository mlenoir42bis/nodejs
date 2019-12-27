const { findUserPerEmail } = require('../queries/user.queries');

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUserPerEmail(email);
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        req.login(user);
        res.send({
          success: true
        });
      } else {
        res.status(500).send({
          error: 'Wrong password',
          success: false
        });
      }
    } else {
      res.status(500).send({
        error: 'User not found',
        success: false
      });
    }
  } catch(e) {
    res.status(500).send({
      error: e.message,
      success: false
    });
  }

}

exports.signout = (req, res, next) => {
  req.logout();
  res.send({
    success: true
  });
}