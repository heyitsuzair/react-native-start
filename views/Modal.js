import {View, Text, Modal, Button} from 'react-native';
import React, {useState} from 'react';

export default function ModalComp() {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Modal transparent visible={show}>
        <View style={{flex: 1, backgroundColor: '#000000aa'}}>
          <View
            style={{
              backgroundColor: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
              borderRadius: 4,
              padding: 230,
            }}>
            <Text style={{fontSize: 50, textAlign: 'center'}}>Modal</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setShow(true)} />
    </View>
  );
}
