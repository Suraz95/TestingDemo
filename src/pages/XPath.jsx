import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import XPathTester from "../components/XPathTester";
import HtmlStructureModal from "../components/HtmlStructureModal";

const LocatorPracticePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  const handleShowStructureById = (elementId) => {
    const elem = document.getElementById(elementId);
    if (elem) {
      setHtmlContent(elem.outerHTML);
      setModalOpen(true);
    } else {
      alert("Element not found.");
    }
  };

  return (
    <div className="p-6 bg-[#fff7ed] min-h-screen">
      <h1 className="text-3xl font-bold text-[#ff6f00] mb-6">Locator Practice</h1>
      <Card className="mb-6">
        <CardContent className="space-y-4">
          <div className="relative group">
            <input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="border border-orange-300 px-4 py-2 w-full rounded"
            />
            <button
              onClick={() => handleShowStructureById('email-input')}
              className="absolute top-1 right-1 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>

          <div className="relative group">
            <input
              id="password-input"
              type="password"
              placeholder="Enter your password"
              className="border border-orange-300 px-4 py-2 w-full rounded"
            />
            <button
              onClick={() => handleShowStructureById('password-input')}
              className="absolute top-1 right-1 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>

          <div className="relative group">
            <button
              id="login-btn"
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Login
            </button>
            <button
              onClick={() => handleShowStructureById('login-btn')}
              className="absolute top-0 right-0 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>

          <div className="relative group">
            <select
              id="role-select"
              className="border border-orange-300 px-4 py-2 w-full rounded"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
            <button
              onClick={() => handleShowStructureById('role-select')}
              className="absolute top-1 right-1 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>

          <div className="relative group">
            <label htmlFor="agree" className="inline-flex items-center">
              <input
                id="agree"
                type="checkbox"
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
            <button
              onClick={() => handleShowStructureById('agree')}
              className="absolute top-1 right-1 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>

          <div className="relative group">
            <label className="inline-flex items-center">
              <input
                id="gender-male"
                type="radio"
                name="gender"
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                id="gender-female"
                type="radio"
                name="gender"
                value="female"
                className="mr-2"
              />
              Female
            </label>
            <button
              onClick={() => handleShowStructureById('gender-male')}
              className="absolute top-1 right-12 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
            <button
              onClick={() => handleShowStructureById('gender-female')}
              className="absolute top-1 right-1 bg-white border border-orange-300 text-orange-600 text-xs px-1 rounded hidden group-hover:block"
            >
              HTML
            </button>
          </div>
        </CardContent>
      </Card>

      <XPathTester />
      <HtmlStructureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        htmlContent={htmlContent}
      />
    </div>
  );
};

export default LocatorPracticePage;
