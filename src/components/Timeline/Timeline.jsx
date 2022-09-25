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
import { saveAs } from "file-saver";


import bgImg from '../Timeline/Spaceship.gif';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import About from '../About/About';
import Experience from '../Experience/Experience';
import ExampleProjects from '../ExampleProjects/ExampleProjects';



const TimelineComponent = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1FjhTDiy7NL3ZvroLLppqtvgmykRGkqXK/view?usp=sharing"
    );
  };
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
          <button className='flex py-10 px-10 ml-40' onClick={saveFile}><DownloadIcon className='h-6 mr-2' />Resume!</button>



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