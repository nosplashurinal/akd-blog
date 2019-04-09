var code = `
// Defining Object
var person = {
  // Propertise
  first_name: "Sumit",
  last_name: "Ghosh",

  // Methods
  getName: function() {
    return "Person name is " + this.first_name + " " + this.last_name;
  },

  // Object within Object
  phone_number: {
    Mobile: "12345",
    LandLine: " 678910"
  }
};
console.log(person.getName());
console.log(
  "Persons First Name " +
    person.first_name +
    " Landline number " +
    person.phone_number.LandLine
);
`;

export default code;
