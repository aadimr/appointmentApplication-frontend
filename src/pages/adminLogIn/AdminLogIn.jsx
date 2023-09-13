import Input from "../../components/Input";
import Button from "../../components/Button";
import style from "../adminLogIn/AdminLogIn.module.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { logInUser } from "../slices/userSlice";
// import { userLogInSchema } from "./logInValidation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
import { useState } from "react";

const initialValues = {
    emailId: "",
    password: "",
}

function AdminLogIn() {

    const [showAndHide, setShowAndHide] = useState(false)

    function showAndHidePswd() {
        setShowAndHide(!showAndHide)
    }

    const navigate = useNavigate()

    // const dispatch = useDispatch()

    const { values, handleBlur, errors, handleChange, touched, handleSubmit, setFieldError } = useFormik({
        initialValues: initialValues,
        // validationSchema: userLogInSchema,
        // onSubmit: async (values, action) => {
        //     try {
        //         const response = await dispatch(logInUser(values)).unwrap();
        //         if (response.status === true) {
        //             localStorage.setItem('auth', JSON.stringify({ token: response.data.token }))
        //             const JWTtoken = JSON.parse(localStorage.getItem('auth'));
        //             const decoded = jwtDecode(JWTtoken.token)
        //             localStorage.setItem("loggedInUserDetail", JSON.stringify({details: decoded}))
        //             action.resetForm();
        //             navigate("/");
        //         }
        //     } catch (error) {
        //         if (error && error.message) {
        //             setFieldError("password", "Email or Password is wrong");
        //         }
        //     }
        // }
    })

    return (
        <div className={style.mainContainer}>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full sm:w-auto">
                <div className={style.inputContainer}>
                    <label className={style.label}>Email Address:</label>
                    <Input placeholder={"Enter your email"} name={"emailId"} value={values.emailId} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.emailId && touched.emailId ? <p className="text-[#FF0000]">*{errors.emailId}</p> : null}
                </div>
                <div className={style.inputContainer}>
                    <div className={style.visibilityIconContainer}>
                        <label className={style.label}>Password:</label>
                        <span onClick={showAndHidePswd}><VisibilityIcon/>{showAndHide ? "Hide" : "Show"}</span>
                    </div>
                    <Input type={showAndHide ? "text" : "password"} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ? <p className="text-[#FF0000]">*{errors.password}</p> : null}
                </div>
                <div className={style.inputContainer}>
                    <Button type={"submit"} name={"Submit"} className={style.btn} />
                </div>
            </form>
        </div>
    )
}

export default AdminLogIn;
