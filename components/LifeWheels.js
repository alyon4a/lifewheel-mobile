import React, {Component} from 'react';
import { FlatList,
         StyleSheet,
         SafeAreaView,
         TouchableOpacity, 
         Text
        } from 'react-native';
import {
        Colors, Header
        } from 'react-native/Libraries/NewAppScreen';

import LifeWheel from './LifeWheel'
import {fetchFullLifeWheels} from './requests'


class LifeWheels extends Component {

    state = {
        lifeWheels: []
    }

    componentDidMount() {
        //TODO change to logged in user
        
        fetchFullLifeWheels(1).then(data => {
            this.setState({
                lifeWheels: data,
            })
        })  
    }

   

    render() {
        return (
            <SafeAreaView style={styles.container}>
                
                <Text style={styles.text}>Life Wheels</Text>
                <FlatList data={this.state.lifeWheels}
                          renderItem={({ item }) => 

                                    <LifeWheel lifeWheel={item} 
                                              /> }

                          keyExtractor={item=>item.id}
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
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        marginTop: 50,
        marginBottom: 20,
        marginLeft: 150
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


export default LifeWheels