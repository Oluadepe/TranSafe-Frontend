import * as React from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import TrainDetailsForm from '../Form/TrainDetailsForm';
import ConfirmPaymentDetails from '../Form/ConfirmPaymentDetails';
import PaymentDetailsForm from '../Form/PaymentDetailsForm';

const steps = ['Book A Train', 'Make Payment', 'Confirm Payment'];

const BookTrain = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [trainDetails, setTrainDetails] = React.useState({});
  const [paymentDetails, setPaymentDetails] = React.useState({});
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setTrainDetails({});
    setPaymentDetails({});
  };
  
  const handleTrainDetailsSubmit = (details) => {
    setTrainDetails(details);
    handleNext();
  };

  const handlePaymentDetailsSubmit = (details) => {
    setPaymentDetails(details);
    handleNext();
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <TrainDetailsForm onSubmit={handleTrainDetailsSubmit} />;
      case 1:
        return <PaymentDetailsForm onSubmit={handlePaymentDetailsSubmit} />;
      case 2:
        return <ConfirmPaymentDetails trainDetails={trainDetails} paymentDetails={paymentDetails} />;
      default:
        return null;
    }
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 0:
        return Object.keys(trainDetails).length > 0;
      case 1:
        return Object.keys(paymentDetails).length > 0;
      default:
        return true;
    }
  };

  return (
    <main className='w-11/12 mx-auto mt-8'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
             </Button>
            </Box>
         </React.Fragment>
      )}
          </Box>
     </main>
   );
 }

 export default BookTrain
