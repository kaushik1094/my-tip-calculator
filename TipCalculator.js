import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const calculateTip = () => {
    setTipAmount(billAmount * (tipPercent / 100));
  };

  return (
    <View>
      <Text>Bill Amount:</Text>
      <TextInput
        value={billAmount}
        onChangeText={text => setBillAmount(text)}
        keyboardType="numeric"
      />
      <Text>Tip Percent:</Text>
      <TextInput
        value={tipPercent}
        onChangeText={text => setTipPercent(text)}
        keyboardType="numeric"
      />
      <Button onPress={calculateTip} title="Calculate" />
      <Text>Tip Amount: ${tipAmount}</Text>
    </View>
  );
};

export default TipCalculator;
