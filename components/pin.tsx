import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Pin = (props) => {

    const [ratio, setRatio] = useState(1);
    const { id, title, image } = props.Pin;
    const navigation = useNavigation();
    
    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height));
        }

    }, [image]);

    const onLike = () => {

    };

    const goToPinPage = () => {
        navigation.navigate("Pin", {id });

    }



    return (
        <Pressable onPress={goToPinPage} style={styles.pin}>
            <View>
                <Image
                    source={image}
                    style={[styles.image, { aspectRatio: ratio }]}
                />

                <Pressable onPress={onLike} style={styles.heartButton}>
                    <AntDesign name="hearto" size={20} color="black" />
                </Pressable>

            </View>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </Pressable>


    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 16,
        fontWeight: '600',
        margin: 5,
        lineHeight: 22,
        color: "#181818"
    },
    image: {
        width: "100%",
        borderRadius: 15,

    },
    pin: {
        width: "100%",
        padding: 4

    },
    heartButton: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 25
    }
});

export default Pin;