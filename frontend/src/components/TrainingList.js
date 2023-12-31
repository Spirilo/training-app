import './TrainingList.css'

const Training = ({ training }) => {
  return(
    <li key={training.id}>{training.type}, duration {training.duration} min</li>
  )
}

const TrainingList = ({ user }) => {
  if (user.trainings.length === 0) {
    return <div className='no-training'>No workouts yet, sure you can do better...</div>
  }

  return(
    <div className='training'>
      <ul>
        {user.trainings.map(t => 
          <Training training={t} />
        )}
      </ul>
    </div>
  )
}

export default TrainingList