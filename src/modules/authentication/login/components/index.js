import React, { Fragment, useEffect, useState } from "react";
import {
  RegisterProvider,
  RegisterImageWrap,
  MainRegister,
  LeftSide,
  RightSide,
  RightSideCard,
} from "../../register/components/style";
import RegisterPicture from "../../../../Assets/images/sign-up.svg";
import { useForm } from "react-hook-form";
import { FormGroup } from "../../../../Components/form-group/FormGroup";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonComponent from "../../../../Components/button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [values, setValues] = useState({
    showPassword: false,
  });
  useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem("userToken"));
    if (userToken) {
      navigate("/profile");
    }
    setToken(userToken);
  }, []);

  async function onSubmit(data) {
    try {
      if (!isLoading) {
        setIsLoading(true);
        const newData = new FormData();
        newData.append("login", data.login);
        newData.append("password", data.password);
        const res = await axios.post(
          `${process.env.REACT_APP_API_ROOT}api/login`,
          newData
        );
        localStorage.setItem("userData", JSON.stringify(res));
        localStorage.setItem("userToken", JSON.stringify(res?.data?.token));
        console.log(res?.data?.token);
        setTimeout(() => {
          navigate("/profile");
        }, 400);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      {!token ? (
        <RegisterProvider>
          <RegisterImageWrap>
            <img src={RegisterPicture} alt="register" />
          </RegisterImageWrap>
          <MainRegister>
            <LeftSide>
              <h1 className="side-logo">LOGO</h1>
              <h1 className="side-title">Sign in</h1>
            </LeftSide>
            <RightSide>
              <RightSideCard>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="login-form container">
                    <div className="form-title  w-100 d-flex justify-content-center">
                      <h2 className="text-center">LOGO</h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <FormGroup
                          id={"login"}
                          label={"Login"}
                          register={register("login", {
                            required: {
                              value: true,
                              message: "Iltimos foydalanuvchi nomini kiriting!",
                            },
                          })}
                          error={errors?.login}
                          placeholder={"Eg. your login here"}
                        />
                      </div>
                      <div
                        className="col-lg-12 m-0 col-12"
                        style={{ position: "relative" }}
                      >
                        <FormGroup
                          id={"password"}
                          label={"Pasword"}
                          type={values.showPassword ? "text" : "password"}
                          register={register("password", {
                            required: {
                              value: true,
                              message: "Iltimos parolni  kiriting!",
                            },
                          })}
                          error={errors?.password}
                          placeholder={"Eg. your pasword here"}
                        />
                        <IconButton
                          className="hide-password"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </div>
                    </div>
                    <div className="reload-login text-center">
                      <Link to="/" className="nav-link text-dark">
                        Sign Up
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <ButtonComponent
                        name="Sign in"
                        propsWidth="180px"
                        propsHeight="35px"
                        type="submit"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </form>
              </RightSideCard>
            </RightSide>
          </MainRegister>
        </RegisterProvider>
      ) : (
        ""
      )}
    </Fragment>
  );
}
