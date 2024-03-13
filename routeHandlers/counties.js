const Counties = require('../models/countiesSchema')
async function getCounties(req , res){
    const counties = await  Counties.find()
    counties ? res.status(200).json(counties) : res.status(404).json({message:'No Data Found'})
}

module.exports = getCounties