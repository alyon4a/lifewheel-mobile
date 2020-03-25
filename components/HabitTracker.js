import React, {Component} from 'react';
import { ScrollView,
         StyleSheet,
         TouchableOpacity, 
         Text
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';

import Habit from './Habit'
import {fetchHabits, postHabitRecords} from './requests'
import HDatePicker from './HDatePicker';


class HabitTracker extends Component {
    state = {
        habits: [],
        date: '2020-03-18'
    }

    habitChange = (name) => {
        const habit = this.state.habits.find(habit => habit.name === name)
        habit.yes = !habit.yes
        const newHabits = this.state.habits
        this.setState({
            habits: newHabits
        });
    }

    onDateChange = (date) => {
        this.setState({
            date: date
        })
    }

    componentDidMount() {
        //TODO change to logged in user ID after auth is implemented
        fetchHabits(1).then(data => {
            const habits = []
            data.forEach(habit => habits.push({name: habit.name, yes: false}))
            console.log(habits)
            this.setState({habits: habits})
        })  
    }

    submit = () => {
        //TODO change to logged in user ID after auth is implemented
        //TODO change date to selected (instead of today)
       
        const habits = this.state.habits.filter(habit => habit.yes)
        const dateHabits = {date: this.state.date, habits: habits}

       // habits.forEach(habit => habit.yes_date = date)
        postHabitRecords(1, dateHabits)
        .then(habit_recs => console.log(habit_recs))
        this.props.done()
    }

    render() {
        return (<ScrollView contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                    <HDatePicker dateChange={this.onDateChange} 
                                 date={this.state.date}/>

                    {this.state.habits.map(habit =>  
                        <Habit habit={habit.name} 
                                      yes={habit.yes}
                                      onCheck={this.habitChange} 
                                      key={habit.name}/>)}
                        <TouchableOpacity onPress={this.submit} 
                                title='Done'
                                style={styles.button}>
                                    <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                </ ScrollView>);
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
      marginTop: 82,
      paddingHorizontal: 24
    },
    habitText: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#336633',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 40,
        marginLeft: 80,
        width: 200,
        height: 40,
        display: "flex"
      },
    buttonText: {
        fontSize: 24,
        
    }
})


export default HabitTracker