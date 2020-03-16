import React from 'react';
import styled from 'styled-components';

const InvalidDetailsModal = (props) => {

  // Render nothing if the "show" prop is false
  // if(!this.props.show) {
  //   return null;
  // }

  // The gray background
  const BackdropStyle = styled.div`
    position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.3);
      padding: 50px;
    `;

  // The modal "window"
  const ModalStyle = styled.div`
      background-color: white;
      border-radius: 5;
      max-width: 500;
      min-height: 300;
      margin: '0 auto';
      padding: 30
    `;

  return (
    <React.Fragment>
      <BackdropStyle>
        Invalid Details
        <ModalStyle>
          <button onClick={props.onClose}>
            Close
              </button>
        </ModalStyle>
      </BackdropStyle>
    </React.Fragment>

  )
}


export default InvalidDetailsModal;