import Image from 'next/image';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

export default function Schedule() {
  const scheduleItems = [
    {
      date: 'August 11',
      title: 'Hackathon Launch',
      description: 'Official announcement and registration opens'
    },
    {
      date: 'September 4',
      title: 'Registration Deadline',
      description: 'Last day to register for the hackathon'
    },
    {
      date: 'September 5',
      title: 'Hackathon Day 1',
      description: 'Opening, Workshops, Guest Speeches'
    },
    {
      date: 'September 6-7',
      title: 'Hacking Period',
      description: 'Final submissions on Devpost by 9/7 12:00 UTC!'
    },
    {
      date: 'September 9',
      title: 'Result Declaration',
      description: 'Winners announcement'
    }
  ];

  return (
    <section className="schedule" id="schedule">
      <div className="section-container">
        <div className="section-header">
          <Image
            src="/orange_planet.webp"
            alt="Orange planet"
            width={80}
            height={80}
            className="planet-icon"
          />
          <h2 className="section-title">SCHEDULE</h2>
        </div>
        
        <div className="schedule-content">
          <Timeline 
            position="alternate"
            sx={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 0, 
              '&::before': { //Removes some weird ::before elements from materialUI
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
              '& .MuiTimeline-root': {
                padding: 0,
                '&::before': {
                  display: 'none',
                },
              },
              '& .MuiTimelineItem-root': {
                '&::before': {
                  display: 'none',
                },
                minHeight: 'auto',
              },
              '& .MuiTimelineItem-root:first-of-type': {
                minHeight: 'auto',
              },
            }}
          >
            {scheduleItems.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ 
                    m: 'auto 0',
                    color: '#E0E0FF',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                >
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {index !== 0 && (
                    <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
                  )}
                  <TimelineDot 
                    sx={{ 
                      bgcolor: '#8B5DBA',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 0 20px rgba(139, 93, 186, 0.6)'
                    }}
                  />
                  {index !== scheduleItems.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="span"
                    sx={{ 
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#E0E0FF',
                      fontSize: '0.95rem',
                      mt: 0.5
                    }}
                  >
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
