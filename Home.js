import YouTubePlayer from 'react-native-youtube-iframe';
import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, ScrollView, Text, Image, View } from 'react-native';
const image = require('./images/captura.png');
const books = require('./images/books.png');
const tax = require('./images/tax.jpg');
const tools = require('./images/TOOLS.png');
const btc = require('./images/btc.png');
const ai = require('./images/ai.png');
const Home = () => {
    const [videoIds, setVideoIds] = useState([]);
    useEffect(() => {
      const fetchVideoIds = async () => {
        const videoIdsArray = [
          'biX1mDB9hlc',
          'az6NibAUf7Y',
          '5UrNXRsYAvU',
          'MzXrjvl5-mM',
          'qF5xkoZxG2A',
          '3DdJ1JynG8M',
          'kRtdcBfvixE',
          'hBtxSzKhM44',
          'bXLZ8I7s8tw',
          'cqnsfLjeXtQ',
          'oZaDBaleqoQ',
          '670ZGMBjrPI',
          '2lPOiH2Nn5M',
          'IvzMn4cNaUg',
          'Sriduzz9NjM',
          'h6PVcXTOIX8',
          'sIs6GCsa7O4',
          'zVBHOKJgouI',
          'tDXE99uyg4s',
          'jC4v5AS4RIM',
          'aOGMymXPgrk',
          'cJU5xNJjrgc',
          'GuXYdQbhJic',
          'lqXWVzWkkyc',
          'z8RVnPRNQvo',
          'EsRyyJmO-u8',
          'G6NQufU6vmI',
          'bqPSFw1eiNc',
          'y_D9A1YUdQQ',
          'wCEtWz5imUs',
          'CiyNGOIbwcE',
          '_VLZ4b9LHLs',
          '689OUrGz9HQ',
          'ekG8cdowTFQ',
          'GQS7wPujL2k',
          'aqqX19t1u90',
          '6BOf10sXFGs',
          'VL0gmxDt800',
          '9K8FbIKXkbw',
          'sJWd_78LzVw',
          '3MUs-Aaakdg',
          '0nCQbNHj9io',
          '0Q4BZhTVSqk',
          'fdv6vIp9PKM',
          'KekyUgJN7rA',
          'vypbp80ksbE',
          '6wQhRRWPqFE',
          'JLfkBRRvtPc',
          'k3kjJDGBa_o',
          '3FmWtrtJIUo',
          'weVHndhTBwc',
          'suG-oqsdcGo',
          'sSLuP0PoYuM',
          'YuNVqiHkdJQ',
          'x5hH_lt8Guw',
          'xk4_1vDrzzo',
          'K-jJ3UyhvOo',
          'NTgejLheGeU',
          'soYxbkF_QLw',
          'Y19isrCQUmg',
          'HqYeNCBcxXw',
          '_47prikuh_I',
          'YeWYlp9JP6g',
          'p-nQzB51lsE',
          'KORvMg8mWf8',
          '3FNYvj2U0HM',
          'pRKpaZJJRxk',
          'tcTRMIoLJd4',
          '_DVVNOGYtmU',
          '-flFjzBVBFs',
          '_Zgm7tZczh0',
          'IC5vBKc21X8',
          't8pPdKYpowI',
          'e2i6DWoGNeo', 
          '09gj5gM4V98', 
          'umepbfKp5rI',
          'dWL-AWkL-vQ', 
          'qcrnlEj8VZE', 
          'b3J1c3dLFwY',
          '2kBxawHJfNg',
          'f2EqECiTBL8', 
          'VRf8cyeuxoo',
          'vvyPj5bTcgQ',
          'SWDhGSZNF9M',
          'LmGIu-KgjIg', 
          'PzAVQEzgZsk',
          'jra7fYWD_DM',
          '6AYQRi9Bsqk',
          'cuyqVsJLNgU',
          'nLRL_NcnK-4',
          'lI1ae4REbFM',
          'fO9HN3nvDLI',
          '14BL_FwQCpM',
          '8uiZC0l4Ajw',
          'cxm9AHNDMPI',
          'wxyGeUkPYFM',
          'FKdnoWj74X0',
          'LJ67txJ_0dQ',
        ];
        setVideoIds(videoIdsArray);
      };
      fetchVideoIds();
    }, []);
    return(
    <ImageBackground
      source={require('./images/background.png')}
      style={styles.background}
    >
      <View style={styles.div}>
        <Text style={styles.text}>Assisting Entrepreneurs</Text>
        <View style={styles.container}>
          <Image source={image} style={styles.center} />
          <View style={styles.center1}>
            <Text style={styles.text1}>Resources</Text>
          </View>
          <ScrollView style={styles.divWrapper}>
          <Image source={tax} style={{ width: 390, resizeMode: 'stretch', height: 200 }} />
            {videoIds.map((videoId, index) => (
              <YouTubePlayer key={index} width={400} height={400} play={false} videoId={videoId} />
            ))}
            <Image source={tools} style={{ width: 400, resizeMode: 'stretch', height: 200 }} />
            <Image source={books} style={{ width: 400, resizeMode: 'stretch', height: 200 }} />
            <Image source={ai} style={{ width: 400, resizeMode: 'stretch', height: 200 }} />
            <Image source={btc} style={{ width: 400, resizeMode: 'stretch', height: 200 }} />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      paddingTop: 50,
      margin: 10,
    },
    background: {
      width: '100%',
      height: '100%'
    },
      center: {
      alignItems:'center', 
      position:'absolute',
      width:400,
      resizeMode:'contain',
      height:400,
      left:0,
      margin:0,
      marginVertical:-100,
      top:50,
    },
  
    center1: {
      alignItems:'center', 
      position:'absolute',
      width:400,
      height:400,
      left:0,
      margin:0,
      marginVertical:-100,
      top:390,
    },
  
    div: {
      height: 400,
      flex:1,
    },
    text: {
      fontSize:24,
      textAlign:'center',
      marginTop:60,
      fontWeight: 'bold',
      alignContent:'center',
    },
    text1: {
      fontSize:24,
      textAlign:'center',
    },
  
    divWrapper:{
      marginTop:270,
    },
  });
  export default Home;
