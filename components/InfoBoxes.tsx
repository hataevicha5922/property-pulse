import Link from "next/link";
import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            backgroundColor="bg-gray-100"
            heading="For Renters"
            text="  Find your dream rental property. Bookmark properties and contact
              owners."
            buttonInfo={{ text: "Browse Properties", link: "/properties" }}
            textColor="text-white"
          />
          <InfoBox
            backgroundColor={"bg-blue-100"}
            heading="For Properties Owner"
            text="List your properties and reach potential tenants. Rent as an airbnb or
        long term"
            buttonInfo={{ text: "Add Property", link: "/properties/add" }}
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
InfoBoxes;
