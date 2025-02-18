const { response } = require('express');
const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    console.log("Create Employee called at controller");
    const { name, email, phone, city } = req.body;
    const employee = new Employee({ name, email, phone, city });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error("Error while saving:", error);
    res.status(500).json({ message: "Server error" });
  }
};



const getEmployees = async(req,res)=>{
  try{
    const employee = await Employee.find()
    res.status(200).json(employee)
  }catch(error){
    console.log("There is error",error)
    res.status(500).json({message:"Server error"})
  }
}

const sigleEmployyee = async(req,res)=>{
  try{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
      return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json(employee)
    console.log("Employee founded successfully!")
  }catch(error){
    console.log("There is an error occured",error);
    res.status(500).json({message:"Server Error occured"
    })
  }
}

const updateEmployee = async(req,res)=>{
  try{
    const {name,email,phone,city} = req.body
    const myEmployee = await Employee.findByIdAndUpdate(
      req.params.id,{name,email,phone,city}
    )
    if(!myEmployee){
      return res.status(404).json({message:"Employee not found"
      })
    }
    res.status(200).json(myEmployee);
  }catch(error){
    console.log("There is an error occured",error);
    res.status(500).json({message:"Server Error"});
  }
}

const deleteEmployee = async(req,res)=>{
  try{
    console.log("Delete Employee API called for ID:", req.params.id);
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
    if(!deleteEmployee){
      return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({ message: "Deleted Successfully" });
  }catch(error){
    console.log("Error occured while deleteing employee",error);
    res.status(500).json({message:"Server Error"});
  }
}

module.exports = { createEmployee,getEmployees,sigleEmployyee,updateEmployee,deleteEmployee };