import { useState } from "react";
import { Home, Settings, Users, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", name: "Dashboard", icon: <Home /> },
    { path: "/add-students", name: "Add Students", icon: <Users /> },
    { path: "/settings", name: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="relative">
      {/* Overlay for closing sidebar on click */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Hamburger Button for Mobile */}
      <button 
        className="md:hidden p-2 text-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white md:static shadow-lg transition-all duration-300 md:w-64 lg:w-72 ${
          isOpen ? "w-64" : "w-0 md:w-64"
        } overflow-hidden md:overflow-visible`}
      >
        <div className="p-6">
          {/* Logo or Branding */}
          <div className={`flex items-center justify-center mb-8 ${!isOpen && "hidden md:flex"}`}>
            <span className="text-2xl font-bold text-indigo-600">Student CURD</span>
          </div>
          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                <span className="mx-5">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
