/* eslint-disable react/prop-types */

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 h-full text-white bg-gray-800">
      <div className="flex items-center justify-center p-6 text-xl font-bold text-white">
        Admin Logo
      </div>
      <ul className="px-4 space-y-4">
        <li
          className="p-3 rounded cursor-pointer hover:bg-gray-700"
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </li>
        <li
          className="p-3 rounded cursor-pointer hover:bg-gray-700"
          onClick={() => setActivePage("blogs")}
        >
          Blogs
        </li>
        <li
          className="p-3 rounded cursor-pointer hover:bg-gray-700"
          onClick={() => setActivePage("settings")}
        >
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
