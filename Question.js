import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

const Question = (props) => {
    const [visible, setVisible] = useState(false);
    const isClicked = !props.id === props.selectedQuestion;

    const handleClick = () => {
        setVisible(!visible);
    };
    const handleCircularPress = () => {
        props.onAnswerSelect(props.id);
        // setIsClicked(!isClicked);
    };

    const circularStyle = {
        ...styles.circular,
        borderWidth: isClicked ? 6 : 1
    };
  return (
    <View>
        <Text style ={styles.question}>{props.question}</Text>
        <TouchableOpacity onPress={() => props.onAnswerSelect(props.id)}>
            <View style={styles.items} >
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                    <Text style={styles.itemText} >{props.text}</Text>
                </View>
                <TouchableOpacity onPress={handleCircularPress}>
                    <View style={circularStyle}></View>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '50%',

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }


});

export default Question;
