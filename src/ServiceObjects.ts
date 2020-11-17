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

export const CellMethods = {
  WriteCellValue: "WriteCellValue",
  GetCellValue: "GetCellValue",
};

export const CellProperties = {
  spreadsheetId: "spreadsheetId",
  CellId: "CellId",
  EffectiveValueBool: "EffectiveValueBool",
  EffectiveValueString: "EffectiveValueString",
  EffectiveValueNumber: "EffectiveValueNumber",
  EffectiveValueFormula: "EffectiveValueFormula",
  EffectiveValueDateTime: "EffectiveValueDateTime",
  EffectiveValueDate: "EffectiveValueDate",
  EffectiveValueTime: "EffectiveValueTime",
  FormattedValue: "FormattedValue",
  IsEmpty: "IsEmpty",
};

// VS Code regex to use on the table copied from github.
// : ^\| ([A-Za-z]*) \| ([A-Za-z ]*) \| ([A-Za-z]*) \| ([a-zA-Z ,"1-9!\./]*) \|$
// [CellProperties.$1]: { displayName: "$2", description: "$4", type: PropertyTypes.STRING, }
export const ServiceObjectDefinitions = {
  objects: {
    Cell: {
      displayName: "Cell",
      description:
        "Operations related to a single or set of Google Sheet Cell(s).",
      properties: {
        [CellProperties.spreadsheetId]: {
          displayName: "Spreadsheet Id",
          description: "The google drive ID of the spreadsheet file.",
          type: PropertyTypes.STRING,
        },
        [CellProperties.CellId]: {
          displayName: "Cell Name",
          description:
            "The cell name, in the format 'Sheet1!A1'. Only one cell can be provided.",
          type: PropertyTypes.STRING,
        },
        [CellProperties.EffectiveValueBool]: {
          displayName: "Boolean Value",
          description:
            "The true/false value of the field if it is a boolean cell.",
          type: PropertyTypes.BOOL,
        },
        [CellProperties.EffectiveValueString]: {
          displayName: "Text Value",
          description: "The text value of the field if it is a text cell.",
          type: PropertyTypes.STRING,
        },
        [CellProperties.EffectiveValueNumber]: {
          displayName: "Number Value",
          description: "The number value of the field if it is a number cell.",
          type: PropertyTypes.NUMBER,
        },
        [CellProperties.EffectiveValueFormula]: {
          displayName: "Formula Value",
          description: "The Formula of the field if it is a formula cell.",
          type: PropertyTypes.STRING,
        },
        [CellProperties.EffectiveValueDateTime]: {
          displayName: "DateTime Value",
          description:
            "The date and time of the field if it is a datetime cell.",
          type: PropertyTypes.DATETIME,
        },
        [CellProperties.EffectiveValueDate]: {
          displayName: "Date Value",
          description: "The Date of the field if it is a date cell.",
          type: PropertyTypes.DATE,
        },
        [CellProperties.EffectiveValueTime]: {
          displayName: "Time Value",
          description: "The Time of the field if it is a time cell.",
          type: PropertyTypes.TIME,
        },
        [CellProperties.FormattedValue]: {
          displayName: "Formatted Value",
          description: "The text representation of the cell",
          type: PropertyTypes.STRING,
        },
        [CellProperties.IsEmpty]: {
          displayName: "Is Empty",
          description: "Indicates if the cell is empty, or could not be found.",
          type: PropertyTypes.BOOL,
        },
      },
      methods: {
        [CellMethods.GetCellValue]: {
          displayName: "Get Cell Value",
          description: "Read a value from a single given Cell.",
          type: MethodTypes.READ,
          inputs: [CellProperties.spreadsheetId, CellProperties.CellId],
          requiredInputs: [CellProperties.spreadsheetId, CellProperties.CellId],
          outputs: [
            CellProperties.EffectiveValueBool,
            CellProperties.EffectiveValueString,
            CellProperties.EffectiveValueNumber,
            CellProperties.EffectiveValueFormula,
            CellProperties.EffectiveValueDateTime,
            CellProperties.EffectiveValueDate,
            CellProperties.EffectiveValueTime,
            CellProperties.FormattedValue,
            CellProperties.IsEmpty,
          ],
        },
      },
    },
  },
};
