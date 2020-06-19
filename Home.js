import React, { useState } from 'react';
import { View, Alert, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const Home = () => {
    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Eggs' },
        { id: uuid.v4(), text: 'Milk' },
        { id: uuid.v4(), text: 'Bread' },
        { id: uuid.v4(), text: 'Juice' }
    ]);

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id !== id);
        });
    };

    const addItem = (textValue) => {
        if (!textValue) {
            Alert.alert('Error', 'Please enter an item!', {text: 'OK'});
        } else {
            setItems((prevItems) => {
                return [{id: uuid.v4(), text: textValue}, ...prevItems];
            });
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <AddItem addItem={addItem}/>
            <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'darkslateblue',
        fontSize: 30
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }
});

export default Home;
