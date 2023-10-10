const TrainingList = ({ user }) => {
  console.log(user)
  return(
    <div>
      <ul>
        {user.trainings.map(t => 
          <li key={t.id}>{t.type}, duration {t.duration} min</li>
        )}
      </ul>
    </div>
  )
}

export default TrainingList