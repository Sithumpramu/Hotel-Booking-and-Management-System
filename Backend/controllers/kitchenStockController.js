const { default: mongoose } = require('mongoose')
const Stock = require("../Models/KitchenStockModel");

// add a product
const addStock = async (req, res) => {
    const { name, category,quantity, price,description } = req.body;
  
    try {
      
      const stock = await Stock.create({ name, category,quantity, price,description });
      res.status(201).json(stock); 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

//  get all Stocks
const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find({});
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// get a single stock
const getsingleStock = async (req,res) =>{

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'invalid id'})
  }

  const stock = await Stock.findById(id)

  if(!stock){
    res.status(404).json({error: 'No such produt'})
  }

  res.status(200).json(stock)
}

//update stocks
const updateStock = async (req, res) => {
  
  const { name, category, quantity, price, description } = req.body;
  const{stockName}  = req.params;

  try{
  const update = await Stock.findByIdAndUpdate(
    {name: stockName},
    {name, category, quantity, price, description},
    {new: true}
  );
   if(!update){
    return res.status(404).json({ message: "Product not found" });
   }
      res.status(200).json(update);
  }
  catch(error){
      res.status(500).json({error:error.message});
  }

}



// delete stocks
const deleteStock = async (req, res) => {
    try {
        const { stockName } = req.params; 
        const result = await Stock.findOneAndDelete({ name: stockName });

        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addStock, getStocks,getsingleStock,updateStock,deleteStock };