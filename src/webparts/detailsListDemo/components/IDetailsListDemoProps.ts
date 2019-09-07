import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IDetailsListDemoProps {
  description: string;
  context: WebPartContext;
  isLocal: boolean;
}
