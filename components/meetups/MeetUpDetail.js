
import classes from './MeetUpDetail.module.css'

const MeetUpDetail = (props) => {
  return (
      <div className={classes.detail} >
          <img className={classes.image} src={props.image} alt = {props.title} />
          <h1 >{props.title}</h1>
          <p >{props.description}</p>
          <address >{props.address}</address>
      </div>
  )
}

export default MeetUpDetail