import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {DetailsScreenProps, Task} from '../types';
import {useBase} from '../contexts/BaseContext';
import {Button, TextInput} from 'react-native-paper';

const Details = ({navigation, route}: DetailsScreenProps) => {
  const {tasks, setTasks, tasksLenght, setTasksLenght} = useBase();
  const [taskId] = useState(route.params.id);
  const [task, setTask] = useState<Task>({
    id: tasksLenght!,
    title: '',
    description: '',
    //Colocamos una fecha por defecto, es decir, la fecha de manana con el formato aaaa-mm-dd
    expirationDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
  });

  React.useEffect(() => {
    if (taskId) {
      const task = tasks?.find(task => task.id === taskId);
      if (task) setTask(task);
    }
  }, [taskId]);

  const onSave = () => {
    if (taskId) {
      const newTasks = tasks?.filter(task => task.id !== taskId);
      setTasks!([...(newTasks as Task[]), task]);
    } else {
      setTasks!([...tasks!, task]);
      setTasksLenght!(tasksLenght! + 1);
    }
    navigation.navigate('Home');
  };

  const onRemove = () => {
    if (taskId) {
      const newTasks = tasks?.filter(task => task.id !== taskId);
      setTasks!(newTasks as Task[]);
      navigation.navigate('Home');
    }
  };

  const onBack = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.center}>
      <View
        style={[
          {
            height: 300,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            width: '95%',
            paddingBottom: 120,
          },
        ]}>
        <Text
          style={{
            padding: 5,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Detalles de la tarea
        </Text>
        <TextInput
          label="Titulo"
          value={task.title}
          onChangeText={text => setTask({...task, title: text})}
          style={{margin: 10}}
        />
        <TextInput
          label="Descripcion"
          value={task.description}
          onChangeText={text => setTask({...task, description: text})}
          style={{margin: 10}}
        />
        <TextInput
          label="Fecha de expiracion"
          value={task.expirationDate}
          onChangeText={text => {
            setTask({...task, expirationDate: text});
          }}
          style={{margin: 10}}
        />
      </View>
      <View
        style={[styles.buttonBottom, {flexDirection: 'column', height: 120}]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button
            mode="contained"
            style={{
              flex: 1,
              marginHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}
            labelStyle={{fontSize: 20}}
            contentStyle={{height: 50}}
            disabled={!taskId}
            onPress={onRemove}>
            Borrar
          </Button>
          <Button
            mode="contained"
            style={{
              flex: 1,
              marginHorizontal: 10,
              borderRadius: 10,
              height: 50,
            }}
            labelStyle={{fontSize: 20}}
            contentStyle={{height: 50}}
            onPress={onSave}>
            Guardar
          </Button>
        </View>
        <Button
          mode="contained"
          style={{
            width: '95%',
            marginHorizontal: 10,
            borderRadius: 10,
            height: 50,
          }}
          labelStyle={{fontSize: 20}}
          contentStyle={{height: 50}}
          onPress={onBack}>
          Volver
        </Button>
        <View style={{height: 10, backgroundColor: 'transparent'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
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

export default Details;
