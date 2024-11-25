import express from 'express'

import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getMarketers, addMarketer } from './marketer.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getMarketers)
// router.get('/:id', log, getCarById)
 router.post('/', log, addMarketer)
// router.put('/:id', requireAuth, updateCar)
// router.delete('/:id', requireAuth, removeCar)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

// router.post('/:id/msg', requireAuth, addCarMsg)
// router.delete('/:id/msg/:msgId', requireAuth, removeCarMsg)

export const marketerRoutes = router