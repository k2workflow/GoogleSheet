import "@k2oss/k2-broker-core";
import { ServiceObjectDefinitions } from "./ServiceObjects";

metadata = {
  systemName: "GoogleSheetJSSPBroker",
  displayName: "Google Sheet JSSP Broker",
  description: "JSSP Broker to utilize Google Sheet functionality.",
  configuration: {},
};

ondescribe = async function ({ configuration }): Promise<void> {
  postSchema(ServiceObjectDefinitions);
};

onexecute = async function ({
  objectName,
  methodName,
  parameters,
  properties,
  configuration,
  schema,
}): Promise<void> {
  switch (objectName) {
    //TODO
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};
