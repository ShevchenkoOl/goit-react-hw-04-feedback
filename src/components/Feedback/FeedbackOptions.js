
//import { Component } from 'react';
import PropTypes from 'prop-types'
import {  List,
          Button
        } from "./Feedback.style";

       

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
return (
    
    <List>
      {options.map(option => (
      <Button
        key={option}
        onClick={onLeaveFeedback(option)} type="button">
        {option}
      </Button>
    ))}   
    
    </List>
  );
    };

export default FeedbackOptions;

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

