const { default: mongoose } = require('mongoose')
const BulkStock = require("../Models/KitchenBulkStockModel");

// add a product
const addBulkStock = async (req, res) => {
  const { bname, bcategory, bquantity,bunits, bprice, bdescription } = req.body;

  try {
      let existingBulkStock = await BulkStock.findOne({ bname });

      if (existingBulkStock) {
          // If a record with the same name exists, merge the data
          existingBulkStock.bquantity += parseInt(bquantity);
          existingBulkStock.bdescription += `\n${bdescription}`;
          await existingBulkStock.save();
          res.status(200).json(existingBulkStock);
      } else {
          // If no record with the same name exists, create a new entry
          const bulkStock = await BulkStock.create({ bname, bcategory, bquantity, bprice,bunits, bdescription });
          res.status(201).json(bulkStock);
      }
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

//  get all Stocks
const getBulkStocks = async (req, res) => {
    try {
        const bulkStocks = await BulkStock.find({});
        res.status(200).json(bulkStocks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// get a single stock
const getsingleBulkStock = async (req,res) =>{

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'invalid id'})
  }

  const bulkStock = await BulkStock.findById(id)

  if(!stock){
    res.status(404).json({error: 'No such produt'})
  }

  res.status(200).json(bulkStock)
}

//update stocks
const updateBulkStock = async (req, res) => {

  const { bname, bcategory, bquantity,bunits, bprice, bdescription } = req.body;
  const{id}  = req.params;

  try{

  if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

  const update = await BulkStock.findById(id)

   if(!update){
    return res.status(404).json({ message: "Product not found" });
   }

   const updateFields = {};
   if (bname) updateFields.bname = name;
   if (bcategory) updateFields.bcategory = bcategory;
   if (bquantity) updateFields.bquantity = bquantity;
   if (bunits) updateFields.bunits = bunits;
   if (bprice) updateFields.bprice = bprice;
   if (bdescription) updateFields.bdescription = bdescription;

   
   if (Object.keys(updateFields).length > 0) {
       const updatedBulkStocks = await BulkStock.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
       res.json(updatedBulkStocks);
   } else {
       res.json({ message: 'No changes detected' });
   }
  }
  catch(error){
      res.status(500).json({error:error.message});
  }

}



// delete stocks
const deleteBulkStock = async (req, res) => {
    try {
        const { bulkStockName } = req.params; 
        const result = await BulkStock.findOneAndDelete({ bname: bulkStockName });

        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addBulkStock, getBulkStocks,getsingleBulkStock,updateBulkStock,deleteBulkStock };