import React, {Component} from 'react';
import { Text,
         View,
         StyleSheet
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';

import Slider from '@react-native-community/slider';

class LifeCategory extends Component {

    sliderChange = (score) => {
        this.props.onSlider(this.props.category, score)
    }

    render() {
        
        return (<View contentInsetAdjustmentBehavior="automatic"
                      style={styles.view}>
                    <Text style={styles.categoryText}>{this.props.category}</ Text>
                    <Slider
                        style={{width: 300, height: 40}}
                        minimumValue={1}
                        maximumValue={10}
                        value={this.props.score}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#FFFFFF"
                        onSlidingComplete={this.sliderChange}
                    />
                </ View>);
    }
}

const styles = StyleSheet.create({
    view: {
      backgroundColor: Colors.lighter,
      marginTop: 62,
      paddingHorizontal: 24
    },
    categoryText: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    }
})


export default LifeCategory