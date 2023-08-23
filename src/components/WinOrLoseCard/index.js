// Write your code here.

import './index.css'

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? winImg : loseImg
  const gameStatus = isWon ? 'You won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-div">
      <div className="win-or-lose-main-div">
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} className="win-or-lose-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
