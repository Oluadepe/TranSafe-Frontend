import React, { useState } from 'react'
import { TextField, FormControl, Grid, InputLabel, Select, MenuItem } from '@mui/material'

const TrainDetailsForm = () => {
  const [trainData, setTrainData ] = useState({
    step: 1, firstname: '', lastname: '',
    email: '', phonenumber: '', nooftickets: '',
    amount: '', seat: '', tickettype: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrainData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(trainData); // Prints the form data to the console
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col w-3/6 mx-auto items-center bg-green-100 rounded-md p-6'>
        <Grid container spacing={0} alignItems="center" className="flex justify-between">  
        <Grid items>
        <TextField 
         label="First Name"
         variant="outlined"
         name="firstname"
         size="small"
         margin='normal' required
         value={trainData.firstname}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <TextField 
         label="Last Name"
         variant="outlined"
         name="lastname"
         size="small"
         margin='normal'
         value={trainData.lastname}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <TextField 
         label="Email"
         variant="outlined"
         name="email"
         size="small"
         margin='normal'
         value={trainData.email}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <TextField 
         label="Phone Number"
         variant="outlined"
         name="phonenumber"
         size="small"
         margin='normal'
         value={trainData.phonenumber}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <TextField 
         label="No of tickets"
         variant="outlined"
         name="nooftickets"
         size="small"
         margin='normal'
         value={trainData.nooftickets}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <TextField 
         label="Amount"
         variant="outlined"
         name="amount"
         size="small"
         margin='normal'
         value={trainData.amount}
         onChange={handleInputChange}
        />
        </Grid>
        <Grid items>
        <InputLabel id="seatType">Choose Seat</InputLabel>
          <Select
            labelId="seatType"
            id="demo-simple-select"
            label="seat" sx={{ minWidth: 220 }} size='small' margin='normal'
            value={trainData.seat}
            onChange={handleInputChange}>
            <MenuItem value="mr">BL102</MenuItem>
            <MenuItem value="mrs">AR104</MenuItem>
            <MenuItem value="ms">CLA201</MenuItem>
          </Select> 
        </Grid>
        <Grid items>
        <InputLabel id="typeticket">Ticket Type</InputLabel>
          <Select
            labelId="typeticket"
            id="demo-simple-select"
            label="Title" sx={{ minWidth: 220 }} size='small' margin='normal'
            value={trainData.tickettype}
            onChange={handleInputChange}>
            <MenuItem value="firstclass">First Class</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="coach">Coach</MenuItem>
          </Select> 
        </Grid>
        </Grid>
        <button className='bg-green-700 text-white py-3 w-4/6 mx-auto text-white font-semibold my-5'>Submit</button>
        </form>
    </div>
  )
}

export default TrainDetailsForm;