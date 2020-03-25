import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class HDatePicker extends Component {

  render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.props.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 5,
              marginLeft: 36
            },
            dateInput: {
              marginLeft: 76,
              top: 5
            }
          }}
          onDateChange={date => this.props.dateChange(date)}
        />
      )
    }
}