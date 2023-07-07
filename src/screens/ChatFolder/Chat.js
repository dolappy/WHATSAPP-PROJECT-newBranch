import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ChatData from '../../components/ChatData'
import { COLORS, SIZES } from '../../constants'

const Chat = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <FlatList
                data={ChatData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('ChatMsgs', { data: item }) }} style={{ flexDirection: 'row', marginTop: SIZES.body2, }}>
                            <View>
                                <Image source={item.profilepic} style={{ height: SIZES.h1 * 1.7, width: SIZES.h1 * 1.7, borderRadius: SIZES.h1 * 8 }} />
                                <View style={[styles.greendot, { backgroundColor: item.online ? COLORS.green : COLORS.chocolateBackground }]} />
                            </View>
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={{ marginBottom: SIZES.h5, fontWeight: 'bold', }}>{item.name}</Text>
                                <Text numberOfLines={1}>{item.msg}</Text>
                            </View>
                            <View>
                                <Text style={{ color: COLORS.green, fontWeight: '500', fontSize: SIZES.h5 }}>{item.time}</Text>
                                {
                                    item.unReadMsg >= 1 ?
                                        <View style={styles.ctn}>
                                            <Text style={{ color: COLORS.white }}>{item.unReadMsg}</Text>
                                        </View>
                                        : null
                                }
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.h3,
    },
    greendot: {
        height: SIZES.h5 / 1.5,
        width: SIZES.h5 / 1.5,
        borderRadius: SIZES.h1,
        position: 'relative',
        marginLeft: SIZES.h1 * 1.3,
        bottom: SIZES.h5 / 1.2,
        // backgroundColor: 'green'
    },
    ctn: {
        height: SIZES.h2,
        width: SIZES.h2,
        borderRadius: SIZES.h1,
        backgroundColor: COLORS.green,
        marginTop: SIZES.h5 / 2,
        alignItems: 'center',
        justifyContent: 'center',

    }
})