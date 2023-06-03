const Post = require("../models/Post");

exports.getAllPost = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({
      status: "success",
      length: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
    next(err);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { name, contact1, contact2, contact3 } = req.body;
    let post = new Post(name, contact1, contact2, contact3);
    post = await post.save();

    res.status(200).json({
      message: " posted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    await Post.deleteById(postId);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
