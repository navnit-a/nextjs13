import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface UsersPageProps {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: UsersPageProps) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn mb-5 btn-secondary">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
