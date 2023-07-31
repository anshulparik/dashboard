import React from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../dataTableSource";

const actionColumn = [
  { field: "action", headerName: "Action", width: 200, renderCell: () => {
    return (
        <div className="cell-action">
            <div className="view-button">View</div>
            <div className="delete-button">Delete</div>
        </div>
    )
  } },
];

const DataTable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
