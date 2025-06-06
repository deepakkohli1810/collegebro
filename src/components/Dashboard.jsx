import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("colleges");

  const [colleges, setColleges] = useState([
    "khalsa College",
    "Stanford University",
    "MIT",
    "Yale University",
    "Princeton University",
    "Columbia University",
  ]);
  const [collegeInput, setCollegeInput] = useState("");

  const [communities, setCommunities] = useState([]);
  const [communityInput, setCommunityInput] = useState("");

  const [events, setEvents] = useState([]);
  const [eventInput, setEventInput] = useState("");

  const [bookQueries, setBookQueries] = useState([]);
  const [bookInput, setBookInput] = useState("");

  const handleAddCollege = () => {
    if (collegeInput.trim()) {
      setColleges([...colleges, collegeInput]);
      setCollegeInput("");
    }
  };

  const handleAddCommunity = () => {
    if (communityInput.trim()) {
      setCommunities([...communities, communityInput]);
      setCommunityInput("");
    }
  };

  const handleAddEvent = () => {
    if (eventInput.trim()) {
      setEvents([...events, eventInput]);
      setEventInput("");
    }
  };

  const handleAddBookQuery = () => {
    if (bookInput.trim()) {
      setBookQueries([...bookQueries, bookInput]);
      setBookInput("");
    }
  };

  const renderTabsContent = () => {
    switch (activeTab) {
      case "colleges":
        return (
          <>
            <h3 className="text-lg font-medium mb-2 text-white">Popular Colleges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {colleges.map((college, i) => (
                <div key={i} className="bg-gray-800 rounded shadow p-4 hover:shadow-md">
                  <h4 className="font-medium text-white">{college}</h4>
                  <p className="text-sm text-gray-400">Click to view details</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2 w-full"
                placeholder="Add a new college"
                value={collegeInput}
                onChange={(e) => setCollegeInput(e.target.value)}
              />
              <button onClick={handleAddCollege} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </>
        );
      case "communities":
        return (
          <>
            <h3 className="text-lg font-medium mb-2 text-white">Communities</h3>
            <ul className="mb-4 list-disc pl-5 text-gray-300">
              {communities.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2 w-full"
                placeholder="Add a new community"
                value={communityInput}
                onChange={(e) => setCommunityInput(e.target.value)}
              />
              <button onClick={handleAddCommunity} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </>
        );
      case "events":
        return (
          <>
            <h3 className="text-lg font-medium mb-2 text-white">Upcoming Events</h3>
            <ul className="mb-4 list-disc pl-5 text-gray-300">
              {events.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2 w-full"
                placeholder="Add a new event"
                value={eventInput}
                onChange={(e) => setEventInput(e.target.value)}
              />
              <button onClick={handleAddEvent} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </>
        );
      case "books":
        return (
          <>
            <h3 className="text-lg font-medium mb-2 text-white">Book Exchange Queries</h3>
            <ul className="mb-4 list-disc pl-5 text-gray-300">
              {bookQueries.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2 w-full"
                placeholder="Raise a book query"
                value={bookInput}
                onChange={(e) => setBookInput(e.target.value)}
              />
              <button onClick={handleAddBookQuery} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="font-['cursive'] text-violet-400">College</span>
            <span className="font-['serif'] text-cyan-400">Bro</span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-sm text-white border border-gray-700 rounded px-3 py-1 hover:bg-gray-700">My Account</button>
            <button className="text-sm text-white border border-gray-700 rounded px-3 py-1 hover:bg-gray-700">Logout</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4">
        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Find Your College</h2>
          <div className="relative flex items-center max-w-2xl">
            <span className="absolute left-3 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search for colleges and universities..."
              className="pl-10 pr-4 h-12 bg-gray-900 text-white border border-gray-600 rounded w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="ml-2 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">Search</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            {["colleges", "communities", "events", "books"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded text-white ${
                  activeTab === tab
                    ? "bg-violet-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div>{renderTabsContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
