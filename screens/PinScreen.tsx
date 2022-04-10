import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react';
import pins from '../assets/data/pins';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation , useRoute} from '@react-navigation/native';

const PinScreen = () => {

    
    const [ratio, setRatio] = useState(1);
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const route = useRoute();
    
    const pinId = route.params?.id;
    const Pin = pins.find((p) => p.id == pinId)
    console.log(route);

    useEffect(() => {
        if (Pin?.image) {
            Image.getSize(Pin.image, (width, height) => setRatio(width / height));
        }

    }, [Pin]);

    const goBack = () => {
        navigation.goBack(); 

    };

    if (!Pin) {
        return <Text>Pin not found</Text>;
    }



    return (
        <SafeAreaProvider style={{backgroundColor:'black' }}>
            <StatusBar style="light"/>
            <View style={styles.root}>
                <Image source={Pin.image} style={[styles.image, { aspectRatio: ratio }]} />
                <Text style={styles.title}> {Pin.title}</Text>      
            </View>
            <Pressable onPress={goBack} style={[styles.backBtn, {top: insets.top + 20}]}>
            <Ionicons name={"chevron-back"} size={35} color={"white"}/>
            </Pressable>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    root: {
        height:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50

    },

    image: {
        width: "100%",
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    },

    backBtn: {
        position:'absolute',
        left:20

    },

    title: {
        margin:10,
        fontSize:24,
        fontWeight:'600',
        textAlign:'center',
        lineHeight:35

    }


});

export default PinScreen;