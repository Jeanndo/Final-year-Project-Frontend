import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const ResultTable = ({ RESPONSE }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>APPLICANT ID</strong>
            </TableCell>
            <TableCell align="right">
              <strong>PREDICTION RESULT</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RESPONSE &&
            Object.keys(RESPONSE).map((key, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell align="right">
                  {RESPONSE[key] === "Y" ? "Eligible" : "Not Eligible"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ResultTable
