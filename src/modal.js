import { StyleSheet, FlatList, View, Text, Image, Pressable, Modal } from "react-native";
import { useState } from "react";

const MyModal = () => {
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
                            
                            <Text style={styles.modalText}>
                            What is an IRA? An IRA is a traditional retirement account with standard rules. 
                            There are many types of IRAs - SIMPLE, traditional, SEP, and Roth. 
                            While they all have advantages and disadvantages, let’s focus on SEP and SIMPLE IRAs. These IRA types are associated most with business owners and self-employed individuals. A SEP IRA, or Simplified Employee Pension, is like the traditional IRA but has advantages for the business owner. For instance, an employer cannot contribute to their IRA in a down year for the business. The minimum threshold to start an SEP is $750, while one can start an IRA for $0. A difference between a traditional IRA and a SEP is the minimum contribution. The traditional IRA, or Roth IRA, enables individuals to invest between $7000 and $8000 annually, depending on age. SEP IRA contributions are $66,000, a staggering difference that can save decades of time and work. A SIMPLE IRA, or Savings Incentive Match Plan, has similar employee elements for unions and similar rules to a traditional IRA. Contributions are lower than a SEP, business owners can contribute 3% of their salary or a max of $16000. The SIMPLE IRA presents benefits in the short-term - $500 yearly tax credit, $5000 yearly to start (self-employed, 100 employees max for a business, but you must contribute to the plan, or it terminates. 
                            </Text>
                            <Text style={styles.modalText}>
                            The IRA types have benefits and negatives to start with. You are an entrepreneur, and you think differently. 
                            Times have changed; one cannot retire a billionaire with a traditional IRA or Roth IRA. An eQRP (sometimes called QRP) is an enhanced qualified retirement plan; this plan provides more flexibility over your retirement account; without “big brother” controlling your IRA. To understand why a QRP can be beneficial, let’s talk about UBIT. UBIT, Unrelated Business Income Tax, is a 50% (37% at $12,000) tax applied to the capital gains of the business. For example, selling a property for $80,000, the UBIT would be $40,000. Principles like these explain why the upper class pays taxes at a lower rate: “the more you know”. How does UBIT apply to eQRP? A business owner utilizing an eQRP does not need to worry about UBIT, as the same rules do not apply. Unlike the traditional IRA, eQRPs do not have restrictions on what one can invest in. Business owners strive to find new ways to maximize returns and differentiate their investments. Like traditional retirement accounts, eQRPs enable investments in paper assets. However, unlike traditional retirement accounts, they can invest in Real Estate, an LLC or Startup, Bitcoin, Cryptocurrency, Gold, or even businesses. The rules differ for an eQRP; contribution limits are per person, at a rate like a SEP, $67,500 per person. If you are married, that is a contribution of over $100,000 per year. 
                            Similarly to a 401k, one can roll over their previous IRA into an eQRP.
                            </Text>
                            <Text style={styles.modalText}>
                            How does the process work? Although one can start an eQRP as an individual, let’s focus on the process from a business perspective. The first step required is a sponsoring business and bank account. QRPs are like 401K, and the costs of getting started can be as low as $500. After the initial setup, the owner is the trustee. As previously discussed, money is rolled over from another IRA or 401K, or contributions can be made from the business. Gap funding is how a business or individual gains capital needed that they do not have, for instance, a house downpayment. In the example of an eQRP, gap funding is from the eQRP. If you want to buy an asset, the eQRP can create a separate LLC, and you, as the trustee, can move money from the QRP to the asset you wish to buy. The eQRP does not incur the vaunted UBIT, and the trustee acts as the central stakeholder of the money. Business owners operate from business credit; the principle remains that a business owner can borrow up to 50,000 from the eQRP. This does have to be paid back. The trustee can be liquid and tax-free with an eQRP. 
Aside from the business owner, an individual can also set up an eQRP. 
There are no more third-party custodians, and it provides the opportunity to invest in modern-day assets like Bitcoin or merely escape the perils of Wall Street. When it comes to retirement, most people do not even think about it until it is too late. Utilizing a team to assist in your retirement journey can be a lifesaver.
Whether you are a young entrepreneur or vetted, more resources are paramount in your journey. Business owners need to know how to save money, make money, and set themselves up for long-term retirement. An eQRP is not for everyone, but the more resources you have and knowledge on a retirement vehicle is only beneficial for your business long-term. For more information about eQRPs, visit www.eqrp.com/.
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
                    <Text style={styles.textStyle}>eQRP Article</Text>
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
export default MyModal;