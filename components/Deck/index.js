import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'
import { purple } from '../../utils/colors'

const Deck = props => {
    const { deck, navigation } = props;
    const { title, questions } = deck;
  
    return (
      <View style={styles.view}>
        <View style={styles.deck}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cards}>{questions.length} cards</Text>
        </View>
        <Button
          title="Add Question"
          onPress={() => navigation.navigate('AddQuestion', { title })}
        />
        <View style={styles.separatedButton}>
          <Button
            color={purple}
            disabled={!questions.length}
            title="Start Quiz"
            onPress={() => navigation.navigate('Quiz', { questions })}
          />
        </View>
      </View>
    );
  };
  
Deck.propTypes = {
    deck: PropTypes.shape({
        title: PropTypes.string.isRequired,
        questions: PropTypes.array.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
}
  
Deck.navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    return { title: deck.title };
}

function mapStateToProps(decks, { navigation }) {
    const { title } = navigation.state.params.deck;
    const deck = decks[title];

    return { deck };
}

export default connect(mapStateToProps)(Deck);