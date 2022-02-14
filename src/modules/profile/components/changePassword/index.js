import React, { useState } from "react";
import { FormGroup } from "../../../../Components/form-group/FormGroup";
import { LayoutProvider } from "../../../../Assets/styles/allStyle";
import {
  PasswordInfo,
  FormContainer,
  FormGroupWrap,
  PasswordFooter,
} from "./style";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonComponent from "../../../../Components/button";
import { passwordApi } from "../../../../services/api/pagesApi";
import toast, { Toaster } from "react-hot-toast";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    showCurrentPassword: false,
    showPassword: false,
    showRepeatPassword: false,
  });

  async function onSubmit(data) {
    try {
      if (!isLoading) {
        setIsLoading(true);
        let newData = new FormData();
        newData.append("old_password", data.old_password);
        newData.append("new_password", data.new_password);
        newData.append("repeat_password", data.repeat_password);
        await passwordApi.password(newData);
        setIsLoading(false);
        toast.success("Parolingizni muvaffaqiyatli yangiladingiz!");
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  const handleClickShowPassword = (type) => {
    if (type === "currentPassword") {
      setValues({
        ...values,
        showCurrentPassword: !values.showCurrentPassword,
      });
    } else if (type === "password") {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    } else {
      setValues({
        ...values,
        showRepeatPassword: !values.showRepeatPassword,
      });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LayoutProvider>
      <PasswordInfo className="text-center">
        <h1>Change password</h1>
        <p> We suggest you change your password regularly</p>
      </PasswordInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroupWrap>
            <FormGroup
              id={"old_password"}
              label={"Currently pasword:"}
              type={values.showCurrentPassword ? "text" : "password"}
              register={register("old_password", {
                required: {
                  value: true,
                  message: "Iltimos parolni  kiriting!",
                },
              })}
              error={errors?.old_password}
              placeholder={"Eg. your pasword here"}
            />
            <IconButton
              className="hide-password"
              onClick={() => handleClickShowPassword("currentPassword")}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </FormGroupWrap>
          <FormGroupWrap>
            <FormGroup
              id={"new_password"}
              label={"New pasword:"}
              type={values.showPassword ? "text" : "password"}
              register={register("new_password", {
                required: {
                  value: true,
                  message: "Iltimos yangi parolni  kiriting!",
                },
              })}
              error={errors?.new_password}
              placeholder={"Eg. your pasword here"}
            />
            <IconButton
              className="hide-password"
              onClick={() => handleClickShowPassword("password")}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </FormGroupWrap>
          <FormGroupWrap>
            <FormGroup
              id={"repeat_password"}
              label={"Confirm pasword::"}
              type={values.showRepeatPassword ? "text" : "password"}
              register={register("repeat_password", {
                required: {
                  value: true,
                  message: "Iltimos yangi parolni qayta  kiriting!",
                },
              })}
              error={errors?.repeat_password}
              placeholder={"Eg. your pasword here"}
            />
            <IconButton
              className="hide-password"
              onClick={() => handleClickShowPassword("repeatPassword")}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </FormGroupWrap>
          <div className="text-center mt-4">
            <ButtonComponent
              name="change"
              propsWidth="142px"
              propsHeight="35px"
              disabled={isLoading}
            />
            <PasswordFooter>
              Last password change: 29/07/2021 22:09 - IP 151.33.106.247
            </PasswordFooter>
          </div>
        </FormContainer>
      </form>
      <Toaster/>
    </LayoutProvider>
  );
}
