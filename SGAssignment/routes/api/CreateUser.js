const express = require("express");
const CUser = require("../../models/CreateUser");

const router = express.Router();

//save user
router.post("/cuser/save", (req, res) => {
  let newPost = new CUser(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Data Saved Successfully",
    });
  });
});

//get user
router.get("/cuser", (req, res) => {
  CUser.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//get a specific user
router.get("/cuser/:id", (req, res) => {
  let postId = req.params.id;

  CUser.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//update user
router.put("/cuser/update/:id", (req, res) => {
  CUser.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});

//delete user
router.delete("/cuser/delete/:id", (req, res) => {
  CUser.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccesfull",
        err,
      });
    return res.json({
      message: "Delete Successfull",
      deletedpost,
    });
  });
});

module.exports = router;
