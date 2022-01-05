import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import "./Result.css";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Result(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "fit-content" }} aria-label="customized table">
        <TableBody>
          {props.array.map((row) => (
            <StyledTableRow key={row}>
              <td className="cell" align="center">
                {typeof row[0] === "number"
                  ? Math.round(row[0].toExponential(4))
                  : props.showNumbers
                  ? `${row[0][0]} ${row[0][1]}`
                  : row[0][1]}
              </td>
              <td className="cell" align="center">
                {typeof row[1] === "number"
                  ? Math.round(row[1].toExponential(4))
                  : props.showNumbers
                  ? `${row[1][0]}  ${row[1][1]}`
                  : row[1][1]}
              </td>
              <td className="cell" align="center">
                {typeof row[2] === "number"
                  ? Math.round(row[2].toExponential(4))
                  : props.showNumbers
                  ? `${row[2][0]}  ${row[2][1]}`
                  : row[2][1]}
              </td>
              <td className="cell" align="center">
                {typeof row[3] === "number"
                  ? Math.round(row[3].toExponential(4))
                  : props.showNumbers
                  ? `${row[3][0]}  ${row[3][1]}`
                  : row[3][1]}
              </td>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
