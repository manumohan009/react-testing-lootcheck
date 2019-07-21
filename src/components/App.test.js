import React from 'react';
import {shallow, render, mount } from './enzyme';
import App from './App';

describe('App', ()=>{
    const app = shallow(<App/>);
    it('renders correctly', ()=>{
        expect(app).toMatchSnapshot();
    });

    it('contains a connected wallet component', ()=>{
        // console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
})