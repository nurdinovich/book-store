import classes from './HeaderNav.module.css'
import { Link, Outlet } from "react-router-dom"
import instagram from '../HeaderNav/img/ins.svg'
import feecbook from '../HeaderNav/img/Group.svg'
const HeaderNav = () => {
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>BookStore</div>
        <ul className={classes.navbar}>
          <li><Link className={classes.link}>Home</Link></li>
          <li><Link className={classes.link}>About</Link></li>
          <li><Link className={classes.link}>lacotions</Link></li>
          <li><Link className={classes.link}>Contacts</Link></li>
          <button className={classes.headerBtn}>book now</button>
          <li><Link className={classes.link}><img src={instagram} alt="" /></Link></li>
          <li><Link className={classes.link}><img src={feecbook} alt="" /></Link></li>
        </ul>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default HeaderNav