import MeetUpList from '../components/meetups/MeetupList'
import Head from 'next/head'


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWF6s-qZPheCh_jxPvW2g9Ie9uWmoaLLPOQ&usqp=CAU',
        address: 'Some first Address',
        description: 'This is a second meetup'
    },
    {
        id: 'm2',
        title: 'A second Title',
        image: 'https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg',
        address: 'Some Second Address',
        description: 'This is a second meetup'
    },
    {
        id: 'm3',
        title: 'A Third Title',
        image: 'https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg',
        address: 'Some Third Address',
        description: 'This is a third meetup'
    },
    {
        id: 'm4',
        title: 'A fourth Title',
        image: 'https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg',
        address: 'Some fourth Address',
        description: 'This is a fourth meetup'
    },
    {
        id: 'm5',
        title: 'A fifth Title',
        image: 'https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF-768-80.jpg',
        address: 'Some fifth Address',
        description: 'This is a fifth meetup'
    }
]



const HomePage = (props) => {
    return (
      <div>
            <Head>
                <title>Meetups</title>
            </Head>
        <MeetUpList meetups = {props.meetups} />
      </div>
  )
}

export async function getStaticProps() {
    return {
        props: {
            meetups : DUMMY_MEETUPS
        }
    }    
}



export default HomePage