import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Gamer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = checkWinner(board);
  const tr=()=>{

 alert("this is good ");
 console.log("jai")

  }

  const handlePress = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
 {tr()}
      <Text style={styles.turn}>
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Turn: ${isXTurn ? 'X' : 'O'}`
          : 'Draw'}
      </Text>

      <View style={styles.grid}>
        {board.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.boxText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

// 🧠 Winner Logic
const checkWinner = (board) => {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default Gamer;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 10,
  },
  turn: {
    fontSize: 18,
    color: '#38bdf8',
    marginBottom: 20,
  },
  grid: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetBtn: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#22c55e',
    borderRadius: 8,
  },
  resetText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
