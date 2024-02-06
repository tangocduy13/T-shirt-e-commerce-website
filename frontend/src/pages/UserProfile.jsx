import React from "react";
import {
  Button,
  Card,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import NavbarMenu from "../components/NavbarMenu.jsx";

const UserProfile = () => {
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <NavbarMenu />
      <Card color="transparent" shadow={false} className={"mt-7"}>
        <Typography variant="h4" color="blue-gray">
          Thông tin tài khoản
        </Typography>
        <form className="mt-8 mb-4 w-80 max-w-screen-lg sm:w-96">
          <div className={"mb-2 flex flex-col gap-6"}>
            <Typography variant={"h6"} color={"blue-gray"} className={"-mb-3"}>
              Họ và tên
            </Typography>
            <Input
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              placeholder={"Nguyen Van A"}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className={"mb-4 flex flex-col gap-6"}>
            <Typography variant={"h6"} color={"blue-gray"} className={"-mb-3"}>
              Email
            </Typography>
            <Input
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              placeholder={"email@gmail.com"}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className={"mb-4 flex flex-col gap-6"}>
            <Typography variant={"h6"} color={"blue-gray"} className={"-mb-3"}>
              Số điện thoại
            </Typography>
            <Input
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              placeholder={"0789381***"}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className={"mb-4 flex flex-col gap-6"}>
            <Typography variant={"h6"} color={"blue-gray"} className={"-mb-3"}>
              Địa chỉ nhận hàng
            </Typography>
            <Input
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              placeholder={"Vui lòng ghi rõ tên đường, số nhà"}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className={"mb-4 flex flex-col gap-6"}>
            <Typography variant={"h6"} color={"blue-gray"} className={"-mb-3"}>
              Giới tinh
            </Typography>
            <div className={"flex justify-around"}>
              <Radio
                name={"gender"}
                color={"blue-gray"}
                label={"Nam"}
                defaultChecked
              />
              <Radio name={"gender"} color={"blue-gray"} label={"Nữ"} />
              <Radio name={"gender"} color={"blue-gray"} label={"Khác"} />
            </div>
          </div>
          <Button className={"float-left"}>Lưu</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserProfile;
