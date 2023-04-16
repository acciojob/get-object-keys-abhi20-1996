//your JS code here. If required.
var student = {
                name : "David Rayy", 
                sclass : "VI", 
                rollno : 12 
               } 
Object.prototype.getKeys = function() {
return Object.keys(this);
};
const keys = student.getKeys();

console.log(keys);