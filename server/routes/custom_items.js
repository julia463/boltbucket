import express from 'express'
import CustomItemsController from '../controllers/custom_items.js'

const router = express.Router()

router.get('/cars/new', CustomItemsController.createItem)

router.get('/cars', CustomItemsController.getAllItems)
router.post('/cars/new', CustomItemsController.createItem)
router.get('/cars/:id', CustomItemsController.getItem)
router.put('/cars/:id/edit', CustomItemsController.editItem)
//router.delete('/cars/:id/delete', CustomItemsController.deleteItem)
router.delete('/cars/:id', CustomItemsController.deleteItem)
export default router