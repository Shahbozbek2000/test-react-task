import React, { useState } from "react";
import { LayoutProvider } from "../../../../assets/styles/allStyle";
import {
  PasswordInfo,
  FormContainer,
  FormGroupWrap,
  PasswordFooter,
} from "../changePassword/style";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../../../components/button";
import { FormGroup } from "../../../../components/form-group/FormGroup";
import { phoneApi } from "../../../../services/api/pagesApi";
import toast, { Toaster } from "react-hot-toast";

export default function ChangePhoneNumber() {
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
        let newData = new FormData();
        setIsLoading(true);
        newData.append("phone", data?.phone);
        await phoneApi.phone(newData);
        setIsLoading(false);
        toast.success("Telefon raqamingiz muvaffaqiyatli yangilandi");
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  return (
    <LayoutProvider>
      <PasswordInfo className="text-center">
        <h1>Change Phone number</h1>
        <p className="phone-number-info">
          Phone no. currently registered (+998 93 497 11-38) Available services:
          EXAMS; HELP DASK; ELECTIONS;
        </p>
      </PasswordInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer className="form-container">
          <FormGroupWrap>
            <FormGroup
              id={"phone"}
              label={"New phone number:"}
              register={register("phone", {
                required: {
                  value: true,
                  message: "Iltimos telefon raqamni to'g'ri kiriting!",
                },
              })}
              error={errors?.phone}
              placeholder={"Eg. your phone number here"}
            />
          </FormGroupWrap>
          <div className="text-center mt-4">
            <ButtonComponent
              name="Send"
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
