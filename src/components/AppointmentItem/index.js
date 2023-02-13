// Write your code here

import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          data-testid="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentIem

/*
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isActive} = appointmentDetails

  const onClickChangeStatus = () => {
    toggleIsStarred(id)
  }

  const starImage = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <div className="flex-grow">
      <li className="appointment-list-item">
        <div>
          <h1 className="heading">{title}</h1>
          <p className="description">Date: {date}</p>
        </div>
        <button
          className="star-btn"
          type="button"
          onClick={onClickChangeStatus}
          data-testid="star"
        >
          <img src={starImage} alt="star" className="star" />
        </button>
      </li>
    </div>
  )
}

export default AppointmentItem
*/
