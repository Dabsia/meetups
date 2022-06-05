import Head from 'next/head'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const addMeetUpHandler = (meetupData) => {
    console.log(meetupData)
}


const NewMeetUpPage = () => {
    return (
      <div>
        <Head>
            <title>Create New-meetup</title>
        </Head>
        <NewMeetUpForm onAddMeetup = {addMeetUpHandler} />
      </div>
  )
}

export default NewMeetUpPage