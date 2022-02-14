import React, { useState, useEffect, Fragment } from "react";
import {
  RegisterProvider,
  RegisterImageWrap,
  MainRegister,
  LeftSide,
  RightSide,
  RightSideCard,
} from "./style";
import RegisterPicture from "../../../../Assets/images/sign-up.svg";
import { useForm, Controller } from "react-hook-form";
import { FormGroup } from "../../../../Components/form-group/FormGroup";
import { StyleSelectAll } from "../../../../Assets/styles/allStyle";
import Select from "react-select";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonComponent from "../../../../Components/button";
import { authApi } from "../../../../services/api/pagesApi";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function RegisterComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [faculty, setFaculty] = useState(undefined);
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
  useEffect(() => {
    async function GetFaculty() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_ROOT}api/faculty`
        );
        setFaculty(res?.data);
        let sortSelect = Object.values(res?.data)?.map((x, i) => {
          return {
            label: x,
            value: i,
          };
        });
        setFaculty(sortSelect);
      } catch (e) {
        console.log(e);
      }
    }
    GetFaculty();
  }, []);

  //  console.log(faculty[keys])
  async function onSubmit(data) {
    console.log(data);
    try {
      if (!isLoading) {
        setIsLoading(true);
        let newData = new FormData();
        newData.append("login", data?.login);
        newData.append("name", data?.name);
        newData.append("surname", data?.surname);
        newData.append("email", data?.email);
        newData.append("phone", data?.phone);
        newData.append("password", data?.password);
        newData.append("faculty_id", data?.faculty_id?.value);
        await authApi.register(newData);
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
        setTimeout(() => {
          navigate("/login");
        }, 500);
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
              <h1 className="side-title">
                Registration
                <br /> form
              </h1>
            </LeftSide>
            <RightSide>
              <RightSideCard>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form container">
                    <div className="form-title text-center m-auto w-100 d-flex justify-content-center">
                      <h2 className="text-center">LOGO</h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-12  col-12">
                        <FormGroup
                          id={"login"}
                          label={"Login"}
                          register={register("login", {
                            required: {
                              value: true,
                              message:
                                "Iltimos foydalanuvchi nomini to'g'ri  kiriting!",
                            },
                          })}
                          error={errors?.login}
                          placeholder={"Eg. your login here"}
                        />
                      </div>
                      <div className="col-lg-12  col-12">
                        <FormGroup
                          id={"name"}
                          label={"Name"}
                          register={register("name", {
                            required: {
                              value: true,
                              message:
                                "Iltimos ismingizni to'g'ri  kiriting!",
                            },
                          })}
                          error={errors?.name}
                          placeholder={"Eg. your name here"}
                        />
                      </div>
                      <div className="col-lg-12  col-12">
                        <FormGroup
                          id={"surname"}
                          label={"Surname"}
                          register={register("surname", {
                            required: {
                              value: true,
                              message:
                                "Iltimos familiyani to'g'ri  kiriting!",
                            },
                          })}
                          error={errors?.surname}
                          placeholder={"Eg. your login here"}
                        />
                      </div>
                      <div className="col-lg-12  col-12">
                        <FormGroup
                          id={"email"}
                          label={"e-mail"}
                          register={register("email", {
                            required: {
                              value: true,
                              message:
                                "Iltimos emailni to'g'ri  kiriting!",
                            },
                          })}
                          error={errors?.email}
                          placeholder={"Eg. your email here"}
                        />
                      </div>
                      <div className="col-lg-12  col-12">
                        <FormGroup
                          id={"phone"}
                          label={"Phone number"}
                          register={register("phone", {
                            required: {
                              value: true,
                              message:
                                "Iltimos telefon raqamni to'g'ri  kiriting!",
                            },
                          })}
                          error={errors?.phone}
                          placeholder={"Eg. your number here"}
                        />
                      </div>
                      <div className="col-lg-12 col-12">
                        <div className="form-group">
                          <label htmlFor="Viloyatingiz">Faculty</label>
                          <StyleSelectAll>
                            <Controller
                              control={control}
                              name={"faculty_id"}
                              // rules={{ required: true }}
                              render={({ field: { onChange } }) => (
                                <Select
                                  onChange={onChange}
                                  placeholder={"Select Faculty"}
                                  options={faculty}
                                />
                              )}
                            />
                          </StyleSelectAll>
                          {/* <select className="form-control" placeholder="Select Faculty">
                        <option></option>
                      </select> */}
                        </div>
                      </div>
                      <div
                        className="col-lg-12 m-0 col-12"
                        style={{ position: "relative" }}
                      >
                        <FormGroup
                          id={"password"}
                          label={"Password"}
                          type={values.showPassword ? "text" : "password"}
                          register={register("password", {
                            required: {
                              value: true,
                              message: "Iltimos parolni qayta kiriting!",
                            },
                          })}
                          error={errors?.password}
                          placeholder={"Parolni takrorlang"}
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

                    <div className="d-flex justify-content-center mt-3">
                      <ButtonComponent
                        name="Change"
                        propsWidth="180px"
                        propsHeight="35px"
                        type="submit"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="reload-login text-center">
                      <Link to="/login" className="nav-link text-dark m-0">
                        Kirish
                      </Link>
                    </div>
                  </div>
                </form>
                <Toaster />
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
