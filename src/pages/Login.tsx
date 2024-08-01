import React, { useState } from "react";
import image from "../images/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type Inputs = {
  pickup?: string;
  drop?: string;
  slot?: string;
};

export const Login = () => {
  const [nav, setNav] = useState<string | null>("Service Center");

  const [det, setDet] = useState<string | null>("Booking ID");

  const [input, setInput] = useState<Inputs | null>(null);

  const buttons = [
    {
      name: "Service Center",
    },
    {
      name: "Bookings",
    },
    {
      name: "Service Advisor",
    },
    {
      name: "Users",
    },
  ];

  const sidebuttons = [
    {
      name: "Accept",
      className: "bg-green-800 text-sm text-white font-bold w-20 rounded",
    },
    {
      name: "Reject",
      className: "bg-slate-200 text-sm text-red-800 font-bold w-20 rounded",
    },
    {
      name: "Time Left",
      className: "bg-slate-200 text-sm w-20 rounded p-2 font-bold",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    setNav(data);
  };

  const ButtonComponents = buttons.map((button) => (
    <Button
      key={button.name}
      type="button"
      onClick={handleClick}
      name={button.name}
      className={`${
        nav === button.name ? "border-b-2 border-blue-600 pb-2 " : "pb-2"
      }`}
      data-name={button.name}
    />
  ));

  const SideButtonComponents = sidebuttons.map((button) => (
    <Button
      key={button.name}
      type="button"
      name={button.name}
      onClick={() => alert(button.name)}
      className={button.className}
      data-name={button.name}
    />
  ));

  const handleClicks = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    setDet(data);
  };

  return (
    <div className="flex flex-col w-screen h-screen border">
      <div className="border pl-4 bg-blue-800">
        <img src={image} alt="img" className="h-16 w-16" />
      </div>
      <div className="border flex pl-4 pt-4 text-2xl md:gap-16 shadow-xl">
        {ButtonComponents}
      </div>
      <div className="flex bg-slate-200 h-[100%]">
        <div className="basis-1/6 flex flex-col bg-white mt-1 h-max">
          <p className="ml-6 mt-1 text-lg pl-7 text-left pb-2 w-full">
            ID: 23521
          </p>
          <Button
            type="button"
            name="Documents"
            data-name="Documents"
            onClick={handleClick}
            className={`${
              nav === "Documents"
                ? "bg-slate-200 ml-3 mt-8 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-8 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Details"
            data-name="Details"
            onClick={handleClick}
            className={`${
              nav === "Details"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />

          <Button
            type="button"
            name="Bookings"
            data-name="Bookings"
            onClick={handleClick}
            className={`${
              nav === "Bookings"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Service Advisors"
            data-name="Service Advisors"
            onClick={handleClick}
            className={`${
              nav === "Service Advisors"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Images"
            data-name="Images"
            onClick={handleClick}
            className={`${
              nav === "Images"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Instant Services"
            data-name="Instant Services"
            onClick={handleClick}
            className={`${
              nav === "Instant Services"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Scheduled Services"
            data-name="Scheduled Services"
            onClick={handleClick}
            className={`${
              nav === "Scheduled Services"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Booking Preferences"
            data-name="Booking Preferences"
            onClick={handleClick}
            className={`${
              nav === "Booking Preferences"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
          <Button
            type="button"
            name="Highlights"
            data-name="Highlights"
            onClick={handleClick}
            className={`${
              nav === "Highlights"
                ? "bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
                : "hover:bg-slate-200 ml-3 mt-5 text-lg pl-7 text-left pb-2 w-full rounded-lg"
            }`}
          />
        </div>
      </div>

      {/* {nav === "Bookings" ? (
        <div className="flex h-[100%] w-[100%]  bg-slate-200">
          <div className="w-[14%] text-center bg-white pt-7 mt-3 text-blue-900 ">
            <p className="text-2xl text-center">ID:1234567</p>
          </div>
          <div className="flex flex-col w-[86%] border ">
            <div className="m-3 bg-white rounded pl-5 pt-2 pr-5">
              <div className="text-3xl text-bold">A1 Car Service Center</div>
              <div className="flex flex-wrap justify-between">
                <div className="pl-5 pr-5 pt-5 flex flex-wrap gap-5">
                  <Button
                    type="button"
                    name="Booking ID:1234567"
                    data-name="Booking ID"
                    onClick={handleClicks}
                    className={`${
                      det === "Booking ID"
                        ? "w-36 text-sm font-semibold bg-slate-200 rounded"
                        : "w-36 text-sm font-semibold"
                    }`}
                  />
                  <Button
                    type="button"
                    className={`${
                      det === "Date Time"
                        ? "w-36 text-sm font-semibold bg-slate-200 rounded"
                        : "w-36 text-sm font-semibold"
                    }`}
                    onClick={handleClicks}
                    name="Booked Date Time: 17:32, 16th July 2024"
                    data-name="Date Time"
                  />
                </div>
                <div className="pb-1 pl-5 pr-5 pt-5 flex gap-12 text-xl flex flex-wrap">
                  {SideButtonComponents}
                </div>
              </div>
            </div>
            <div>
              {det === "Booking ID" && (
                <div className="flex flex-col">
                  <div className="flex flex-wrap justify-between">
                    <div className="p-5 bg-white m-3 w-[48%] rounded-lg flex gap-4">
                      <div>
                        <img
                          src="https://picsum.photos/200/300?random=1"
                          alt=""
                          className="w-14 h-14 rounded"
                        />
                      </div>
                      <div>
                        <div className="text-bold text-xl">
                          A1 service center
                        </div>
                        <p className="text-bold text-sm">
                          Viveknagar, Kukatpally
                        </p>
                      </div>
                    </div>
                    <div className="p-5 bg-white m-3 w-[48%] rounded-lg flex gap-4">
                      <div>
                        <img
                          src="https://picsum.photos/200/300?random=2"
                          alt=""
                          className="w-14 h-14 rounded"
                        />
                      </div>
                      <div>
                        <div className="text-bold text-xl">Honda City</div>
                        <p className="text-bold text-sm">TS 03 HF2429</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-3 rounded p-2 h-max bg-white flex sm-flex-col flex-wrap justify-between">
                    <div className="m-1 w-[48%] flex flex-col h-max text-bold text-xl rounded-lg">
                      <div className=" bg-slate-200 p-4 rounded">
                        <div>Doorstep</div>
                        <p className="text-bold text-sm">
                          Viveknagar, Kukatpally
                        </p>
                      </div>

                      <div className="bg-white">
                        <div className="mt-4 flex flex-wrap justify-between">
                          <div>
                            <p>Pickup/Service Advisor</p>
                            <Input
                              type="text"
                              onChange={handleChange}
                              value={input?.pickup}
                              name="Select"
                              className="border border-black rounded w-72"
                            />
                          </div>
                          <div>
                            <p>Drop Advisors</p>
                            <Input
                              type="text"
                              onChange={handleChange}
                              value={input?.drop}
                              name="Select"
                              className="border border-black rounded w-72"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <p>Drop slot</p>
                          <Input
                            type="text"
                            onChange={handleChange}
                            value={input?.slot}
                            name="Select"
                            className="border border-black rounded w-[100%]"
                          />
                        </div>
                        <div className="h-16 bg-slate-200 mt-2 pl-2 pt-2 rounded-lg text-base ">
                          Advisor Status
                        </div>
                      </div>
                    </div>
                    <div className="m-1 w-[48%] flex flex-col h-max text-bold text-xl rounded-lg">
                      <div className=" bg-slate-200 p-4 rounded">
                        <div>Instant Booking</div>
                        <p className="text-bold text-sm">-</p>
                      </div>
                      <div className="mt-4 flex gap-28">
                        <div>
                          <p className="text-lg">Services</p>
                          <p className="text-xl">Car Wash + 2 services</p>
                        </div>
                        <div>
                          <p className="text-lg">Service Description</p>
                          <p className="text-xl">I need a car wash and other</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-28">
                        <div>
                          <p className="text-lg">Services</p>
                          <p className="text-xl">Car Wash + 2 services</p>
                        </div>
                        <div>
                          <p className="text-lg">Service Description</p>
                          <p className="text-xl">I need a car wash and other</p>
                        </div>
                      </div>

                      <div className="h-16 bg-slate-200 mt-3 pl-2 pt-2 rounded-lg text-base">
                        Booking Status
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="border flex flex-wrap h-[100%] w-[100%]  bg-slate-200"></div>
      )} */}
    </div>
  );
};
