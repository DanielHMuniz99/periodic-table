let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Element Model
let elementSchema = require('../models/Element');

// CREATE
router.route('/create-element').post((req, res, next) => {
    elementSchema.create(req.body, (error, data) => {
        if (error) {

            return next(error)

        } else {

            res.json(data)
        }
    })
});

// READ
router.route('/').get((req, res) => {
    elementSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// UPDATE
router.route('/update-element/:id').put((req, res, next) => {

    elementSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

// DELETE
router.route('/delete-element/:id').delete((req, res, next) => {
    elementSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {

            return next(error);

        } else {

            res.status(200).json({
                msg: data
            })

        }
    })
})

module.exports = router;