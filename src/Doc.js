import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import { useState } from "react";
import { Modal } from 'react-native';
const Doc = () => {
    const [liveModal, setLiveModal] = useState(false);
    return(
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
                        <Text style={styles.modalText}>
                        No matter the business, strategy is integral to the success of any business. 
                        The myriad of reasons businesses fail is due to poor planning. 
                        Poor planning leads to poor execution. A successful business begins with a successful strategy; lets ORSP.

                        </Text>
                        <Text style={styles.modalText}>
                        Orientation in a business is the proverbial, “Where are we?”. Understanding the state of things is integral to navigating a successful enterprise. A majority of businesses take time to grow; a successful business is like a Thanksgiving meal, not a microwavable dinner. Orienting one’s business to the landscape of the next five years will enable you to set yourself up for success long term. 
                        For example, in 2020, my partner and I examined the digital landscape and read about the “7 Technological Trends of 2020” in our decision to align heavily with Bitcoin. Too many businesses see what others have done and try to emulate it. Instead of examining algorithmically, the past and future are the “Next Big Thing”.
                        </Text>
                        <Text style={styles.modalText}>
                        Research is key in determining how to start your business. The best businesses deep dive into research flooding their proverbial vault with content that can be republished later. Rather you are a traditional business or broaching a new field, there is a myriad of fundamental questions one must answer before moving forward — what is the driving force of your business, what is your competitive advantage, what tools will I utilize to get started, and what is your strategy? These are just a few of the large volume of questions that a researcher must answer. The highest performing businesses have the highest performing researchers.
                        Strategy is alive and fluid, a fundamental concept for all successful businesses to understand. 
                        Once a company loses its quest for innovation and adaptability, it begins to fizzle. The technological landscape thrives on constant change, new apps, new technologies, and the new Internet! Your strategy must present you as an institution. Breaking the mold is key to being a successful entrepreneur, and innovation is key to success.                        </Text>
                        <Text style={styles.modalText}>
                        Finally, once your business has a solid plan compromised of lots of research; and with room for adaptability, it is time for development. 
                        Almost every company needs networking, a website, and means of marketing. Different companies require different resources; throughout the ORSP process — your company’s needs should be at the forefront. Companies that are strategic, innovative, and can become an institution; are those that are successful for the long haul.
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setLiveModal(!liveModal)}>
                                <Text style={styles.closeStyle}>Close Modal</Text>
                            </Pressable>
                    </View>
                </View>
                </Modal>
                <Pressable style={styles.button} onPress={() => setLiveModal(true)}>
                    <Text style={styles.textStyle}>Tips for Starting Business</Text>
                </Pressable>
                
        </View>
    );
};
const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
        closeStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose:{
        backgroundColor: '2196F3'
    },
    buttonOpen:{
        backgroundColor: 'F194FF'
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginStart: 20,
        left: 0,
    },
    modalText: {
        marginBottom:0,
        fontSize:11,
        textAlign: 'center',
        color:'white',
    },

});
export default Doc;