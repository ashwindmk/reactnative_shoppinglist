
# Shopping List

React-Native demo application.

### Running App on iOS

```shell
react-native run-ios
```

### Running App on Android

```shell
react-native run-android
```

### Installing Vector Icons

**1. Install**

```shell
npm i react-native-vector-icons --save

react-native link react-native-vector-icons
```


**2. Add in Gradle**

Add at the top of `/android/app/build.gradle`.

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```


### Installing UUID

```shell
npm i react-native-uuid --save

react-native link react-native-uuid

npm i buffer --save
```

### Displaying Rounded Image

```javascript
mport React, { useState } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Hello User</Text>
            <Image source={{uri: 'https://randomuser.me/portraits/men/1.jpg'}} style={styles.img} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
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
```


### Displaying List of Items

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

const Home = () => {
    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Eggs' },
        { id: uuid.v4(), text: 'Milk' },
        { id: uuid.v4(), text: 'Bread' },
        { id: uuid.v4(), text: 'Juice' }
    ]);

    return (
        <View style={styles.container}>
            <FlatList data={items} renderItem={({item}) => (
                <Text>{item.text}</Text>
            )} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    }
    text: {
        color: 'darkslateblue',
        fontSize: 30
    }
});

export default Home;

```
