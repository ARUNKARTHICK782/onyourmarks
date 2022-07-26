const mongoose = require('mongoose');
const Joi = require('joi');

//Defining a adminSchema
const subjectSchema = new mongoose.Schema({
    sub_name : String,
    total_marks: Number
});

const Subject = mongoose.model('newSubject',subjectSchema,'subject');


function validateSubject(subject){
    const subjectJoiSchema=Joi.object({
        sub_name:Joi.string().required(),
        total_marks:Joi.required()
    });
    return subjectJoiSchema.validate(subject);
}

module.exports.Subject = Subject;
module.exports.validateSubject = validateSubject;