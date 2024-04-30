import React, { useState, useEffect } from "react";
import { Activity } from '../models/activity';
import axios from "axios";
import { View, Text, TouchableOpacity, RefreshControl, FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";

interface GetActivitiesProps { activitiesUpdated: boolean; }

const GetActivities: React.FC<GetActivitiesProps> = ({ activitiesUpdated }) => {
    const [activities, setActivities] = useState<Activity[]>([]); 
    const [activityData, setActivityData] = useState<Record<string, any>>({});
    const [items, setItems] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const itemsPerPage = 5;

    const fetchData = () => {
        axios.get('http://localhost:3000/activity')//para web
        .then((result) => {
            console.clear();
            setActivityData(result.data); // Rellenar la variable userData con result.data
            setActivities(result.data);
            setRefreshing(false);
        })
        .catch((err) => console.log(err));
        setRefreshing(false);
    };
  
    useEffect(() => { fetchData(); }, [activitiesUpdated])

    const handleRefresh = () => {
        setRefreshing(true); // Se establece refreshing en true al iniciar la actualización
        fetchData(); // Llama a la función fetchData para obtener los datos actualizados
    };

    const handleEmpty = () => { return <Text> No Activities!</Text>; };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}
                refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }>
                <View style={styles.container}>
                    <FlatList
                        data={activities}
                        renderItem={({ item, index }) => (
                            <View style={styles.activityContainer}>
                                <Text>Title: {item.title}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Rate: {item.rate}</Text>
                            </View>
                        )}
                        ListEmptyComponent={handleEmpty}
                        showsVerticalScrollIndicator
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GetActivities;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    activityContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});