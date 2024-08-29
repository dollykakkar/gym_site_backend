const Payment = require("../model/addPaymentModel")

const addPayment = async (req, res) => {

    const paymentDetails = req.body;
    if (paymentDetails) {
        try {
            await Payment.create(paymentDetails)
            res.send("Payment done");
            console.log("Payment done Successfully");

        } catch (error) {
            res.send("Server Error");
            console.log(error);
        }
    } else {
        res.send("No data receieved")
    }
}
module.exports = addPayment;