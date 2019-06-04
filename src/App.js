import React from 'react';
import styled from 'styled-components';
import CarOutLineWheels from './assets/Car Oultine Wheels.svg';
import CarOutLineBrakes from './assets/Car Outline Brakes.svg';
import CarOutLineBattery from './assets/Car Outline Battery.svg';
import BatteryImg from './assets/battery.svg';
import BrakesImg from './assets/Brakes.svg';
import WheelsImg from './assets/Wheel.svg';
const contents = [
  {
    title:
      ' your fuel economy declines due to tire inflation within the next 2 weeks',
    percent: '11% Chance',
    color: 'orange',
    alert: 'Alert Potential Tire Inflation Issue',
    text1:
      'Reading your car data we believe your tires may be significantly deflated, reducing your fuel economy and potentially  causing harm to your tires.',
    points: ['Increased fuel costs.', 'Potential tire damage.'],
    recommendation:
      'Check your tire pressure and inflate them within the next two weeks to improve your fuel economy. ',
    image: CarOutLineWheels,
  },
  {
    title: ' of having worn out brakes within the next 2 weeks',
    percent: '6% Chance',
    color: 'yellow',
    alert: 'Alert Potential Significant Brake Wear',
    text1:
      'Your brakes may be sigificantly worn out. Maintaining your brakes is important because it may cause further problems in the future.',
    points: ['More likely to end up in a collision.', 'May cause axle issues.'],
    recommendation:
      'Replace your brakes within the next week to avoid potential issues that may arise.',
    image: CarOutLineBrakes,
  },
  {
    title: ' of a battery failure within the next 2 weeks',
    percent: '20% Chance',
    color: 'red',
    alert: 'Alert Potential Battery Failure',
    text1:
      'Your battery is weak, check whether the connections are loose or corroded. Have the battery inspected or tested.',
    points: ['Vehicle may not start.', 'May cause computer issues.'],
    recommendation:
      'Replace your battery within the next week to avoid potential issues that may arise.',
    image: CarOutLineBattery,
  },
];

const Wrapper = styled.div`
  && {
    display: flex;
    height: 100%;
    align-items: stretch;
  }

  && > div {
    flex: 1;
  }

  .left {
    display: flex;
    flex-direction: column;
  }
  .left .filler {
    background: #000e25;
  }

  .left .image-container {
    flex: 1;
    height: 0;
    background: #000e25;
    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    position: relative;
    display: flex;
    align-items: flex-end;
  }

  .left .image-container img {
    width: auto;
    display: block;
    flex: 1;
    height: 100%;
    max-height: 350px;
    max-width: 100%;
  }
  .left .buttons {
    display: flex;
  }
  .left .buttons > * {
    flex: 1;
    text-align: center;
    background: #001a44;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .left .buttons > *.selected {
    background: #002259;
  }

  .left .buttons p {
    text-transform: uppercase;
    font-weight: 500;
  }

  .left .stats {
    display: inline-flex;
    margin: 0 auto;
    margin-bottom: 18px;
    align-items: center;
    margin-bottom: 12px;
  }

  .left .stats img {
    width: 40px;
    height: 40px;
    display: inline-block;
  }
  .left .stats p {
    font-size: 34px;
    display: inline-block;
    margin-left: 12px;
  }

  .right {
    display: flex;
    flex-direction: column;
  }

  .right h1 {
    margin-bottom: 0;
    background: #1457c5;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.1em;
    font-size: 22px;
  }

  .right .filler {
    background: #003182;
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .right h2 {
    color: #eff932;
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 18px;
  }
  .right p {
    max-width: 500px;
    margin-bottom: 12px;
  }
  .right .recommendation {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #123f8a;
  }
  .right h4 {
    color: #eff932;
    text-transform: uppercase;
    margin-top: 18px;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
  }
  .right h3 {
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.1em;
  }
`;

const Header = styled.div`
  background-color: #002259;
  p {
    margin: 0 auto;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 2;
    text-align: center;
    padding-top: 40px;
    letter-spacing: 0.1em;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

class App extends React.Component {
  state = {
    chosen: 0,
  };
  get content() {
    return contents[this.state.chosen];
  }
  render() {
    return (
      <Wrapper>
        <div className="left">
          <Header>
            <p>
              <span className={this.content.color}>{this.content.percent}</span>
              {this.content.title}
            </p>
          </Header>
          <div className="image-container">
            <img className="carImg" src={this.content.image} alt="" />
          </div>
          <div className="buttons">
            <div
              className={this.state.chosen === 0 ? 'selected' : ''}
              onClick={() => this.setState({ chosen: 0 })}
            >
              <div className="stats orange">
                <img src={WheelsImg} alt="" />
                <p className="orange">11%</p>
              </div>
              <p>Wheels</p>
            </div>
            <div
              className={this.state.chosen === 1 ? 'selected' : ''}
              onClick={() => this.setState({ chosen: 1 })}
            >
              <div className="stats yellow">
                <img src={BrakesImg} alt="" />
                <p className="yellow">6%</p>
              </div>
              <p>Brakes</p>
            </div>
            <div
              className={this.state.chosen === 2 ? 'selected' : ''}
              onClick={() => this.setState({ chosen: 2 })}
            >
              <div className="stats red">
                <img src={BatteryImg} alt="" />
                <p className="red">20%</p>
              </div>
              <p>Battery</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Pitstop Vehicle Prognostics</h1>
          <div className="filler">
            <h2>{this.content.alert}</h2>
            <p>{this.content.text1}</p>
            <ul>
              {this.content.points.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="recommendation">
            <h2>Recommendation</h2>
            <p>{this.content.recommendation}</p>
            <h4>Repair By Date Recommendation</h4>
            <h3>July 25, 2019</h3>
            <h4>Approximate Cost of Repair</h4>
            <h3>$85.57-96.80</h3>
            <button onClick={() => this.props.history.push('/book')}>
              Book Appointment
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
