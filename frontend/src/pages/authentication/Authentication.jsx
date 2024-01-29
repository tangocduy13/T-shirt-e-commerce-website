import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";

const Authentication = () => {
  const data = [
    {
      label: "Sign Up",
      value: "signin",
      icon: Square3Stack3DIcon,
      body: <SignUp />,
    },
    {
      label: "Sign In",
      value: "signup",
      icon: UserCircleIcon,
      body: <SignIn />,
    },
  ];

  return (
    <div className={""}>
      <Tabs value="signin">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, body }) => (
            <TabPanel key={value} value={value}>
              {body}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Authentication;
