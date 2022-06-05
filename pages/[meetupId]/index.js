import MeetUpDetail from "../../components/meetups/MeetUpDetail"


const MeetUpDetails = () => {
    return (
        <MeetUpDetail
            title='A First Meetup'
            image='https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg'
            description='The meetup description'
            address='Some Street 5, Some City' />
  )
}

export async function getStaticPaths() {
    return {
        fallback : false,
        paths: [
            {
                params: {
                    meetupId : 'm1'
                }
            },
            {
                params: {
                    meetupId : 'm2'
                }
            }
        ]
    }   
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    console.log(meetupId)

    return {
        props: {
            meetUpData: {
                title: 'A First Meetup',
                id: meetupId,
                image: 'https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg',
                description: 'The meetup description',
                address : 'Some Street 5, Some City' 
            }
        }
    }

}

export default MeetUpDetails
