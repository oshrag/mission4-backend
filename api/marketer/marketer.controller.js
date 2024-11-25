import { logger } from '../../services/logger.service.js'
import { marketerService } from './marketer.service.js'

export async function getMarketers(req, res) {
	try {
		const filterBy = {
			txt: req.query.txt || '',
			// minSpeed: +req.query.minSpeed || 0,
            // sortField: req.query.sortField || '',
            // sortDir: req.query.sortDir || 1,
			// pageIdx: req.query.pageIdx,
		}
		const marketers = await marketerService.query(filterBy)
		res.json(marketers)
	} catch (err) {
		logger.error('Failed to get marketers', err)
		res.status(400).send({ err: 'Failed to get marketers' })
	}
}


export async function addMarketer(req, res) {
	const { body: marketer } = req

	console.log('controller addMarketer  marketer:', marketer)

	try {
		const updatedMarketer = await marketerService.add(marketer)
		res.json(updatedMarketer)
	} catch (err) {
		logger.error('Failed to add marketer', err)
		res.status(400).send({ err: 'Failed to add marketer' })
	}
}

// export async function getCarById(req, res) {
// 	try {
// 		const carId = req.params.id
// 		const car = await carService.getById(carId)
// 		res.json(car)
// 	} catch (err) {
// 		logger.error('Failed to get car', err)
// 		res.status(400).send({ err: 'Failed to get car' })
// 	}
// }

// export async function addCar(req, res) {
// 	const { loggedinUser, body: car } = req

// 	try {
// 		car.owner = loggedinUser
// 		const addedCar = await carService.add(car)
// 		res.json(addedCar)
// 	} catch (err) {
// 		logger.error('Failed to add car', err)
// 		res.status(400).send({ err: 'Failed to add car' })
// 	}
// }

// export async function updateCar(req, res) {
// 	const { loggedinUser, body: car } = req
//     const { _id: userId, isAdmin } = loggedinUser

//     if(!isAdmin && car.owner._id !== userId) {
//         res.status(403).send('Not your car...')
//         return
//     }

// 	try {
// 		const updatedCar = await carService.update(car)
// 		res.json(updatedCar)
// 	} catch (err) {
// 		logger.error('Failed to update car', err)
// 		res.status(400).send({ err: 'Failed to update car' })
// 	}
// }

// export async function removeCar(req, res) {
// 	try {
// 		const carId = req.params.id
// 		const removedId = await carService.remove(carId)

// 		res.send(removedId)
// 	} catch (err) {
// 		logger.error('Failed to remove car', err)
// 		res.status(400).send({ err: 'Failed to remove car' })
// 	}
// }

// export async function addCarMsg(req, res) {
// 	const { loggedinUser } = req

// 	try {
// 		const carId = req.params.id
// 		const msg = {
// 			txt: req.body.txt,
// 			by: loggedinUser,
// 		}
// 		const savedMsg = await carService.addCarMsg(carId, msg)
// 		res.json(savedMsg)
// 	} catch (err) {
// 		logger.error('Failed to update car', err)
// 		res.status(400).send({ err: 'Failed to update car' })
// 	}
// }

// export async function removeCarMsg(req, res) {
// 	try {
// 		const { id: carId, msgId } = req.params

// 		const removedId = await carService.removeCarMsg(carId, msgId)
// 		res.send(removedId)
// 	} catch (err) {
// 		logger.error('Failed to remove car msg', err)
// 		res.status(400).send({ err: 'Failed to remove car msg' })
// 	}
// }
