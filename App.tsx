import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';


// The path in this require() function is the most likely cause of the visual issue.
// Make sure this relative path is EXACTLY correct for your project's folder structure.
const localProfileImage = require('./pics/adriennerei.png');


const profileData = {
  website: 'www.adriennerei.com',
  image: localProfileImage,
  fullName: 'Adrienne Rei H. Cabristante',
  username: 'adriennerei',
  bio: 'alo',
  course: 'Bachelor of Science in Information Technology',
};


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {/* Top bar with website and window controls */}
          <View style={styles.topBar}>
            <Text style={styles.icon}>🍒</Text>
            <View style={styles.websiteBox}>
              <Text numberOfLines={1} style={styles.websiteText}>
                {profileData.website}
              </Text>
            </View>
            <View style={styles.windowControls}>
              <View style={styles.controlButton}>
                <Text style={styles.controlText}>-</Text>
              </View>
              <View style={styles.controlButton}>
                <Text style={styles.controlText}>+</Text>
              </View>
              <View style={styles.controlButton}>
                <Text style={styles.controlText}>x</Text>
              </View>
            </View>
          </View>


          {/* main content */}
          <View style={styles.mainContent}>
            {/* Image */}
            <View style={styles.imageContainer}>
              <Image
                source={profileData.image}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>


            {/* about me */}
            <View style={styles.aboutMeHeader}>
              <Text style={styles.aboutMeText}>about me</Text>
            </View>
            <View style={styles.aboutMeBox}>
              <Text style={styles.aboutMeInfo}>
                 {profileData.fullName}
              </Text>
              <Text style={styles.aboutMeInfo}>
                 {profileData.username}
              </Text>
              <Text style={styles.aboutMeInfo}>
                 {profileData.course}
              </Text>
              <Text style={styles.aboutMeBio}>{profileData.bio}</Text>
            </View>
          </View>
         
          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© adriennerei</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0F2FE',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E0F2FE',
  },
  card: {
    backgroundColor: '#B0D9F6',
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 16,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  websiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  websiteText: {
    fontFamily: 'monospace',
    fontSize: 12,
  },
  windowControls: {
    flexDirection: 'row',
    marginLeft: 8,
    gap: 8,
  },
  controlButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    fontSize: 12,
  },
  mainContent: {
    flexDirection: 'column',
    gap: 16,
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  aboutMeHeader: {
    backgroundColor: '#87CEEB',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  aboutMeText: {
    fontFamily: 'monospace',
    fontSize: 16,
  },
  aboutMeBox: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  aboutMeInfo: {
    fontFamily: 'monospace',
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  aboutMeBio: {
    marginTop: 8,
    fontFamily: 'monospace',
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontFamily: 'monospace',
    fontSize: 10,
  },
});


export default App;