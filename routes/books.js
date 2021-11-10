import { Router } from 'express'
import * as bookCtrl from "../controllers/books.js"

const router = Router()

/* GET books. */
// localhost:3000/books
router.get('/', bookCtrl.index)
// localhost:3000/books/new
router.get('/new', bookCtrl.new);
router.post('/', bookCtrl.create);
router.delete('/:id', bookCtrl.delete);

export {
  router
}
