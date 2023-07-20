import * as React from "react";
import { Address } from "../types/Address";
import Cta from "./Cta";

export interface BannerProps {
  name?: string;
  address?: Address;
}

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: BannerProps) => {
  const { name, address } = props;

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-96 bg-[url(/src/assets/images/yext-banner.png)] `}
      >
        <div className="absolute left-0 right-0 flex flex-col items-center">
          <div className="w-96 my-8 rounded-xl text-black bg-gray-300 border-8 shadow-xl border-white px-4 py-2 text-center">
            <div>
              <h1 className=" text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2  font-semibold">
                {renderPrettyAddress(address)}
              </p>
            </div>
            <div className="flex py-3 justify-between">
              {/* <Cta
                buttonText="Order Pickup"
                url="#"
                style="text-orange bg-white"
              ></Cta>
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-orange bg-white"
              ></Cta> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
