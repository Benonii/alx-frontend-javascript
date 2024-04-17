import { RowId, RowElement } from "./interface.js"

export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): void;

export declare function updateRow(rowId: RowID, row: RowElement): RowID;
