/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import NewLifeWheel from './components/NewLifeWheel'
import HabitTracker from './components/HabitTracker'
import HabitWeekly from './components/HabitWeekly'
import LifeWheels from './components/LifeWheels'

const HOME = 'home';
const HABIT_WEEKLY = 'habit_weekly';
const HABIT_TRACKER = 'habit_tracker';
const NEW_LIFE_WHEEL = 'new_life_wheel';
const LIFE_WHEELS = 'life_wheels';

export default class App extends Component {

  state = {
    currentView: HABIT_TRACKER
  }

  weeklyDone = () => {
    this.setState({
      currentView: NEW_LIFE_WHEEL
    })
  }

  trackerDone = () => {
    this.setState({
      currentView: HABIT_WEEKLY
    })
  }

  newLifeWheelDone = () => {
    this.setState({
      currentView: LIFE_WHEELS
    })
  }

  lifeWheelsDone = () => {
    this.setState({
      currentView: HABIT_TRACKER
    })
  }


  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic"
                                style={styles.scrollView}>
          {this.state.currentView === HABIT_WEEKLY && 
          <HabitWeekly done={this.weeklyDone}/>}

          {this.state.currentView === HABIT_TRACKER && 
          <HabitTracker done={this.trackerDone}/>}

          {this.state.currentView === NEW_LIFE_WHEEL && 
          <NewLifeWheel done={this.newLifeWheelDone}/>}

          {this.state.currentView === LIFE_WHEELS && 
          <LifeWheels done={this.lifeWheelsDone}/>}

        </ScrollView> 
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
