/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderResultCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }
    console.log(topScore)
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisCount = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisCount)
    } else {
      if (emojisList.length - 1 === clickedEmojisCount) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojis()

    return (
      <ul className="ul-list">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state
    return (
      <div>
        <NavBar
          topScore={topScore}
          score={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
        />
        <div>
          {isGameInProgress ? this.renderEmojisList() : this.renderResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
