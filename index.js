import { validate } from "./validator.js";

const schema = {
  name: "string",
  age: "number",
  siblings: "array",
  metaData: "object",
  active: "boolean",
};

const mockData = {
  name: "James",
  age: 25,
  siblings: 123,
  metaData: {},
  active: true,
};


if(validate(mockData, schema)) {
    console.log("data match")
}else {
    console.log("data doesn't match")
}
