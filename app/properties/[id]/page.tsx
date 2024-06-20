"use client";
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPageId = () => {
  const router = useRouter();
  const search = useSearchParams();
  const { id } = useParams();
  const name = search.get("name");
  const path = usePathname();

  return (
    <>
      <button onClick={() => router.back()} className="bg-blue-500 p-2">
        Go back {id} {name}
      </button>
      <div>PropertyPageId {path}</div>
    </>
  );
};

export default PropertyPageId;
