import Link from "next/link";
import React, { FC } from "react";

interface ButtonInfoI {
  text: string;
  link: string;
}
interface InfoBoxI {
  backgroundColor: string;
  textColor: string;
  heading: string;
  text: string;
  buttonInfo: ButtonInfoI;
}
const InfoBox: FC<InfoBoxI> = ({
  backgroundColor,
  buttonInfo,
  heading,
  text,
  textColor,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{text}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block bg-black ${textColor} rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
