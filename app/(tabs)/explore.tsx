import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, View, Text, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            style={styles.HomeLogo}
            source={require('@/assets/images/HomeLogo.png')}
          />
        }>
        <View style={styles.TextContainer}>
          <View>
            <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome</ThemedText>
              <HelloWave />
            </ThemedView>
            <ThemedText type="subtitle">TEXT To Emoji</ThemedText>
          </View>


        </View>
        <View style={{ borderWidth: 2, borderColor: 'white', flex: 0.4 }}>
          <Text style={{color:"white"}}>Data</Text>
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TextContainer: {
    borderWidth: 2,
    borderColor: 'white',
    flex: 0.3,
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  HomeLogo: {
    flex: 0.3,
    height: 225,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});