import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const deviceWidth = Dimensions.get('window').width;

export class DesignScreen extends Component {
    // alignSelf: 'center', stretchShrink zIndex: -1 relative yellow
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewContainerOne} >
                    <Text style={{ backgroundColor: "yellow", flexGrow: 1, flexBasis: 10, alignSelf: 'stretch', }}>foo</Text>
                    <Text style={{ backgroundColor: "lightgreen", flexGrow: 2, flexBasis: 80 }}>bar</Text>
                    <Text style={{ backgroundColor: "lightblue", flexGrow: 1, flexBasis: 10 }}>baz</Text>
                </View>
                <View style={styles.viewContainerTwo} >
                    <View style={{
                        backgroundColor: "yellow", justifyContent: 'center', alignItems: 'center', flexGrow: 1,
                        flexBasis: 20, position: 'absolute', zIndex: 1, height: 50, width: 50, borderRadius: 10,
                    }}>
                        <Text style={{ alignSelf: 'center', }}>foo</Text>
                    </View>
                    <Text style={{ backgroundColor: "lightgreen", flexGrow: 2, flexBasis: 80, alignSelf: 'stretch', }}>bar</Text>
                    <Text style={{ backgroundColor: "lightgray", flexGrow: 1, flexBasis: 20, alignSelf: 'stretch', }}>baz dsgfs
    // alignSelf: 'center', stretchShrink zIndex: -1 relative yellow
    // alignSelf: 'center', stretchShrink zIndex: -1 relative yellow</Text>

                </View>
                <View style={styles.viewContainerThree} >
                    <Text style={{ backgroundColor: "lightgray", flexGrow: 1, flexBasis: 10, }}>foo</Text>
                    <Text style={{ backgroundColor: "lightgreen", flexGrow: 2, flexBasis: 80 }}>bar</Text>
                    <Text style={{ backgroundColor: "lightblue", flexGrow: 1, flexBasis: 10, }}>baz</Text>
                </View>
                
                <View style={styles.viewContainerThree} >
                    <Text style={{ backgroundColor: "lightgray", flexGrow: 1, flexBasis: 10, }}>foo</Text>
                    <Text style={{ backgroundColor: "lightgreen", flexShrink: 3, flexBasis: 80 }}>bar</Text>
                    <Text style={{ backgroundColor: "lightblue", flexGrow: 1, flexBasis: 10 }}>baz</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    viewContainerOne: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
        margin: 10,
    },
    viewContainerTwo: {
        flex: 1,
        backgroundColor: 'khaki',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 10,
    },
    viewContainerThree: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10,
    },
});
