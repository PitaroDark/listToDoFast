import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';

interface TaskPopupModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const TaskPopupModal = ({visible, setVisible}: TaskPopupModalProps) => {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => setVisible(false)}
      animationType="fade"
      visible={visible}
      style={{flex: 1}}>
      <View
        style={[
          styles.modal,
          {justifyContent: 'center', alignContent: 'center'},
        ]}>
        <View
          style={{
            padding: 5,
            backgroundColor: 'white',
            height: 400,
            width: '100%',
          }}>
          <Text>Task Popup Modal</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default TaskPopupModal;
