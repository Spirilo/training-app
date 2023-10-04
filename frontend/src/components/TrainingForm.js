import { useDispatch } from "react-redux"
import { useField } from "../hooks"
import { useNavigate } from "react-router"
import { createTraining } from "../reducers/userReducer"

const TrainingForm = () => {
  const type = useField('type')
  const duration = useField('duration')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const add = (ev) => {
    ev.preventDefault()
    const training = {
      type: type.value,
      duration: Number(duration.value)
    }
    dispatch(createTraining(training))
    navigate('/')
  }

  return(
    <div>
      <form onSubmit={add}>
        <div>
          Type: <input {...type} />
        </div>
        <div>
          Duration: <input {...duration} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TrainingForm