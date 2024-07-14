import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {HomeScreenProps} from '../types';
import {Button} from 'react-native-paper';
import {useBase} from '../contexts/BaseContext';

const Home = ({navigation, route}: HomeScreenProps) => {
  const {tasks} = useBase();

  const handleTask = (id?: number) => {
    navigation.navigate('Details', {id});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 25,
            paddingLeft: 10,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Lista de tareas
        </Text>
        <Image
          style={{width: 75, height: 75, borderRadius: 50}}
          source={require('../assets/hati.jpg')}
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flex: 1,
              marginHorizontal: 10,
              padding: 5,
              borderRadius: 10,
              backgroundColor: 'lightgray',
            }}
            onPress={() => handleTask(item.id)}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
                {item.title}
              </Text>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
                Exp: {item.expirationDate}
              </Text>
            </View>
            <Text
              adjustsFontSizeToFit
              numberOfLines={5}
              style={[styles.text, {marginTop: 5}]}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 10, backgroundColor: 'transparent'}} />
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => <View style={{height: 70}} />}
      />
      <View style={[styles.buttonBottom]}>
        <Button
          mode="contained"
          style={{flex: 1, marginHorizontal: 10, borderRadius: 10, height: 50}}
          labelStyle={{fontSize: 20}}
          contentStyle={{height: 50}}
          onPress={() => navigation.navigate('Details', {})}>
          Nuevo +
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonBottom: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 75,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default Home;
