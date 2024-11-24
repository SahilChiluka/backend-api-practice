const practiceModel = require("../Models/practiceModel");

const homePage = async(req, res) => {
    try {
        const data = await practiceModel.find();
        res.status(200).json({data});
    } catch (error) {
        console.log(error);
    }
}

const insertData = async(req, res) => {
    const { name, age, city } = req.body;

    const data = new practiceModel({ name, age, city });
    console.log(data);

    try {
        await data.save();
        res.status(200).json({msg:"Data Inserted Successfully"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const updateData = async(req,res) => {
    const {id} = req.params;
    const {name, age, city} = req.body;
    try {
    await practiceModel.findByIdAndUpdate(id, {name:name, age:age, city:city});
    res.status(200).json({msg: "Data updated sucessfully"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const deleteData = async(req, res) => {
    const {id} = req.params;
    try {
        await practiceModel.findByIdAndDelete({_id: id});
        res.status(200).json({msg: "Data deleted sucessfully"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

module.exports = {homePage, insertData, updateData, deleteData}