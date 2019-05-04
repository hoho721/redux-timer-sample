import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';
import {connect} from 'react-redux';
import {fetchAddSecond, fetchRestartTimer, fetchStartTimer} from "../../Action/actions";

class Timer extends Component {

    render() {
        const {isPlaying} = this.props;

        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>23:00</Text>
                </View>
                <View style={styles.lower}>

                    {
                        isPlaying ? <Button iconName="stop-circle" onPress={this._pressStop.bind(this)}/> :
                            <Button iconName="play-circle" onPress={this._pressStart.bind(this)}/>
                    }
                </View>
            </View>
        )
    }

    _pressStart() {
        this.props.dispatch(fetchStartTimer())
    }

    _pressStop() {
        this.props.dispatch(fetchRestartTimer())
    }

    _addSecond() {
        this.props.dispatch(fetchAddSecond())
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CE0B24'
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: '100'
    }
});


export default Timer;