// REQUIRE DEPENDENCIES ------------------------
const express = require("express");
const postsRouter = express.Router();
const Post = require("../models/post");

// INDEX ROUTE ---------------------------------
// postsRouter.get("/", (req, res) => {
//   if (req.session.currentUser) {
//     res.render("dashboard.ejs", {
//       currentUser: req.session.currentUser,
//     });
//   } else {
//     res.render("index.ejs", {
//       currentUser: req.session.currentUser,
//     });
//   }
// });

// postsRouter.get("/", (req, res) => {
//   if (req.session.currentUser) {
//     res.render("dashboard.ejs", {
//       currentUser: req.session.currentUser,
//     })
//     Post.find({}, (error, allPosts) => {
//       res.render("dashboard.ejs", {
//         posts: allPosts,
//       });
//     });
//   } else {
//     res.render("index.ejs", {
//       currentUser: req.session.currentUser,
//     });
//   }
// });

postsRouter.get("/", (req, res) => {
  if (req.session.currentUser) {
    Post.find({}, (error, allPosts) => {
      res.render("dashboard.ejs", {
        posts: allPosts,
        currentUser: req.session.currentUser,
      })
    })
  } else {
    res.render("index.ejs", {
      currentUser: req.session.currentUser,
    });
  }
});

// NEW ROUTE -----------------------------------
postsRouter.get("/new", (req, res) => {
  if (req.session.currentUser) {
    res.render("new.ejs", {
      currentUser: req.session.currentUser,
    });
  } else {
    res.render("index.ejs", {
      currentUser: req.session.currentUser,
    });
  }
});

// DELETE ROUTE --------------------------------

// UPDATE ROUTE --------------------------------

// CREATE ROUTE --------------------------------
postsRouter.post("/", (req, res) => {
	Post.create(req.body, (error, createdPost) => {
        res.redirect("/");
	});
});

// EDIT ROUTE ----------------------------------

// SHOW ROUTE ----------------------------------

// EXPORT USER ROUTER --------------------------
module.exports = postsRouter;
