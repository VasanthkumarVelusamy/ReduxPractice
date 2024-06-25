import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import {incrementCounterAction, decrementCounterAction} from './Context/Actions/CounterActions'
import { connect } from 'react-redux';

const Counter = ({count, incrementCounterAction, decrementCounterAction}) => {
    return (
      <View style={styles.container}>
        {/* This View will take up the entire screen with a yellow background */}
        <Text>{count}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button title=" + " onPress={incrementCounterAction}/>
            <Button title=" - " onPress={decrementCounterAction}/>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'yellow',
        margin: 'auto'
    },
});
  
const mapActionsToProps = {
    incrementCounterAction,
    decrementCounterAction
}

const mapStateToProps = (something) => ({
    count: something.counter.count
})

export default connect(mapStateToProps, mapActionsToProps) (Counter)