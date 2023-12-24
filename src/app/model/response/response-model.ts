import {InsuranceDocumentModel} from "../insurance-document/insurance-document-model";

export class ResponseModel {
  // @ts-ignore
  status: string;
  // @ts-ignore
  family: string;
  // @ts-ignore
  data: InsuranceDocumentModel[];
}
