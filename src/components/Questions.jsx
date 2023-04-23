import React, { useState } from "react"
import { Tabs, Tab, Typography, Box } from "@mui/material"
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const Questions = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        className="w-4/6 mx-auto my-12">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className="w-1/3">
         <Tab label="Tickets" {...a11yProps(0)} className="focus-within:bg-green-100 focus-within:rounded-md"/>
         <Tab label="Safety" {...a11yProps(1)} className="focus-within:bg-green-100 focus-within:rounded-md"/>
         <Tab label="Trains" {...a11yProps(2)} className="focus-within:bg-green-100 focus-within:rounded-md"/>
         <Tab label="Routes" {...a11yProps(3)} className="focus-within:bg-green-100 focus-within:rounded-md"/>
         <Tab label="Routes" {...a11yProps(3)} className="focus-within:bg-green-100 focus-within:rounded-md"/>
      </Tabs>
      <div className="bg-green-100 rounded-md w-2/3 ml-2">
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </div>
    </Box>
    )
}

export default Questions;