import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Activity } from '../models/activity';

interface CreateActivityProps {
    updateActivityList: () => void;
}
 
function CreateActivity({ updateActivityList }: CreateActivityProps) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [error, setError] = React.useState('');

    const validateForm = () => {
    if (!title.trim()) {
      setError('Title is required');
      return false;
    }
    setError('');
    return true;
    }

    const Submit = () => {
        if (!validateForm()) return;
    
        const activity : Activity = {
            title: title,
            description: description,
            rate: rate
        };

        axios.post("http://localhost:3000/activity", activity)//para web
        .then(response => {
            Alert.alert("Success", "User added successfully");
            updateActivityList();
            setTitle('');
            setDescription('');
            setRate('')
        })
        .catch(error => {
            console.error("Failed to add user", error);
            Alert.alert("Error", "Failed to add user");
        });
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Title"
                value={title} 
                onChangeText={setTitle} 
                style={styles.input} 
            />
            <TextInput 
                placeholder="Description"
                value={description} 
                onChangeText={setDescription} 
                style={styles.input} 
            />
            <TextInput 
                placeholder="Rate"
                value={rate} 
                onChangeText={setRate} 
                style={styles.input} 
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View style={styles.buttonContainer}>
                <Button title="Añadir actividad" onPress={Submit} color="#007bff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default CreateActivity;