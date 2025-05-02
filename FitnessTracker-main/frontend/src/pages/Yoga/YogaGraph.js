import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { db } from '../../loginregister';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const YogaGraph = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
      navigate(path);
    };
  const [data, setData] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const posesRef = collection(db, 'users', user.uid, 'poses');
        const poseDocs = await getDocs(posesRef);

        const dateMap = {};

        poseDocs.forEach(doc => {
          const poseName = doc.id; // e.g., "Chair"
          const dateEntries = doc.data(); // { "2025-05-01": 10, ... }

          Object.entries(dateEntries).forEach(([date, bestTime]) => {
            if (!dateMap[date]) {
              dateMap[date] = { date };
            }
            dateMap[date][poseName] = bestTime;
          });
        });

        const formatted = Object.values(dateMap).sort((a, b) => a.date.localeCompare(b.date));
        setData(formatted);
      }
    });

    return () => unsubscribe();
  }, []);

  const allPoses = ['Tree', 'Chair', 'Cobra', 'Warrior', 'Dog', 'Shoulderstand', 'Triangle'];

  return (
    <div style={{ backgroundColor: '#0d1b2a', color: 'white', padding: '20px', minHeight: '100vh' }}>
      <div className="back-button-container">
      <button className="btn start-btn" onClick={() => handleNavigation('/MainHome')}>
        Back
      </button>
    </div>
      <h2 style={{ textAlign: 'center' }}>Your Best Times Per Pose</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Legend />
          {allPoses.map((pose, index) => (
            <Line
              key={pose}
              type="monotone"
              dataKey={pose}
              stroke={`hsl(${(index * 50) % 360}, 70%, 60%)`}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YogaGraph;
