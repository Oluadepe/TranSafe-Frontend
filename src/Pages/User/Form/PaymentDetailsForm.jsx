import React, { useState } from 'react'
import { TextField, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, Box, FormControl } from '@mui/material'

const PaymentDetailsForm = () => {
  const [cardOption, setCardOption] = useState('');

  const handleChange = (event) => {
    setCardOption(event.target.value);
  };
  return (
    <div className='w-3/6 mx-auto bg-green-100 p-6 rounded-md'>
      <div>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Card Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cardOption}
          label="Card Options"
          onChange={handleChange}
          size='small'
        >
          <MenuItem value="verve">Verve</MenuItem>
          <MenuItem value="mastercard">Mastercard</MenuItem>
          <MenuItem value="visa">Visa</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
        <div>
         <TextField 
         label="Name on Card"
         variant="outlined"
         name="nameoncard"
         size="small"
         margin='normal'
        />
        <TextField 
         label="Card Number"
         variant="outlined"
         name="cardnumber"
         size="small"
         margin='normal'
        />
        <div>
        <TextField 
         label="Expiry Date"
         variant="outlined"
         name="expirydate"
         size="small"
         margin='normal'
        />
         <TextField 
         label="CVV"
         variant="outlined"
         name="cvv"
         size="small"
         margin='normal'
        />
        </div>
        <FormControlLabel
            control={
                <Checkbox
                name="rememberCard"
                margin="normal"
                />
                }
                label="Remember this card next time"
              />        
        </div>
    </div>
  )
}

export default PaymentDetailsForm