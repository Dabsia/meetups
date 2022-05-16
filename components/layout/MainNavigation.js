import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div>
        <Link href='/' className={classes.logo}>React Meetups </Link>
      
      </div>
      <nav>
        <ul>
          <li>
            <Link href ='/'>All Meetups</Link>
          </li>
          <li>
            <Link href ='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
