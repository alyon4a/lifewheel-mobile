import React, {Component} from 'react';
import { FlatList,
         StyleSheet,
         SafeAreaView,
         TouchableOpacity, 
         Text
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';

import HabitRow from './HabitRow'
import {fetchWeeklyHabitRecords} from './requests'
import HDatePicker from './HDatePicker';


class HabitWeekly extends Component {

    //TODO change to the date on date picker
    state = {
        habitRecords: [],
        date: '2020-03-16'
    }

    componentDidMount() {
        //TODO change to logged in user ID after auth is implemented
        
        
        fetchWeeklyHabitRecords(1, '2020-03-16').then(data => {
            this.setState({
                habitRecords: data,
            })
            // this.setState({habits: habits})
        })  
    }

   

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* TODO pass start date as a parameter and add a header row to display dates*/}
                
                <FlatList data={this.state.habitRecords}
                          renderItem={({ item }) => 

                                    <HabitRow habitRecord={item} 
                                              startDate={this.state.date}/> }

                          keyExtractor={item=>item.name}
                          />

            <TouchableOpacity onPress={this.props.done} 
                    title='Done'
                    style={styles.button}>
                        <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
            </SafeAreaView>
       );
    }
}

const styles = StyleSheet.create({
    // scrollView: {
    //   backgroundColor: Colors.lighter,
    //   marginTop: 82,
    //   paddingHorizontal: 24
    // },
    container: {
        flex: 1,
        marginTop: 15
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
    },
    
})


export default HabitWeekly