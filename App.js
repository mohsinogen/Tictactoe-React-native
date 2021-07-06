import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Button,
  Title,
} from 'native-base';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = itemNumber => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#7952B3',
        textColor: '#FFC107',
      });
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Already filled!',
        backgroundColor: '#7952B3',
        textColor: '#FFC107',
      });
    }

    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} Won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} Won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Won`);
    } else if (!itemArray.includes('empty') && !winMessage) {
      setWinMessage("It's a Draw");
    }
  };

  return (
    <Container style={{padding: 5, backgroundColor: '#343A40'}}>
      <Header style={{backgroundColor: '#FFC107'}}>
        <Body>
          <Title>TicTacToe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button
              primary
              block
              rounded
              onPress={reloadGame}
              style={styles.btn}>
              <Icon name="refresh" size={25} color="#FFC107" />
              <Text>Reload</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>
            {isCross ? 'Cross' : 'Circle'}'s turn now
          </H3>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  box: {
    width: '30%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#7952B3',
    backgroundColor: '#343A40',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#7952B3',
    marginTop: 20,
    marginHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#FFC107',
    borderRadius: 25,
    marginVertical: 10,
  },
  btn: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFC107',
    marginHorizontal: 25,
    backgroundColor: '#7952B3',
  },
});

export default App;
