import Link from "next/link";
import React from "react";

type Props = {};

export default function NavbarAdmin({}: Props) {
  return (
    <div className="max-w-3xl mx-auto p-4 justify-center items-center text-center">
      <nav>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link href={"/admin/people-crud/addpeople"}>Add People</Link>
        </button>
      </nav>
    </div>
  );
}
