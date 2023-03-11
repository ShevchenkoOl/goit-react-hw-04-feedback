import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import { Container } from './FeedbackOptions/Feedback.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const leaveFeedback = name => {
    switch (name) {
      case 'good': setGood(prevGood => prevGood+1);
            break;
      case 'neutral': setNeutral(prevNeutral => prevNeutral+1);
            break;
      case 'bad': setBad(prevBad => prevBad+1);
            break;
            default:return;
    }
      };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  
    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            names={['good', 'neutral', 'bad']}
            onFeedback={leaveFeedback}
          />
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
        <GlobalStyle />
      </Container>
    );
  }
