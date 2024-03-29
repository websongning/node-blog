const handerBlogRouter = require('./src/router/blog')
const handerUserRouter = require('./src/router/user')
const serverHander = ((req, res) => {
   //设置返回格式
   res.setHeader('Content-type', 'application/json')
   //获取path
   const url = req.url
   req.path = url.split('?')[0]

   //处理blog路由
   const blogData = handerBlogRouter(req, res)
   if(blogData) {
       res.end(
           JSON.stringify(blogData)
       )
       return
   }
   //处理登录路由
   const userData = handerUserRouter(req, res)
   if(userData) {
       res.end(
           JSON.stringify(userData)
       )
       return
   }
   //未命中路由
   res.writeHead(404, {'Content-type': 'text/plain'})
   res.write('404 Not Found/n')
   res.end()
})
module.exports = serverHander