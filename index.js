import { validate } from "./validator.js";

//Schema to validate the data with
const schema = {
  name: "string",
  age: "number",
  siblings: "array",
  metaData: "object",
  active: "boolean",
};

//Mock API Call
fetch("./mockData.json")
.then(res => res.json())
.then(data => {
    for(let item of data) {
        if(validate(item, schema)){
            console.log("valide")
        }
    }
})
