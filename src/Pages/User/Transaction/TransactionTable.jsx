import * as React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, TableFooter, Box, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io"
import Logo from "../../../assets/home/logo.svg"

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <IoMdSkipForward /> : <IoMdSkipBackward />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <FaAngleRight /> : <FaAngleLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <FaAngleLeft /> : <FaAngleRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <IoMdSkipBackward /> : <IoMdSkipForward />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

function createData(index, date, traintype, arrival, destination, amount) {
  return { index, date, traintype, arrival, destination, amount };
}

const rows = [
  createData(1, "02-MAR-2023/02:56 PM", "LG03", "Ebute Metta", "Challenge", 2100),
  createData(2, "09-MAR-2023/08:00 AM", "IB04", "Iwo", "Abeokuta", 3000),
  createData(3, "22-MAR-2023/06:00 aM", "LG03", "Ebute Meta", "Abeokuta", 2100),
  createData(4, "01-APR-2023/02:00 PM", "LG03", "Abeokuta", "Challenge", 3500),
  createData(5, "06-APR-2023/12:00 PM", "LG03", "Abeokuta", "Ebute Meta", 2500),
  createData(6, "19-APR-2023/10:00 AM", "LG03", "Iwo", "Lagos", 2100),
];

const TransactionTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState([]);

    const handleClose = () => {
      setOpen(false)
    };

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      bgcolor: 'background.paper',
      boxShadow: 24,
    };
  
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead className='bg-green-100'>
          <TableRow>
            <TableCell sx={{width: 15}}>S/N</TableCell>
            <TableCell align="right">Booked Date/Time</TableCell>
            <TableCell align="right">Train Type</TableCell>
            <TableCell align="right">Departure Station</TableCell>
            <TableCell align="right">Arrival Station</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Tickets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">{row.index}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.traintype}</TableCell>
              <TableCell align="right">{row.arrival}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right"><button className='border-2 p-2 border-green-700 rounded-md' onClick={() => {
                setOpen(true) 
                setSelectedRow({...row})}}>View Ticket</button></TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
               rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className='bg-green-100 p-4 flex items-center justify-between'>
              <img src={Logo} alt="" className='w-16'/>
              <div className='text-green-700'>
              <h3 className='text-lg font-semibold'>Train Number</h3>
              <p className='font-sm'>{selectedRow.traintype}</p>
              </div>
            </div>
            <div className='bg-green-700 text-white flex justify-between p-4 rounded-tl-md rounded-tr-md'>
              <div>
              <p>From:</p>
              <h3 className='text-lg font-semibold mb-4'>{selectedRow.destination}</h3>
              <p>Departure Time:</p>
              <h3 className='text-lg font-semibold mb-4'>{selectedRow.date}</h3>
            </div>
            <div>
              <p>To:</p>
              <h3 className='text-lg font-semibold mb-4'>{selectedRow.arrival}</h3>
              <p>Amount:</p>
              <h3 className='text-lg font-semibold mb-4'>₦{selectedRow.amount}</h3>
              <p>emmanuelisrael@mail.com</p>
            </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  </div>
  );
}

export default TransactionTable;