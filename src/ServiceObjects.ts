// Because we want to seperate out this content into a seperate file, we need to redefine the simple things like PropertyType.
// The K2-OSS lib doesn't expose them in a way that we can just use them anywhere.

const PropertyTypes = {
  STRING: "string",
  BOOL: "boolean",
  DATETIME: "dateTime",
  FILE: "attachment",
  NUMBER: "number",
  DECIMAL: "decimal",
  DATE: "extendedDateTime",
  GUID: "guid",
  AUTOGUID: "guid",
  //HYPERLINK: "object",
  IMAGE: "image",
  MEMO: "extendedString",
  MULTIVALUE: "object",
  TIME: "extendedDateTime",
  AUTONUMBER: "extendedNumber",
  XML: "extendedString",
};

const MethodTypes = {
  LIST: "list",
  READ: "read",
  CREATE: "create",
  EXECUTE: "execute",
  UPDATE: "update",
  DELETE: "delete",
};

export const SheetMethods = {
  getCell: "GetCell",
};

export const SheetProperties = {
  id: "id",
  cell: "cell",
  value: "value",
};

export const ServiceObjectDefinitions = {
  objects: {
    Drive: {
      displayName: "Sheet",
      description: "Operations related to a Google (Shared) Drive",
      properties: {
        [SheetProperties.id]: {
          displayName: "Sheet Id",
          description: "The ID of the sheet.",
          type: PropertyTypes.STRING,
        },
        [SheetProperties.cell]: {
          displayName: "Cell",
          description: "The cell to retrieve (eg. A1, B5, etc)",
          type: PropertyTypes.STRING,
        },
      },
      methods: {
        [SheetMethods.getCell]: {
          displayName: "Get Cell Value",
          description: "Get the value of a cell.",
          type: MethodTypes.LIST,
          inputs: [SheetProperties.id, SheetProperties.cell],
          requiredInputs: [SheetProperties.id, SheetProperties.cell],
          outputs: [SheetProperties.value],
        },
      },
    },
  },
};
