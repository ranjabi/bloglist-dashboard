const commentsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

commentsRouter.get('/', async (request, response) => {
  const comments = await Comment.find({}).populate('blog', { title: 1, id: 1 })
  response.json(comments)
})

module.exports = commentsRouter
