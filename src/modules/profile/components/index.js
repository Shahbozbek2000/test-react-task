import React, { Fragment } from "react";
import ChangePassword from "./changePassword";
import Forward from "./forward";
import Navbar from "./navigation";
import ChangePhoneNumber from "./phone-number";
import { Column } from "./style";
import UserInfo from "./userInfo";

export default function ProfileComponents() {
  return (
    <Fragment>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <Column className="col-lg-6 col-md-6 col-12">
            <UserInfo />
          </Column>
          <Column className="col-lg-6 col-md-6 col-12">
            <ChangePassword />
          </Column>
          <Column className="col-lg-6 col-md-6 col-12">
            {/* <ChangePhoneNumber/> */}
            <ChangePhoneNumber />
            {/* <UserInfo/> */}
          </Column>
          <Column className="col-lg-6 col-md-6 col-12">
            <Forward />
          </Column>
        </div>
      </div>
    </Fragment>
  );
}
