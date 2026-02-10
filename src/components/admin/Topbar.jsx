const Topbar = () => {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-semibold text-gray-800">
        Restaurant Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Topbar;
