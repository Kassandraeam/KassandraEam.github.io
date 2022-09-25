import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import bgImg from '../Timeline/Spaceship.gif';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import About from '../About/About';
import Experience from '../Experience/Experience';
import ExampleProjects from '../ExampleProjects/ExampleProjects';



const TimelineComponent = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className='flex justify-center object-scale-down h-48 w-96 ml-10'>
            <img src={bgImg} alt="/" />
          </div>

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary" variant="outlined">
            {/* STAR */}
            <AutoAwesomeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          </Typography>
          <About />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >



         <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className='flex justify-center object-scale-down h-48 w-96 ml-10'>
            <img src={bgImg} alt="/" />
          </div>



        </TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary" variant="outlined">
            {/* MAC */}
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          </Typography>
          <Experience />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>


      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className='flex justify-center object-scale-down h-48 w-96 ml-10'>
            <img src={bgImg} alt="/" />
          </div>



        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* BED */}
          <TimelineDot color="secondary" variant="outlined">
            <AccountTreeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          </Typography>
          <ExampleProjects />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent