import React, { Component } from 'react';
import styled from 'styled-components';
import { Rate, Divider, DatePicker, Checkbox, Modal } from 'antd';
import Image1 from 'assets/001-repair.svg';
import Image2 from 'assets/002-car.svg';
import Image3 from 'assets/003-repair.svg';
import Image4 from 'assets/004-car.svg';
import BrakeImg from 'assets/Brake.svg';

const Wrapper = styled.div`
  background: #06327a;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  .left {
    width: 60%;
    height: 100%;
    overflow-y: scroll;
  }
  .right {
    width: 40%;
    padding: 40px;
    background: #003182;
  }
  h3,
  h4 {
    color: #fff;
    text-transform: uppercase;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: 800;
  }
  h4 {
    margin-bottom: 16px;
  }
  p.gray {
    color: #c0c0c0;
    line-height: 1.5;
    letter-spacing: 0.2em;
    margin-bottom: 12px;
  }
  .ant-divider {
    background: #1a69eb;
    height: 3px;
  }
`;

const Shop = styled.div`
  border-right: 4px solid #0e4db5;
  border-bottom: 4px solid #0e4db5;
  padding: 40px;
  background: ${props => (props.selected ? '#05428a' : '#06327a')};
  display: flex;
  align-items: stretch;

  && > img {
    width: 90px;
    height: 90px;
    padding: 20px;
    margin-right: 20px;
    background: #002157;
  }

  && > div {
    flex: 1;
  }
  p {
    margin-bottom: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  p span {
    font-weight: 400;
  }
  .ant-rate {
    margin-left: 12px;
  }
  h3 {
    color: #eff932;
    display: inline-block;
    padding-right: 20px;
    padding-left: 20px;
  }
  h3.pricing {
    padding-left: 0px;
    border-right: 2px solid #fff;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  background: none;
  border: 4px solid #0e4db5;
  border-radius: 0px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 8px 10px;
  && input {
    font-size: 20px;
    background: none;
    border: none;
    color: #fff;
  }
`;
const CustomCheckbox = styled(Checkbox)`
  background: none;
  border: 4px solid #0e4db5;
  border-radius: 0px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  background: none;
  color: #fff;
  padding: 8px 10px;
`;

const PartListItem = styled.div`
  border-bottom: 4px solid #1e1e1e;
  padding: 40px;
  background: #00000041;
  display: flex;
  align-items: stretch;

  && > img {
    width: 90px;
    height: 90px;
    padding: 20px;
    margin-right: 20px;
    background: #3d3d3d;
  }

  && > div {
    flex: 1;
  }
  p {
    margin-bottom: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
  }
  span {
    font-weight: 400;
  }
  .ant-rate {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  p.pricing {
    font-weight: 400;
    letter-spacing: 0.2em;
  }
`;

const shops = [
  {
    title: 'GB Autos',
    cost: '85.57',
    distance: '2.3',
    rating: 4.5,
    address: '1509 The Queensway, Etobicoke, ON M8Z 1T3',
    experienced:
      'Serviced 28 vehicles with the same make and model\nThey have recently dealt with a similar issue in the last week.',
    image: Image1,
  },
  {
    title: "Rob's Autoshop ",
    cost: '90.21',
    distance: '2.4',
    rating: 4,
    address: ' 6 Shamrock Rd, Toronto, Ontario N0B 1T0.',
    experienced:
      'Serviced 20 vehicles with the same make and model\nThey have recently dealt with a similar issue in the last week.',
    image: Image2,
  },
  {
    title: 'ATI Vehicles',
    cost: '82.21',
    distance: '3.7',
    rating: 4,
    address: ' 6 Shamrock Rd, Toronto, Ontario N0B 1T0',
    experienced: 'Serviced 28 vehicles with the same make and model',
    image: Image3,
  },
  {
    title: 'Sun Hing Auto Service',
    cost: '86.21',
    distance: '5.7',
    rating: 4.3,
    address: '77 Grange Av, Toronto, ON M5T 1E2',
    experienced: 'Serviced 10 vehicles with the same make and model',
    image: Image4,
  },
  {
    title: 'Auto Limited',
    cost: '85.11',
    distance: '5.8',
    rating: 3,
    address: '62 Dundas St W, Toronto, ON M5T 1H7',
    experienced:
      'Serviced 13 vehicles with the same make and model\nThey have recently dealt with a similar issue in the last month.',
    image: Image3,
  },
];

const parts = [
  {
    name: 'Bosch BC210',
    rating: 4,
    amount: 23,
    cost: 34.75,
  },
  {
    name: 'PowerStop K406',
    rating: 5,
    amount: 4,
    cost: 29.99,
  },
  {
    name: 'Brembo Brakes',
    rating: 4,
    amount: 12,
    cost: 68.45,
  },
];

export default class Book extends Component {
  state = { selected: 0, showModal: false, parts: undefined };

  get shop() {
    return shops[this.state.selected];
  }
  render() {
    return (
      <Wrapper>
        <div className="left">
          {shops.map((el, i) => (
            <Shop
              key={el.title}
              selected={i === this.state.selected}
              onClick={() => this.setState({ selected: i })}
            >
              <img src={el.image} alt="" />
              <div>
                <p>
                  {el.title}
                  <Rate disabled defaultValue={el.rating} />
                  <span>{el.rating}</span>
                </p>
                <h3 className="pricing">${el.cost}</h3>
                <h3>{el.distance}km Away</h3>
              </div>
            </Shop>
          ))}
        </div>
        <div className="right">
          <h3>{this.shop.title}</h3>
          <p>{this.shop.address}</p>
          <Divider />
          <h4>Service Experiene</h4>
          {this.shop.experienced.split('\n').map((el, i) => (
            <p className="gray" key={i}>
              {el}
            </p>
          ))}
          <CustomDatePicker placeholder="Select A Date" />
          <p className="yellow">Save Time order replacement part in advance</p>
          <CustomCheckbox
            placeholder="Select A Date"
            onClick={() => this.setState({ showModal: true })}
            checked={this.state.parts !== undefined}
          >
            Order Parts
          </CustomCheckbox>
          <button onClick={() => this.props.history.push('/done')}>
            Book Now
          </button>
        </div>
        <Modal
          visible={this.state.showModal}
          footer={null}
          centered={true}
          header={null}
          title="Select a Brake Part"
          onCancel={() => this.setState({ showModal: false, parts: undefined })}
        >
          <h1>Select a Brake Part</h1>
          {parts.map(el => (
            <PartListItem
              onClick={() =>
                this.setState({ showModal: false, parts: el.name })
              }
            >
              <img src={BrakeImg} alt="" />
              <div>
                <p>{el.name}</p>
                <div>
                  <Rate disabled defaultValue={el.rating} />
                  <span>{el.amount}</span>
                </div>
                <p className="pricing">{el.cost}</p>
              </div>
            </PartListItem>
          ))}
        </Modal>
      </Wrapper>
    );
  }
}
