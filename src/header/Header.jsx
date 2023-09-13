import style from "../header/Header.module.css"

function Header() {
  return (
    <div className={style.mainContainer}>
      <img src={process.env.PUBLIC_URL + '/website_logo.png'} className={style.logo}/>
    </div>
  )
}

export default Header;
