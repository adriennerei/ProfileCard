import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>www.adriennerei.com</Text>
          </View>
          <View style={styles.headerButtons}>
            <View style={[styles.circle, styles.redCircle]}></View>
            <View style={[styles.circle, styles.yellowCircle]}></View>
            <View style={[styles.circle, styles.greenCircle]}></View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Profile Picture Container */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://placehold.co/150x150/0000FF/FFFFFF?text=Adrienne' }}
              style={styles.profileImage}
            />
          </View>

          {/* About Me Button */}
          <View style={styles.aboutMeButton}>
            <Text style={styles.aboutMeText}>about me</Text>
          </View>

          {/* About Me Section */}
          <View style={styles.aboutMeSection}>
            <Text style={styles.aboutMeInfoText}>
              Name: Adrienne Rei H. Cabristante{'\n'}
              Username: adriennerei{'\n'}
              Course: Bachelor of Science in Information Technology{'\n'}
              {'\n'}
              alo alo t-h-u-n-d-e-r alo alo
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© adriennerei</Text>
        </View>
      </View>
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
    backgroundColor: 'white',
    marginBottom: 16,
  },
  profileImage: {
    width: '100%',
    borderRadius: 16,
    padding: 8,
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
  },
  aboutMeInfoText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
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