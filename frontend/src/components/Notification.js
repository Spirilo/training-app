import { useSelector } from 'react-redux'

import './Notification.css'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if(notification === null) return null

  return(
    <div>
      {notification}
    </div>
  )
}

export default Notification