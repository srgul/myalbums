exports.index = (req, res) => {
  res.render('login')
}

exports.auth = (req, res) => {
  let mail = req.body.mail;
  let password = req.body.password;

  if (mail=="user@localhost.com" && password == "user123") {
    res.redirect('/myalbums');
  } else {
    res.render('login', {mail, password, status: "Invalid mail or password"})
  }
}