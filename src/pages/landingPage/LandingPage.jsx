import style from "../landingPage/LandingPage.module.css"
import Button from '../../components/Button';
import { Link,useNavigate } from "react-router-dom";

function LandingPage() {
  return (
    <div className={style.mainContainer}>
      <p>Click on Appointment if you want to schedule an appointment or click on any of the button as per your need if you are an Admin</p>
      <div className={style.btnContainer}>
      <Link to={"/admin/logIn"}><Button name={"Admin LogIn"}/></Link>
      <Button name={"Appointment"}/>
      </div>
    </div>
  )
}

export default LandingPage;
