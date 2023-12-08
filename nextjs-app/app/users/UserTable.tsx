import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  sortOrder: string;
}

const sortUsers = (users: User[], sortOrder: string) => {
  return sort(users).by([{ asc: sortOrder === "name" ? "name" : "email" }]);
};

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await response.json();

  const sortedUsers = sortUsers(users, sortOrder);

  return (
    <div className="overflow-x-auto">
      <table className="table table-bordered">
        <thead>
          <tr className="bg-base-200">
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
