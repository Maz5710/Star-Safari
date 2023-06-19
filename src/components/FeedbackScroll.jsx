import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function FeedbackScroll() {
    const feedbackRef = useRef(null);
  
    useEffect(() => {
      // Scroll to the bottom of the feedback container when component updates
      feedbackRef.current.scrollTop = feedbackRef.current.scrollHeight;
    }, []);
  
    const handleAddFeedback = () => {
      // Add your logic to handle adding feedback to the component's state or API
    };
  
    return (
      <div className="feedback-container" ref={feedbackRef}>
        {/* Render your feedback messages here */}
        <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span> Thanks Sam and Hari for creating an extraordinary place of learning! Discovered our Goldilocks planet, explored gravity, tides, Big Bang, galaxies, nebulae, ancient civilizations. Your passion sparked a fire in me. Grateful for this journey!<span><FontAwesomeIcon icon={faQuoteRight} /></span></p>
        <p>Feedback 2</p>
        <p>Feedback 3</p>
  
        <button onClick={handleAddFeedback}>Add Feedback</button>
      </div>
    );
  }

export default FeedbackScroll
