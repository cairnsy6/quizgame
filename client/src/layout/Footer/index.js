import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './index.css'

const steps = [
  'Welcome',
  'Start Game',
  'Play Game',
  'Results',
];

const Footer =()=> {

  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    switch(window.location.pathname){
      case '/':
        setPageNumber(1);
      break;
      case '/game-settings':
        setPageNumber(2);
      break;
      case '/lobby':
        setPageNumber(2);
      break;
      case '/game':
        setPageNumber(3);
      break;
      case '/result':
        setPageNumber(4);
      break;
      default:
        setPageNumber(1) 
    }
    return pageNumber
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={pageNumber} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Footer;