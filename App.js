import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

/*
* I can put export default  here or in bottom of code
* */

/*export default */
function App() {
    const [name, setName] = useState('eslam');
    /*this like object*/
    const [person, setPerson] = useState({name: 'eslam', age: 25});



    const clickHandler = () => {
        setName('ghazy')
        setPerson({name: 'gahzy', age: '24'})
    }
    return (
        <View style={styles.container}>
            {/*<View style={styles.header}>*/}
            {/*<Text style={styles.boldText}>Hello Eslam</Text>*/}
            {/*<StatusBar style="auto"/>*/}
            {/*</View>*/}
            <View style={styles.body}>
                <Text style={styles.boldText}> Guten <Text style={styles.body}>my name is => {person.name} and my age
                    is {person.age}</Text> morgan</Text>
                {/*<Text> Guten morgan</Text>*/}
                <View style={styles.buttomContainer}>
                    <Button title={'update name'} onPress={clickHandler}/>
                </View>
            </View>

            <View>
                <Text>Input name :</Text>
                {/*https://reactnative.dev/docs/textinput*/}
                <TextInput autoComplete={"email"} multiline={true} style={styles.input}
                           placeholder={'e.g. eslam'} onChangeText={(name) => {
                    setPerson({name: name})
                }}/>
                <Text>Input age :</Text>
                <TextInput  maxLength={2} keyboardType={"numeric"} style={styles.input} placeholder={'e.g. 20'}
                           onChangeText={(age) => {
                               setPerson({age: age})
                           }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: "pink",
        padding: 20
    },
    boldText: {
        fontWeight: "bold",
        backgroundColor: "blue",
        margin: 10
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20,
    },
    buttonContainer: {
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});


export default App