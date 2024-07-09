import { Image, StyleSheet, View, Text, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          style={styles.HomeLogo}
          source={require('@/assets/images/HomeLogo.png')}
        />
      }>
      <View style={styles.TextContainer}>
        <View style={{ flex: .3 }}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome</ThemedText>
            <HelloWave />
          </ThemedView>
          <ThemedText type="subtitle">EMOJI TO TEXT</ThemedText>
        </View>

        <View style={{ borderWidth: 2, borderColor: 'white', flex: .7 }}>

        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  TextContainer: {
    alignItems: 'center',
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  HomeLogo: {
    height: 225,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});
