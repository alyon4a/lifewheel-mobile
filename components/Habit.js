import React, {Component} from 'react';
import { 
         View,
         StyleSheet
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';

import { CheckBox } from 'react-native-elements'


class Habit extends Component {
    

    render() {
        
        return (<View contentInsetAdjustmentBehavior="automatic"
                      style={styles.view}>
                    <CheckBox
                        textStyle={styles.habitText}
                        title={this.props.habit}
                        //TODO style differently with my own icons
                        // checkedIcon='dot-circle-o'
                        // uncheckedIcon='circle-o'
                        checked={this.props.yes}
                        onPress={() => this.props.onCheck(this.props.habit)}
                        />
                </ View>);
    }
}

const styles = StyleSheet.create({
    view: {
    //   backgroundColor: Colors.lighter,
      marginTop: 12,
      paddingHorizontal: 24
    },
    habitText: {
        fontSize: 24,
        fontWeight: '600',
        // color: Colors.black,
    }
})


export default Habit