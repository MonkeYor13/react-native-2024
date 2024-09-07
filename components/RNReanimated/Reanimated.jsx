import { View, Text, Button, StyleSheet } from 'react-native'
import Animated, { useSharedValue,withSpring, useAnimatedStyle, withRepeat, withTiming} from 'react-native-reanimated';

export default function Reanimated() {
  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 5;

  const handlePress = () => {
    offset.value = withRepeat(withTiming(OFFSET), 5, true);
  };


  return (
    
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button title="shake" onPress={handlePress} />
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});