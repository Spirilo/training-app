const Training = ({ type, duration }) => {
  return(
    <li>{type}, duration {duration} min</li>
  )
}

const TrainingList = ({ user }) => {
  if (user.trainings.length === 0) {
    return <div>No workouts yet, sure you can do better...</div>
  }

  return(
    <div>
      <ul>
        {user.trainings.map(t => 
          <Training key={t.id} type={t.type} duration={t.duration} />
        )}
      </ul>
    </div>
  )
}

export default TrainingList