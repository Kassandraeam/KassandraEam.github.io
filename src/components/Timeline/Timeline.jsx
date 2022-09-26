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

import Typography from '@mui/material/Typography';
import { saveAs } from "file-saver";


import bgImg from '../Timeline/Spaceship.gif';
import Resume from '../Timeline/Resume.gif';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import About from '../About/About';
import Experience from '../Experience/Experience';
import ExampleProjects from '../ExampleProjects/ExampleProjects';
import 'animate.css';
import Carousel from '../CarouselComponent/Carousel';
import CardComponent from '../Cardcomponent/Cardcomponent';



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
            <img src={bgImg} alt="/"/>
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

          <div id = 'ResumeImg' className='flex justify-center object-scale-down h-48 w-96 ml-10'>
            <img src={Resume} alt="/" onClick={saveFile}/>
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
          {/* <div className='flex justify-center object-scale-down h-48 w-96 ml-10'>
            <img src={bgImg} alt="/" />
          </div> */}
          {/* <Carousel/> */}
          <CardComponent/>


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