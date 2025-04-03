import './index.css';

function Header() {
  return (
    <header className="flex justify-between px-8 py-4 border-b items-center">
      <h1 className="text-2xl font-bold">Auto Dev Log</h1>
      <ul className="flex space-x-6 text-sm">
        <li className="text-gray-750 hover:text-gray-800 hover:underline transition duration-200">Records</li>
        <li className="text-gray-750 hover:text-gray-800 hover:underline transition duration-200">Profile</li>
        <li className="text-gray-750 hover:text-gray-800 hover:underline transition duration-200">Log Out</li>
      </ul>
    </header>
  )
}

export default Header;
