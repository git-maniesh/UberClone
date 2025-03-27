const express = require('express')
const {body,query} = require('express-validator')
const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middlewares')

const router = express.Router()


router.post('/create', 
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),
    body('vehicleType').isString().isIn(['auto','car','motorcycle']).withMessage("Invalid Vehicle Type"),
    authMiddleware.authUser,
    rideController.createRide

)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),

    rideController.getFare
)


router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride Id'),
    query('otp').isString().isLength({min:6, max:6}).withMessage("Invalid OTP"),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid Ride ID'),
    rideController.endRide
)

module.exports = router
