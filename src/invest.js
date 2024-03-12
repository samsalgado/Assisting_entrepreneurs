import { StyleSheet, FlatList, View, Text, Image, Pressable, Modal, ScrollView } from "react-native";
import { useState } from "react";
import YouTubePlayer from 'react-native-youtube-iframe';
const InvestModal = () => {
    const [liveModal, setLiveModal] = useState(false);
    return (
        <View style={styles.centerView}>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={liveModal}
                onRequestClose={() => {
                    Alert.alert('Modal closed');
                    setLiveModal(!liveModal);
                }}>
                    <View style={styles.centerView}>
                        <View style={styles.modalView}>
                            <ScrollView>
                        <YouTubePlayer resizeMode width={300} height={200}  videoId={'smGzfYqoasM'} />
                        <YouTubePlayer width={300} resizeMode height={200} play={false} videoId={'JFnUABPy-A8'} />
                        <YouTubePlayer width={300} resizeMode height={200} play={false} videoId={'S3NOa8MZfDs'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'tDXE99uyg4s'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'cJU5xNJjrgc'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'bqPSFw1eiNc'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'ekG8cdowTFQ'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'UOP5hq8aBHQ'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'qF5xkoZxG2A'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'G0hBt-NzFt4'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'uS-o9IRILII'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={'COYS0AV4h7w'} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={"0cLRVxu1re0"} />
                        <YouTubePlayer width={300} resizeMode height={300} play={false} videoId={"nUucyfWpL0A"} />
                        </ScrollView>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setLiveModal(!liveModal)}>

                                    <Text style={styles.closeStyle}>Close Modal</Text>
                                </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable style={styles.button} onPress={() => setLiveModal(true)}>
                    <Text style={styles.textStyle}>Investing Resources</Text>
                </Pressable>
        </View>
    )
};
const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 10, 
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5
    },
    button: {
        borderRadius: 20,
        padding:10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '2196F3'
    },
    buttonOpen: {
        backgroundColor: 'F194FF'
    },
    textStyle: {
        color:'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    closeStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    modalText: {
        marginBottom: 33,
        fontSize:8.5,
        textAlign:'center',
        color: 'white',
    },
});
export default InvestModal;