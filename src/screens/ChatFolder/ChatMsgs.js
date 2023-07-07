import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../constants'
import { textdata } from '../../components/ChatData'
import { useNavigation } from "@react-navigation/native";


const ChatMsgs = ({ route, navigation }) => {
    console.log(route.params)
    const data = route.params.data
    const renderHeader = () => {
        return (
            <View style={styles.box}>

                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={icons.arrow} style={{ tintColor: COLORS.white, height: SIZES.h4, width: SIZES.h4 }} /></TouchableOpacity>
                <TouchableOpacity><Image source={data.profilepic} style={{ height: SIZES.h1 * 1.2, width: SIZES.h1 * 1.2, borderRadius: SIZES.h1 * 5, marginHorizontal: SIZES.h5 / 2, }} /></TouchableOpacity>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ fontWeight: '500', fontSize: SIZES.h3, color: COLORS.white, alignSelf: 'center' }}>{data.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: SIZES.h1 * 3 }}>
                    <TouchableOpacity><Image source={icons.video} style={{ tintColor: COLORS.white, height: SIZES.h3, width: SIZES.h3, marginRight: SIZES.h3 }} /></TouchableOpacity>
                    <TouchableOpacity><Image source={icons.call} style={{ tintColor: COLORS.white, height: SIZES.h4, width: SIZES.h4, marginRight: SIZES.h3 }} /></TouchableOpacity>
                    <TouchableOpacity><Image source={icons.threedots} style={{ tintColor: COLORS.white, height: SIZES.h3, width: SIZES.h3, }} /></TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View>

            <FlatList
                ListHeaderComponent={renderHeader}
                data={textdata}
                renderItem={({ item }) => {
                    return (
                        <View style={{ paddingHorizontal: SIZES.h4 }}>
                            <View style={[styles.txtbox, { alignSelf: item.user === 'a' ? 'flex-start' : 'flex-end' }, { backgroundColor: item.user === 'a' ? COLORS.white : COLORS.green }]}>
                                <Text style={{ flexWrap: 'wrap' }}>{item.text}</Text>
                                <Text style={{ fontSize: SIZES.h4 / 2, alignSelf: 'flex-end' }}>{item.time}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View >
    )
}

export default ChatMsgs

const styles = StyleSheet.create({
    box: {
        backgroundColor: COLORS.green,
        //marginHorizontal: SIZES.h3,
        height: SIZES.h1 * 1.8,
        width: '100%',
        padding: SIZES.h5,
        flexDirection: 'row',
        alignItems: 'center'

    },
    txtbox: {
        height: 'auto',
        width: 'auto',
        //backgroundColor: COLORS.green,
        marginTop: SIZES.h5,
        borderRadius: SIZES.h4,
        padding: SIZES.h5 / 2,
        //justifyContent: 'flex-start'
    }
})