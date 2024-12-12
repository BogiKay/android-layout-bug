import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

type MyComponentProps = {
  value: string;
};

const MyComponent = ({value}: MyComponentProps) => {
  return (
    <View style={styles.myComponentContainer}>
      <Text>{`${value}`}</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const [componentValue, setComponentValue] = useState('1');

  const handlePress = () => {
    setComponentValue(prev => (prev === '1' ? '2' : '1'));
  };

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text>Both components have the same margin</Text>

        <View style={styles.container}>
          <MyComponent value="test1" />
        </View>
        <View style={styles.rowContainer}>
          <MyComponent value={`test${componentValue}`} />
        </View>
      </View>

      <View style={styles.content}>
        <Text>Components have different margin set</Text>
        <View style={styles.containerBigMargin}>
          <MyComponent value="test1" />
        </View>
        <View style={styles.rowContainerBigMargin}>
          <MyComponent value={`test${componentValue}`} />
        </View>
      </View>
      <Button title="Toggle value of second component" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
  },
  rowContainer: {
    margin: 8,
    flexDirection: 'row',
  },
  rowContainerBigMargin: {
    margin: 9,
    flexDirection: 'row',
  },
  container: {
    margin: 8,
  },
  containerBigMargin: {
    margin: 16,
  },
  myComponentContainer: {
    backgroundColor: 'gray',
  },
});

export default App;
