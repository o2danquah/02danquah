import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import Typography from '@mui/material/Typography';
function Resume() {
  return (
   <>
   
   <div className='row justify-content-center'>
    <h1 className='' style={{textAlign: 'center'}}>Resume</h1>
   </div>
   <div>
<Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right"  variant="body2" color="text.secondary">
          2016-2019
        </TimelineOppositeContent>
        <TimelineSeparator>
         
          <TimelineDot color="primary" >
            <ScienceIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Prempeh College
          </Typography>
          <Typography>General Science</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="primary">
            <SchoolIcon/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            University of Cape Coast
          </Typography>
          <Typography>BSc. Computer Science</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
      
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Nanti Systems
          </Typography>
          <Typography> Intern; Flutter, ReactJS, MySQL  </Typography>
          <Typography>IT Support</Typography>
        </TimelineContent>
      </TimelineItem>

      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary">
            <ElectricBoltIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Volta River Authorithy
          </Typography>
          <Typography>Intern PHP & MySQL</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2023 - Till date
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="primary">
           <LaptopMacIcon/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            University of Cape Coast
          </Typography>
          <Typography> Medical Education and IT, SMS</Typography>
          <Typography>IT Support</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2023 - Till date
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary">
            <WorkIcon/>
          </TimelineDot>
          
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Informatics Consult
          </Typography>
          <Typography>Chief Technology Officer</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
   </>
    
  )
}

export default Resume;