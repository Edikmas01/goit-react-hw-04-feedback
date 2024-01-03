import {  useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  //  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleFeedback = feedbackType => {

    switch (feedbackType) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
    
      default:
        return;
    }
  };

  // const handleFeedback = (feedbackType) => {
  //   setFeedback(prev => ({
  //     ...prev,
  //     [feedbackType]: prev[feedbackType] +1,
  //   }))
  // };

  const countTotalFeedback = () => good + neutral + bad;

   const countPositiveFeedbackPercentage = () =>
     countTotalFeedback() === 0
       ? 0
      : Math.round((good / countTotalFeedback()) * 100);
  
return (
  <div
    style={{
      height: '100vh',
      justifyContent: 'center',
      color: '#010101',
      marginLeft: '15px',
    }}
  >
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{good,neutral,bad}}
        onLeaveFeedback={handleFeedback}
      />
    </Section>

    <Section title="Statistics">
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  </div>
);
}