import React, { useState } from "react";
import { LayoutProvider } from "../../../../Assets/styles/allStyle";
import {
  PasswordInfo,
  FormContainer,
  FormGroupWrap,
  PasswordFooter,
} from "../changePassword/style";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../../../Components/button";
import { FormGroup } from "../../../../Components/form-group/FormGroup";
import { emailApi } from "../../../../services/api/pagesApi";
import toast, { Toaster } from "react-hot-toast";

export default function Forward() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data) {
    try {
      if (!isLoading) {
        setIsLoading(true);
        console.log(data);
        let newData = new FormData();
        newData.append("email", data.email);
        await emailApi.email(newData);
        setIsLoading(false);
        toast.success("E-mail muvaffaqiyatli yangilandi!");
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  return (
    <LayoutProvider>
      <PasswordInfo className="text-center">
        <h1>Forward</h1>
        <p className="phone-email-info">
          TDAU is not responsible for any lost message due to the activation of
          the forwarding service. Valid messages are those stored in the server
          with domain: student@tdau.uz Make sure you regularly delete the
          messages stored on this server.
        </p>
      </PasswordInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroupWrap>
            <FormGroup
              id={"login"}
              type="email"
              label={"Forwarding e-mail address:"}
              register={register("login", {
                required: {
                  value: true,
                  message: "Iltimos emailni to'g'ri kiriting!",
                },
              })}
              error={errors?.login}
              placeholder={"Eg. your phone number here"}
            />
          </FormGroupWrap>
          <div className="text-center mt-4">
            <ButtonComponent
              name="Change"
              propsWidth="142px"
              propsHeight="35px"
              type="submit"
              disabled={isLoading}
            />
            <PasswordFooter>
              Last password change: 29/07/2021 22:09 - IP 151.33.106.247
            </PasswordFooter>
          </div>
        </FormContainer>
      </form>
      <Toaster />
    </LayoutProvider>
  );
}
