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
    backgroundColor: '#B2EBF2',
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#BBDEFB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    backgroundColor: '#BBDEFB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 4,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
  },
  redCircle: {
    backgroundColor: '#EF4444',
  },
  yellowCircle: {
    backgroundColor: '#FACC15',
  },
  greenCircle: {
    backgroundColor: '#22C55E',
  },
  mainContent: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#B2EBF2',
  },
  imageContainer: {
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 16,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: 'black',
  },
  aboutMeButton: {
    width: '100%',
    borderRadius: 16,
    padding: 8,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#BBDEFB',
  },
  aboutMeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  aboutMeSection: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',
  },
  aboutMeInfoText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
  footer: {
    padding: 8,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'black',
    backgroundColor: '#BBDEFB',
  },
  footerText: {
    color: 'black',
  },
});

export default App;
