        import React,{useState} from 'react';
        import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
       // import { createNativeStackNavigator } from '@react-navigation/native-stack';
        import { NavigationContainer } from '@react-navigation/native';
        import GetUsers from './src/GET/User';
        import CreateUser from './src/POST/User';

        // const HomeStackNavigator=createNativeStackNavigator();

            const Tab =createBottomTabNavigator();
            export default function Navigation(){
            const [usersUpdated, setUsersUpdated] = useState(false);
            const updateUserList = () => {
                setUsersUpdated(!usersUpdated);
            };

    /*  function MyStack(){
        return(
            <HomeStackNavigator.Navigator>
                <HomeStackNavigator.Screen
                name="Lista de usuarios" component={() => <GetUsers usersUpdated={usersUpdated} />}/>
                <HomeStackNavigator.Screen name="Usuario nuevo" component={() => <CreateUser updateUserList={updateUserList} />} />  
                
            </HomeStackNavigator.Navigator>
        )
    }  */

  

   
    

    /* function MyTabs() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Lista de usuarios" component={GetUsers} />
                <Tab.Screen name="Usuario nuevo" component={CreateUser} />
            </Tab.Navigator>
        );
    } */ 
    /* function MyTabs() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen 
                    name="Lista de usuarios" 
                    component={(props:any) => <GetUsers {...props} usersUpdated={usersUpdated} />} 
                />
                <Tab.Screen 
                    name="Usuario nuevo" 
                    component={(props:any) => <CreateUser {...props} updateUserList={updateUserList} />} 
                />
            </Tab.Navigator>
        );
    }  */

 /*    function MyTabs() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen 
                    name="Lista de usuarios" 
                    component={GetUsers} // Pasar el componente directamente
                    initialParams={{ usersUpdated: usersUpdated }} // Pasar propiedades adicionales si es necesario
                />
                <Tab.Screen 
                    name="Usuario nuevo" 
                    component={CreateUser} // Pasar el componente directamente
                    initialParams={{ updateUserList: updateUserList }} // Pasar propiedades adicionales si es necesario
                />
            </Tab.Navigator>
        );
    } */

    function MyTabs() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Lista de usuarios">
                    {() => <GetUsers usersUpdated={usersUpdated}  />}
                </Tab.Screen>
                <Tab.Screen name="Usuario nuevo">
                    {() => <CreateUser updateUserList={updateUserList} />}
                </Tab.Screen>
            </Tab.Navigator>
        );
    }
  
    
        return(
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>

        );
            }
