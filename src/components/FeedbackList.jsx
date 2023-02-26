import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
  const { feedback,isLoading } = useContext(FeedbackContext)

  if  (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }
  return isLoading ? 
  (<Spinner/>)
   : (
    <div className='feedback-list'>
        {feedback.map((item) => (
          <div
            key={item.id}
          >
            <FeedbackItem key={item.id} item={item} />
          </div>
        ))}
    </div>
  )

  
}

export default FeedbackList