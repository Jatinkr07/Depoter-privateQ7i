import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import Settings from "./Settings";

const SectionHelper = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "blogs":
        return <Blogs />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default SectionHelper;
