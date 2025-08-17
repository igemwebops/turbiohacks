'use client';

import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What is TURBIOHACKS?",
    answer: "TURBIOHACKS is the world's largest biohackathon, bringing together students, researchers, and industry professionals to solve real-world challenges in biotechnology and life sciences."
  },
  {
    question: "Who can participate in TURBIOHACKS?",
    answer: "TURBIOHACKS is open to students, researchers, professionals, and anyone passionate about biotechnology. We welcome participants from all backgrounds and skill levels."
  },
  {
    question: "What are the different tracks available?",
    answer: "We have four main tracks: Oncology, Food and Nutrition, Bio Manufacturing, and Therapeutics. Each track focuses on specific challenges and applications in biotechnology."
  },
  {
    question: "How long is the hackathon?",
    answer: "TURBIOHACKS is a multi-day event with intensive workshops, mentoring sessions, and project development time. Check our schedule for detailed timings."
  },
  {
    question: "What resources and support are provided?",
    answer: "We provide access to datasets, APIs, mentors, educational materials, and technical resources. Our team of experts will be available throughout the event to support participants."
  },
  {
    question: "Are there prizes for winners?",
    answer: "Yes! We have exciting prizes for winners in each track, including cash awards, mentorship opportunities, and potential collaboration offers from our sponsors."
  }
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="section-container">
        <div className="section-header">
          <Image
            src="/grey_planet.webp"
            alt="Grey planet"
            width={80}
            height={80}
            className="planet-icon"
          />
          <h2 className="section-title">FAQ</h2>
        </div>
        
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '15px !important',
                marginBottom: '0.75rem',
                '&:before': {
                  display: 'none',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  '& .MuiAccordionSummary-content': {
                    margin: '1rem 0',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: '#E0E0FF',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  paddingTop: 0,
                }}
              >
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
