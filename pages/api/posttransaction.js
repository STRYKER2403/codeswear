import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
  // Validate paytm checksum -- pending
    // Update Status into Orders table after checking the transaction status

    let order;
    // if(req.body.STATUS == )
    if(req.body.resultCode == 'TXN_SUCCESS'){
      order =  await Order.findOneAndUpdate({orderId: req.body.orderId} , {status: "Paid" , paymentInfo:JSON.stringify(req.body)})
      // await Order.findOneAndUpdate({orderId: req.body.ORDERID} , {status: "Paid" , paymentInfo:JSON.stringify(req.body)})
    }
    else if(req.body.resultCode == 'PENDING')
    {
       order = await Order.findOneAndUpdate({orderId: req.body.orderId} , {status: "Pending" , paymentInfo:JSON.stringify(req.body)})
      // await Order.findOneAndUpdate({orderId: req.body.ORDERID} , {status: "Pending" , paymentInfo:JSON.stringify(req.body)})
    }
    
    
    // initiate shipping
    // Redirect user to the order confirmation page

  
    res.redirect("/order?id=" + order._id,200)
    // res.status(200).json({ body:req.body })
  }

  export default connectDb(handler);
  