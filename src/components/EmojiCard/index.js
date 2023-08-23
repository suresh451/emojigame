// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} className="card-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
