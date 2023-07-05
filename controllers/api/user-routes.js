const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    if (
      req.body.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/
      )
    ) {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });

      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

        res.redirect("/");
      });
    } else {
      //TODO: send a message to user on the front end
      console.log(
        `msg: "The password must contain at least 8 characters including at least 1 uppercase, 1 lowercase and one digit."`
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      console.log('status(400) message: "No user account found!")');
      passwordVerifyText.style.display = "block";
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.redirect("/");

      // res.render("homepage", { user, loggedIn: true });
    });
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
