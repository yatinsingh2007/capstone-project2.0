import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import Nav from './Nav';

const Notifications = () => {
  const [connections, setConnections] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`http://localhost:7777/connections`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (resp.status === 404) {
          setConnections([]);
          return;
        }
        const data = await resp.json();
        setConnections(data.requestUsers);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const handleAccept = async (userId) => {
    try {
      await fetch(`http://localhost:7777/connect/accept`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id : userId }),
      });
      setConnections((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleReject = async (userId) => {
    try {
      await fetch(`http://localhost:7777/connect/reject`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id : userId }),
      });
      setConnections((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
      <section className={`min-h-screen px-4 py-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Nav />
      <div className="max-w-2xl mx-auto space-y-4 px-4 mt-32">
        {connections.length === 0 ? (
          <p
            className={
              theme === 'dark'
                ? 'text-center text-gray-400'
                : 'text-center text-gray-500'
            }
          >
            No new connection requests.
          </p>
        ) : (
          connections.map((user) => (
            <div
              key={user._id}
              className={`shadow-md rounded-lg p-4 flex justify-between items-center border transition-colors
                ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
            >
              <div>
                <p
                  className={
                    theme === 'dark'
                      ? 'font-semibold text-gray-100'
                      : 'font-semibold text-gray-800'
                  }
                >
                  {user.name}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleAccept(user._id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(user._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Notifications;