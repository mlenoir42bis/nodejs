const { createUser } = require('../queries/user.queries');

exports.userCreate = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await createUser(body);
    //req.login(user);
    res.send({
      success: true
    });
  } catch(e) {
    res.status(500).send({
      error: e.message,
      success: false
    });
  }
}