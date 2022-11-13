export default function handler(req, res) {
    let pincodes = {
      "226015" : ["Lucknow","Uttar Pradesh"],
      "226016" : ["Lucknow","Uttar Pradesh"],
      "110003" : ["Delhi","Delhi"]
    }

    res.status(200).json(pincodes)
  }