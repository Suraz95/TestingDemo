import React, { useState, useEffect } from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const saveUsers = (updatedUsers) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleAddOrUpdateUser = () => {
    if (!email || !password) return alert("Email and Password are required");

    const existingIndex = users.findIndex((u) => u.email === email);

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = {
        email,
        password,
        isAdmin: email.toLowerCase().includes("admin"),
      };
      saveUsers(updatedUsers);
      setEditingIndex(null);
      alert("User updated");
    } else {
      if (existingIndex !== -1) return alert("User already exists");
      const newUser = {
        email,
        password,
        isAdmin: email.toLowerCase().includes("admin"),
      };
      saveUsers([...users, newUser]);
      alert("User added");
    }

    setEmail("");
    setPassword("");
  };

  const handleEdit = (index) => {
    const user = users[index];
    setEmail(user.email);
    setPassword(user.password);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      saveUsers(updatedUsers);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#EFEEEA] p-6 transition-colors duration-500 ease-in-out">
      <h2 className="text-3xl font-bold text-[#273F4F] mb-6 transition-all duration-500 ease-in-out" id="admin-title">
        Admin Panel – User Management
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full max-w-2xl">
        <input
          id="email"
          type="email"
          placeholder="Enter User Email"
          className="p-3 rounded border border-[#273F4F] w-full focus:outline-none focus:ring-2 focus:ring-[#FE7743] transition duration-300 ease-in-out"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          className="p-3 rounded border border-[#273F4F] w-full focus:outline-none focus:ring-2 focus:ring-[#FE7743] transition duration-300 ease-in-out"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          id="submit-user"
          className="bg-[#FE7743] hover:bg-[#e56630] transition duration-300 ease-in-out text-white font-semibold px-4 py-2 rounded"
          onClick={handleAddOrUpdateUser}
        >
          {editingIndex !== null ? "Update User" : "Add User"}
        </button>
      </div>

      <table className="table-auto border-collapse w-full max-w-4xl shadow-md rounded overflow-hidden">
        <thead className="bg-[#273F4F] text-white">
          <tr>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f7f7f7]"
              } hover:bg-[#FE774350] transition-colors duration-300 ease-in-out`}
            >
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.isAdmin ? "Admin" : "User"}</td>
              <td className="p-3">
                <button
                  id={`edit-user-${index}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2 transition duration-300 ease-in-out"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  id={`delete-user-${index}`}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition duration-300 ease-in-out"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="3" className="p-4 text-center text-[#273F4F] font-semibold">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
