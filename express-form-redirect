router.post("/", (req, res) => {
  const isValid = false //login data validation
  if(isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error") //error handler middleware
    res.render("users/new", { firstName: req.body. firstName })
  }
}
