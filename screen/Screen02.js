import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen02 = ({ navigation }) => {
    const navigateProductScreen = () => {
        navigation.navigate('Screen01', {
            color: color
        });
    }
    const [color, setColor] = useState('blue')
    return (
        <View style={styles.container}>
            <View style={styles.productSection}>
                <Image source={require(`../assets/vs_${color}.png`)} style={styles.productImage} />
                <Text style={styles.productName}>Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng</Text>
            </View>
            <View style={styles.selectColorSection}>
                <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>
                <View style={styles.buttonsSelectColorContainer}>
                    <TouchableOpacity
                        onPress={() => setColor('silver')}
                        style={[styles.selectColorButton, styles.colorSilver]}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setColor('red')}
                        style={[styles.selectColorButton, styles.colorRed]}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setColor('black')}
                        style={[styles.selectColorButton, styles.colorBlack]}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setColor('blue')}
                        style={[styles.selectColorButton, styles.colorBlue]}
                    ></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.applyButton} onPress={navigateProductScreen}>
                    <Text style={styles.applyButtonText}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'space-between'
    }, productImage: {
        width: 112,
        height: 132,
        marginLeft: 4
    }, productSection: {
        flex: 2,
        flexDirection: 'row'
    }, productName: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 400,
    }, selectColorSection: {
        flex: 5,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 17,
        backgroundColor: '#C4C4C4',
    }, selectColorText: {
        fontSize: 18,
        fontWeight: 400,
    }, buttonsSelectColorContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    }, selectColorButton: {
        width: 85,
        height: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    }, colorSilver: {
        backgroundColor: '#C5F1FB'
    }, colorRed: {
        backgroundColor: '#F30D0D',
        marginTop: 10
    }, colorBlack: {
        backgroundColor: '#000',
        marginTop: 10
    }, colorBlue: {
        backgroundColor: '#234896',
        marginTop: 10
    }, applyButton: {
        borderRadius: 10,
        paddingHorizontal: 135,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderColor: '#CA1536',
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    }, applyButtonText: {
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: 700,
    },
})

export default Screen02