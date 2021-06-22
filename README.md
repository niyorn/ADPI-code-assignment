# ADPI-code-assignment

## Getting started
1. Clone the repo
2. run local Python server ``python -m http.server 8000``
3. Go to ``localhost:8000``
4. You're ready to go!

## Validation
The validator compares the data to the constructed schema and verifies whether it matches. 

Create a schema by creating a variable containing the keys and the associated type. 
```javascript
//Schema to validate the data with
const schema = {
  name: "string",
  age: "number",
  siblings: "array",
  metaData: "object",
  active: "boolean",
};
```

Call the ``validate`` function and passes along the data and schema as parameters. `
```javascript
validate(item, schema)
```

The ```validate``` function return true if it passes and false if it doesn't.

### validate key
The first task of the valid function is to check if the keys of the data and data correspond. If not then the following error is given. 

For this example, the keys in the schema are misspelled.
```javascript
//Schema to validate the data with (misspelled)
const schema = {
  namess: "string",
  age: "number",
  siblings: "array",
  metaData: "object",
  activess: "boolean",
};
```
__Error__
```javascript
namess in schema is invalid.
activess in schema is invalid.
```

### validate type
After that, the types of the schema and data are being checked against each other. If they do not matched then the following error is displayed.

 For this example, the ``age`` is a ``number`` but we check for a ``string``
```javascript
//Schema to validate the data with (different type)
const schema = {
  name: "string",
  age: "string",
  siblings: "array",
  metaData: "object",
  active: "string",
};
```

__Error__
```javascript
age is string in schema, but saw number.
```