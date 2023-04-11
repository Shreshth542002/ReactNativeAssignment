import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,AppState } from 'react-native';

const images = [
  { uri: require('../assets/golden-gate-bridge.jpg'), answer: 'Golden Gate Bridge', options: ['Brooklyn Bridge', 'Golden Gate Bridge', 'Tower Bridge', 'Sydney Harbour Bridge'] },
  { uri: require('../assets/eiffel-tower.jpg'), answer: 'Eiffel Tower', options: ['Eiffel Tower', 'Big Ben', 'Colosseum', 'Statue of Liberty'] },
  { uri: require('../assets/taj-mahal.jpg'), answer: 'Taj Mahal', options: ['Pyramids of Giza', 'Machu Picchu', 'Angkor Wat', 'Taj Mahal'] },
  { uri: require('../assets/wall-of-china.jpg'), answer: 'The Great Wall of China', options: ['Stonehenge', 'The Colossus of Rhodes', 'The Great Wall of China', 'Chichen Itza'] },
  { uri: require('../assets/burj-al-arab.jpg'), answer: 'Burj Al Arab', options: ['Burj Al Arab', 'Petronas Towers', 'Taipei 101', 'Shanghai Tower'] },
  { uri: require('../assets/twin-towers.jpg'), answer: 'Twin Towers', options: ['Golden Temple', 'Empires State Building', 'Twin Towers', 'Sydney Harbour Bridge'] },
  { uri: require('../assets/burj-khalifa.jpg'), answer: 'Burj Khalifa', options: ['Kashi Vishwanath', 'Burj Khalifa', 'Emirates Tower', 'Naruto Bridge'] },
  { uri: require('../assets/dubai-frame.jpg'), answer: 'Dubai Frame', options: ['Golden Temple', 'Dubai Frame', 'Twin Towers', 'Sydney Harbour Bridge'] },
  { uri: require('../assets/atlantis-hotel.jpg'), answer: 'Atlantis', options: ['Andaman Nicobar Islands', 'Gateway of India', 'Hanging Garden of Babylon', 'Atlantis'] },
  { uri: require('../assets/statue-of-liberty.jpg'), answer: 'Statue of Liberty', options: ['Caltech MIT', 'Statue of Liberty', 'Konark Temple', 'Nalanda University'] },
  { uri: require('../assets/statue-of-liberty.jpg'), answer: 'Statue of Liberty', options: ['Caltech MIT', 'Statue of Liberty', 'Konark Temple', 'Nalanda University'] },
];

export default function App() {
  const [score, setScore] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  function handlePress(){
    setScore(0)
  }

  const handlePlayAgainPress = () => {
    setShowOptions(true);
    setShowPlayAgain(false);
    setScore(0);
  };

  function handleOptionPress(option) {
    if (option === currentImage.answer) {
      setScore(score + 1);
    } else {
      alert(`Wrong! The correct answer is ${currentImage.answer}. Your score is ${score}`);
      setShowOptions(false);
      setShowPlayAgain(true);
    }
    if (currentIndex <= 9){
      setCurrentIndex(currentIndex + 1);
    }
    else{
      alert(`Congrats you have won!! Your score is ${score}`);
      setScore(0)
      setShowOptions(false);
      setShowPlayAgain(true);
    }
  }

  function renderOptions() {
    return currentImage.options.map((option, index) => (
      <TouchableOpacity key={index} style={styles.option} onPress={() => handleOptionPress(option)}>
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  }

  const currentImage = images[currentIndex];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={currentImage.uri} />
      {/* <View style={styles.optionsContainer}>
        {renderOptions()}
      </View> */}
      {/* <View>
        {showPlayAgain && (
          <TouchableOpacity style={styles.button} onPress={handlePlayAgainPress}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        )}
      </View> */}
      {showOptions ? (
        <View style={styles.optionsContainer}>{renderOptions()}</View>
      ) : (
        <View style={styles.feedbackContainer}>
          {showPlayAgain && (
            <TouchableOpacity style={styles.button} onPress={handlePlayAgainPress}>
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <Text style={styles.scoreText}>Score: {score}</Text>
      <View>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  optionText: {
    fontSize: 18,
  },
  feedbackContainer: {
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  scoreText: {
    fontSize: 30,
  }
});