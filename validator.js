//validate if key and type match
const validate = (data, schema) => {
  if (validateObjectKey(data, schema)) {
    if (validateObjectType(data, schema)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//Check if key in schema and data match
const validateObjectKey = (data, schema) => {
  const validateKey = Object.keys(schema)
    .filter((key) => !data[key])
    .map((key) => console.error(`${key} in schema is invalid.`));

  if (validateKey.length === 0) {
    return true;
  } else {
    return false;
  }
};

//Check if type in schema and data match
const validateObjectType = (data, schema) => {
  let validate = true;

  for (const property in schema) {
    const typeInSchema = schema[property];
    const typeInData = typeof data[property];

    if (typeInData !== typeInSchema && typeInSchema === "array") {
      //Edge case where Array is type of object
      if (Array.isArray(data[property])) {
        return true;
      } else {
        console.error(
          `${property} is ${typeInSchema} in schema, but saw ${typeInData}`
        );
        validate = false;
        break;
      }
    } else if (typeInData !== typeInSchema) {
      console.error(
        `${property} is ${typeInSchema} in schema, but saw ${typeInData}`
      );
      validate = false;
      break;
    }
  }

  return validate;
};

export { validate };
