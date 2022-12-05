module.exports = (req, res) => {
  console.log("hey logout");
  req.session.destroy(() => {
    loggedIn = null;
    user = null;
    res.redirect("/login");
  });
};
