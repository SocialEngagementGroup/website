import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'How do you decide what makes sense for our firm?',
    answer:
      'We start by understanding where your firm is today, what’s already working, what isn’t, and where the real opportunities are. From there, we prioritize the channels and tactics most likely to drive meaningful results for your practice, not a generic template.',
  },
  {
    question: 'Is this a one-size-fits-all marketing package?',
    answer:
      'No. Every firm has different goals, markets, and competitive pressures. Our role is to adapt the strategy to your specific practice area, location, and growth priorities.',
  },
  {
    question: 'How involved do we need to be?',
    answer:
      'We keep your involvement focused and efficient. We handle the day-to-day execution and optimization, while keeping you informed with clear reporting and regular check-ins—so marketing doesn’t become a distraction.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We track what actually matters: visibility, inbound inquiries, and how those inquiries translate into real cases. You’ll have clear insight into what’s working and where adjustments are being made.',
  },
  {
    question: 'How quickly should we expect to see results?',
    answer:
      'Some channels, like paid search, can produce results quickly. Others, like organic visibility, build steadily over time. Our goal is to balance short-term momentum with long-term stability.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
