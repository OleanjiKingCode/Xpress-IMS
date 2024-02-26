export type FieldType = {
  productName: string;
  productType: string;
  cost: number;
  dop: string;
  barcodeId: string;
};

export type EditFieldType = {
  editProductName: string;
  editProductType: string;
  editCost: number;
  editDop: string;
  editBarcodeId: string;
};

export interface DataType {
  key: string;
  productName: string;
  productType?: string;
  barcodeId: number;
  approvalStatus?: string;
  cost: number;
  dop: string;
  tag: string;
}

export const SortOptions = [
  { value: "type", label: "Type" },
  { value: "date", label: "Date" },
  { value: "asc", label: "Ascending Order" },
  { value: "dsc", label: "Descending Order" },
];
