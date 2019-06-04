import React, { Component } from 'react';
import styled from 'styled-components';
import CheckmarkImg from 'assets/Checkmark.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: #000e25;

  && > div {
    background: #002259;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
  }
  h1 {
    margin: 0 auto;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 800;
    color: #fff;
    margin-bottom: 20px;
    max-width: 400px;
  }
  img {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  p {
    padding: 20px 20px;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0 auto;
  }
`;

export default class Done extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <img src={CheckmarkImg} alt="" />
          <h1>Your Appointment Has Been Booked</h1>
          <p className="yellow" onClick={() => this.props.history.push('/')}>
            Return to Dashboard
          </p>
        </div>
      </Wrapper>
    );
  }
}
