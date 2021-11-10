import { Router } from 'express'
const router = Router()

/* GET /books */
router.get('/', function(req, res) {
  res.redirect("/books")
})

export { 
  router
}
