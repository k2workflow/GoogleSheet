import "@k2oss/k2-broker-core";
import { fetch_get } from "./fetch";
import { CellMethods, CellProperties } from "./ServiceObjects";
import { URLs } from "./URLs";

export async function executeDrive(methodName: string) {
  switch (methodName) {
    case CellMethods.GetCellValue:
      await executeGetCellValue();
      break;
    default:
      throw new Error(`The method ${methodName} is not supported.`);
  }
}

async function executeGetCellValue() {
  postResult({});
}
