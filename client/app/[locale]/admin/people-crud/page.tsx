"use client";

import NavbarAdmin from "@/components/admin/NavbarAdmin";
import PeopleList from "@/components/admin/PeopleList";
import RemovePeople from "@/components/admin/RemovePeople";
import { PeopleProps } from "@/types/people";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";

export default function Page() {
  const [data, setData] = useState<PeopleProps[]>([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/people")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <PeopleList data={data}></PeopleList>
      </div>
    </>
  );
}
