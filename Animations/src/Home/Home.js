import React, {Component} from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './styles';

var {width} = Dimensions.get('window');

// There are three main Animated methods that you can use to create animations:

// Animated.timing() => Maps time range to easing value.
// Animated.decay()  => starts with an initial velocity and gradually slows to a stop.
// Animated.spring() => Simple single-spring physics model (Based on Rebound and Origami).
//                      Tracks velocity state to create fluid motions as the toValue updates,
//                      and can be chained together.

// There are Three ways to call these animations

// Animated.parallel() => Starts an array of animations all at the same time.
// Animated.sequence() => Starts an array of animations in order, waiting for each to complete
//                        before starting the next. If the current running animation is stopped,
//                        no following animations will be started.
// Animated.stagger()  => Array of animations may run in parallel (overlap), but are started in
//                        sequence with successive delays. Very similar to Animated.parallel()
//                        but allows you to add delays to the animations.

class Home extends Component {
  state = {
    fadeValue: new Animated.Value(0),
    xValue: new Animated.Value(0),
    springValue: new Animated.Value(0.3),
    rotateValue: new Animated.Value(0),
  };

  //   To run animation directly(without pressing an button)
  componentDidMount = () => {
    // this.springAnim();
    this.moveAndRotateAnim();
  };

  //   It is used to fade_in and fade_out the component..
  fadeAnim = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  //   It moves the component along x and y axis..
  moveAnim = () => {
    Animated.timing(this.state.xValue, {
      toValue: width - 100,
      duration: 1500,
      //   easing: Easing.linear,
      easing: Easing.cubic, // There is lot of kinds of easing like linear, cubic etc..
    }).start(() => {
      // We can start another animation at the end of first animation..
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
      }).start(() => {
        //   To run Aanimation infinitely..
        // this.moveAnim();
      });
    });
  };

  //   It rebounds the component just like spring rebounds..
  springAnim = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  };

  //   Here we use Animated.sequence() to rotate the component
  //   and add more than one Animations to it, in a sequence..
  rotateAnim = () => {
    Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue: 100,
        duration: 2000,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.rotateValue, {
        toValue: 0,
        duration: 0,
      }),
    ]).start(() => {
      //   this.rotateAnim();
    });
  };

  //   Here we use Animated.parallel() to move and rotate the
  //   component parallelly..
  moveAndRotateAnim = () => {
    Animated.parallel([this.moveAnim(), this.rotateAnim()]).start();
  };

  render() {
    const interpolatedRotateAnim = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.mainContainer}>
        <Animated.View
          style={[
            styles.animationView,
            {opacity: this.state.fadeValue}, // this is the way to apply more than one anim on component,
            {left: this.state.xValue},
          ]}>
          <Text style={styles.textStyle}>Animated View</Text>
        </Animated.View>
        <Animated.Image
          source={require('../assets/react-native-image.png')}
          style={[
            styles.imageStyle,
            {opacity: this.state.fadeValue, left: this.state.xValue},
          ]}
        />
        <Animated.Image
          source={require('../assets/react-native-image.png')}
          style={[
            styles.imageStyle,
            {transform: [{scale: this.state.springValue}], alignSelf: 'center'},
          ]}
        />
        <Animated.Image
          source={require('../assets/react-native-image.png')}
          style={[
            styles.imageStyle,
            {
              transform: [{rotate: interpolatedRotateAnim}],
              alignSelf: 'center',
            },
          ]}
        />
        <Animated.Image
          source={require('../assets/react-native-image.png')}
          style={[
            styles.imageStyle,
            {left: this.state.xValue},
            {
              transform: [{rotate: interpolatedRotateAnim}],
            },
          ]}
        />
        <View style={styles.buttonsViewContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.fadeAnim()}>
            <Text style={styles.buttonTextStyle}>Fade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.moveAnim()}>
            <Text style={styles.buttonTextStyle}>Move</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.springAnim()}>
            <Text style={styles.buttonTextStyle}>Spring</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsViewContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.rotateAnim()}>
            <Text style={styles.buttonTextStyle}>Rotate and Interpolate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.moveAndRotateAnim()}>
            <Text style={styles.buttonTextStyle}>Move and Rotate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
