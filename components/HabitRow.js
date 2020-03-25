import React, {Component} from 'react';
import { View,
         StyleSheet,
         TouchableOpacity, 
         Text
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';


class HabitRow extends Component {
    state = {
        weekDays: []
    }

    // scoreChange = (name, score) => {
    //     this.state.categories.find(category => category.name === name).score = score
    //     const newCategories = this.state.categories
    //     this.setState({
    //         categories: newCategories
    //     });
    // }

    getDay = (date) => {return parseInt(date.split('-')[2])}

    componentDidMount() {
        //TODO implement end of month dates calc
        const weekDays = [];
        const startDay = this.getDay(this.props.startDate);
        const yesDays = this.props.habitRecord.habit_dates.map(date => this.getDay(date))
        for (let i = 0; i < 7; i++) {
            const day = startDay + i;
            weekDays[i] = {day: day, yes: yesDays.includes(day)};
        }
        
        this.setState({
            weekDays: weekDays
        })
    }

    done = () => {
        //TODO move to another screen
    }

    render() {
        return (<View contentInsetAdjustmentBehavior="automatic"
                            style={styles.view}>
                    <View style={styles.habitName}>
                        <Text style={styles.text}>
                            {this.props.habitRecord.name}
                        </Text>
                    </View>
                    {this.state.weekDays.map(weekDay => 
                    <View style={weekDay.yes ? styles.yesCell : styles.cell} key={weekDay.day}>
                        <Text style={styles.text}>
                            {weekDay.day}
                        </Text>
                    </View>)}
                </ View>);
    }
}

const styles = StyleSheet.create({
    view: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Colors.lighter,
      marginTop: 62,
      paddingHorizontal: 24
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    habitName: {
        width: 100
    },
    cell: {
        width: 34,
        height: 34,
        marginLeft: 5
    },
    yesCell: {
        width: 34,
        height: 34,
        marginLeft: 5,
        backgroundColor: 'green'
    }
    
})


export default HabitRow