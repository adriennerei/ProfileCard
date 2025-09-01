/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

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
    width: '100%',
    maxWidth: 200, // Constrain the image width for better appearance
  },
  profileImage: {
    width: '100%',
    aspectRatio: 1,
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
  },
  boldText: {
    fontWeight: 'bold',
  },
  aboutMeBio: {
    marginTop: 8,
    fontFamily: 'monospace',
    fontSize: 12,
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