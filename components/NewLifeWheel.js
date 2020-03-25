import React, {Component} from 'react';
import { ScrollView,
         StyleSheet,
         TouchableOpacity, 
         Text
        } from 'react-native';
import {
        Colors
        } from 'react-native/Libraries/NewAppScreen';

import LifeCategory from './LifeCategory'
import {fetchCategories, postLifeWheel} from './requests'


class NewLifeWheel extends Component {
    state = {
        categories: []
    }

    scoreChange = (name, score) => {
        this.state.categories.find(category => category.name === name).score = score
        const newCategories = this.state.categories
        this.setState({
            categories: newCategories
        });
    }

    componentDidMount() {
        //TODO change to logged in user ID after auth is implemented
        fetchCategories(1).then(data => {
            const categories = []
            data.forEach(category => categories.push({name: category.name, score: 5}))
            this.setState({categories: categories})
        })  
    }

    submit = () => {
        //TODO change to logged in user ID after auth is implemented
        postLifeWheel(1, this.state.categories)
        .then(wheel => this.props.done(wheel))
    }

    render() {
        return (<ScrollView contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>

                    {this.state.categories.map(category =>  
                        <LifeCategory category={category.name} 
                                      score={category.score}
                                      onSlider={this.scoreChange} 
                                      key={category.name}/>)}
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
      marginTop: 62,
      paddingHorizontal: 24
    },
    categoryText: {
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


export default NewLifeWheel