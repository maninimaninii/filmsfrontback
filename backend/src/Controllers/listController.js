const List = require('../models/listModel');


exports.getAllLists = (req,res) =>{
    List.getAllL((lists) =>{
        res.json(lists);
    })
};


exports.getListById = (req, res) =>{
    const {id} = req.params;
    List.getListById(id, (list) =>{
        res.json(list);
    })
}