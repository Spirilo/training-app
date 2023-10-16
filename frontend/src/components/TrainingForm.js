import { useDispatch } from "react-redux"
import { useField } from "../hooks"
import { useNavigate } from "react-router"
import { createTraining } from "../reducers/userReducer"

import './TrainingForm.css'

const TrainingForm = () => {
  const type = useField('type')
  const duration = useField('duration')
  const other = useField('other')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const add = (ev) => {
    ev.preventDefault()
    let training
    if (type.value === 'other') {
      training = {
        type: other.value,
        duration: Number(duration.value)
      }
    } else {
      training = {
        type: type.value,
        duration: Number(duration.value)
      }
    }
    dispatch(createTraining(training))
    navigate('/')
  }

  return(
    <div className="training-form">
      <form onSubmit={add}>
        <p>Training type: 
        <select name="workouts" {...type}>
          <option disabled={true} value=''>Choose training</option>
          <option value='Gym'>Gym</option>
          <option value='Swim'>Swim</option>
          <option value='Run'>Run</option>
          <option value='other'>Other, what?</option>
        </select>
        </p>
        <div>
          {type.value === 'other' && <input placeholder="Type training here" {...other} />}
        </div>
        <div>
          <p>Duration (in minutes): <input {...duration} /></p>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TrainingForm