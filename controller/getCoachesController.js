const Coaches = require("../model/addCoachesModel")

const getCoaches = async (req, res) => {
    try {
        const allCoaches = await Coaches.find()
        console.log(allCoaches);
        res.send(allCoaches)
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

module.exports = getCoaches;