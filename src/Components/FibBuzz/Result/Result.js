import { DataGrid } from "@mui/x-data-grid";

let columns = [];

let rows = [];

export default function DataTable(props) {
  props.useBigInt
    ? (columns = [{ field: "num1", headerName: "", flex: 1, align: "center" }])
    : (columns = [
        { field: "num0", headerName: "", flex: 1, align: "center" },
        { field: "num1", headerName: "", flex: 1, align: "center" },
        { field: "num2", headerName: "", flex: 1, align: "center" },
      ]);

  rows = props.finalArr;

  return (
    <div
      style={{
        width: "100vw",
        height: "500px",
        align: "center",
      }}
    >
      <DataGrid
        align="center"
        cell--textCenter
        columnBuffer={0}
        disableExtendRowFullWidth={false}
        autoPageSize={true}
        disableColumnFilter={true}
        disableColumnSort={true}
        disableColumnSelector={true}
        disableColumnMenu={true}
        disableMultiSort={true}
        onColumnHeaderClick={() => {}}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        showPagination={true}
        showPaginationTop={true}
        loading={false}
      />
    </div>
  );
}
