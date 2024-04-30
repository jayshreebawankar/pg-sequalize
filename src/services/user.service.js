const User = require('../models/user.model.js');

const getUserService = async()=>{
    try {
        return await User.findAll();
    } catch (error) {
        throw error
    }
}

const createUserService = async(data)=>{
    try {
        console.log('data : ', data);
        return await User.create(data);
    } catch (error) {
        throw error
    }
}

const updateUserService = async(userId, userdata)=>{
    try {
        console.log('userId : ', userId);
        console.log('userdata : ', userdata);
        return await User.update(userdata, { where: { id: userId }});
    } catch (error) {
        throw error
    }
}

const getUserbyIdService = async(userId)=>{
    try {
        return await User.findOne({ where: { id: userId } });
    } catch (error) {
        throw error
    }
}

const deleteUserService = async()=>{
    try {
        // return await User.findAll();
    } catch (error) {
        throw error
    }
}

module.exports = {getUserService, createUserService, updateUserService, getUserbyIdService, deleteUserService};