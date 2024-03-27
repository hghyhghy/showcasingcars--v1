const Product  =  require("../models/products")
const getallproducts = async (req,res) => {
    // extracting all  the from the user query
    const {company,name,featured,sort,select} =  req.query

    const queryObject= {}

    if(company){
        queryObject.company = company
    }

    if(featured){
        queryObject.featured=featured
    }

    if(name){
        queryObject.name={$regex:name,$options:"i"}
    }

    let apidata = Product.find(queryObject)
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apidata = apidata.sort(sortFix)
    }
    
    if(select){
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix)
    }
    

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
  
    let skip = (page - 1) * limit;
  
    // page = 2;
    // limit = 3;
    // skip =  1 * 3 = 3
  
    apidata = apidata.skip(skip).limit(limit);


    const myData =  await apidata

    res.status(200).json({myData,nbHits:myData.length})
}

const getallproductstesting = async (req,res) => {
    const myData =  await  Product.find(req.query).skip(2)

    res.status(200).json({myData, nbHits: myData.length })
}

module.exports = {getallproducts,getallproductstesting}