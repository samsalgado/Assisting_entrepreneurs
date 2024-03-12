import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
const Forum = () => {
    
    const [advice, setAdvice] = useState([
        {id: 1, description: 'Obtain credit, use secure card or Chime Credit Boost'},
        {id: 2, description: 'Pick a Scalable Business Model'},
        {id: 3, description: 'Diversify - eQRP, ETF, Tax Liens and Deeds, start a side hustle'},
    ]);
    const [newAdvice, setNewAdvice] = useState({description: ''});
    const addAdvice = () => {
        setAdvice([... advice, {id:advice.length + 1, ...newAdvice}]);
        setNewAdvice({description: ''});
    };
    return(
        <View style={style.box}>
            {advice.map(advice => (
                <View key={advice.id}>
                    <Text>{advice.description}</Text>
                    </View>

            ))}
            <TextInput
                placeholder='Enter Advice'
                value={advice.description}
                onChangeText={text => setNewAdvice({...newAdvice, description: text})}
                />
                <Button title="Add Advice" onPress={addAdvice} />
                </View>
    )   
}
//Build Box Container
const style = StyleSheet.create({
    box: {
        flex: 0.5,
        marginTop: 0,
        backgroundColor: 'white',
        borderWidth: 3,
        borderTopLeftRadius: 10,
        paddingStart: 10,
        borderTopRightRadius: 10,
        padding: 5,
        marginStart: 55,
        top: -150,
        height: 350,
        left: 90,
        marginHorizontal: 0,
    }
});
export default Forum;
