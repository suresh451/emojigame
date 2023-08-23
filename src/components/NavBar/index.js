// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <nav className="nav-div-main">
      <div className="nav-div1">
        <div className="nav-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="nav-img"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="nav-div">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
