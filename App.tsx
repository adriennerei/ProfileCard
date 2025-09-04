import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

// Mock data to populate the profile card
const profileData = {
  website: 'www.adriennerei.com',
  // Using a placeholder URL to ensure the app runs correctly.
  image: 'https://placehold.co/200x200/B0D9F6/000?text=Image',
  fullName: 'Adrienne Rei H. Cabristante',
  username: 'adriennerei',
  bio: 'alo alo t-h-u-n-d-e-r alo alo',
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

          {/* Main content area */}
          <View style={styles.mainContent}>
            {/* Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: profileData.image }}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>

            {/* "About me" section below the image */}
            <View style={styles.aboutMeHeader}>
              <Text style={styles.aboutMeText}>about me</Text>
            </View>
            <View style={styles.aboutMeBox}>
              <Text style={styles.aboutMeInfo}>
                <Text style={styles.boldText}>Name:</Text> {profileData.fullName}
              </Text>
              <Text style={styles.aboutMeInfo}>
                <Text style={styles.boldText}>Username:</Text> {profileData.username}
              </Text>
              <Text style={styles.aboutMeInfo}>
                <Text style={styles.boldText}>Course:</Text> {profileData.course}
              </Text>
              <Text style={styles.aboutMeBio}>{profileData.bio}</Text>
            </View>
          </View>
          
          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© adriennerei</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
