module.exports = (req, res) => {
  req.session.destroy(() => {
    loggedIn = null;
    user = null;
    res.redirect("/login");
  });
};
