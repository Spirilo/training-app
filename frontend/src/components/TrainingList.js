const Training = ({ type, duration }) => {
  return(
    <li>{type}, duration {duration} min</li>
  )
}

const TrainingList = ({ user }) => {
  console.log(user)
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