import React, { useState, useMemo, useEffect } from 'react';

// Expensive calculation function
const expensiveCalculation = (num) => {
  console.log('Calculating expensive value...');
  
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += Math.random() * num;
  }
  
  return result;
};

// Component without useMemo
function WithoutUseMemo({ value }) {
  const [count, setCount] = useState(0);
  const expensiveValue = expensiveCalculation(value); // Recalculates on every render
  
  return (
    <div style={cardStyle}>
      <h3>Without useMemo</h3>
      <p>Expensive Value: {expensiveValue.toFixed(2)}</p>
      <p>Render Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
      <p style={warningText}>
        ⚠️ Expensive calculation runs on EVERY render
      </p>
    </div>
  );
}

// Component with useMemo
function WithUseMemo({ value }) {
  const [count, setCount] = useState(0);
  
  const expensiveValue = useMemo(() => {
    return expensiveCalculation(value);
  }, [value]); // Only recalculates when 'value' changes
  
  return (
    <div style={cardStyle}>
      <h3>With useMemo</h3>
      <p>Expensive Value: {expensiveValue.toFixed(2)}</p>
      <p>Render Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
      <p style={successText}>
        ✅ Expensive calculation only runs when 'value' changes
      </p>
    </div>
  );
}

// Real-world example: Filtered list
function UserList() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [renderCount, setRenderCount] = useState(0);
  
  // Generate dummy users
  useEffect(() => {
    const dummyUsers = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      age: Math.floor(Math.random() * 50) + 18,
      city: ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'][i % 5],
      salary: Math.floor(Math.random() * 100000) + 30000
    }));
    
    setUsers(dummyUsers);
  }, []);
  
  // WITHOUT useMemo - filters/sorts on every render
  const filteredUsersWithoutMemo = users
    .filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.city.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'age') return a.age - b.age;
      if (sortBy === 'salary') return a.salary - b.salary;
      return 0;
    });
  
  // WITH useMemo - memoized filtered/sorted list
  const filteredUsersWithMemo = useMemo(() => {
    console.log('Filtering and sorting with useMemo...');
    
    return users
      .filter(user => 
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.city.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'age') return a.age - b.age;
        if (sortBy === 'salary') return a.salary - b.salary;
        return 0;
      });
  }, [users, filter, sortBy]); // Only recalculates when dependencies change
  
  // Calculate statistics
  const stats = useMemo(() => {
    const totalUsers = users.length;
    const filteredCount = filteredUsersWithMemo.length;
    const averageAge = filteredUsersWithMemo.length > 0 
      ? filteredUsersWithMemo.reduce((sum, user) => sum + user.age, 0) / filteredUsersWithMemo.length
      : 0;
    const averageSalary = filteredUsersWithMemo.length > 0
      ? filteredUsersWithMemo.reduce((sum, user) => sum + user.salary, 0) / filteredUsersWithMemo.length
      : 0;
    
    return { totalUsers, filteredCount, averageAge, averageSalary };
  }, [filteredUsersWithMemo]);
  
  // Force re-render for demonstration
  const forceRerender = () => {
    setRenderCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List with useMemo Optimization</h2>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Filter:</label>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search by name, email, or city..."
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button onClick={forceRerender} style={buttonStyle}>
            Force Re-render ({renderCount})
          </button>
        </div>
      </div>
      
      {/* Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <StatCard 
          title="Total Users" 
          value={stats.totalUsers} 
          color="#3498db" 
        />
        <StatCard 
          title="Filtered Users" 
          value={stats.filteredCount} 
          color="#2ecc71" 
        />
        <StatCard 
          title="Avg Age" 
          value={stats.averageAge.toFixed(1)} 
          color="#e74c3c" 
          unit="years" 
        />
        <StatCard 
          title="Avg Salary" 
          value={`$${stats.averageSalary.toLocaleString('en-US', { maximumFractionDigits: 0 })}`} 
          color="#9b59b6" 
        />
      </div>
      
      {/* User Table */}
      <div style={{ 
        maxHeight: '400px', 
        overflow: 'auto',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8f9fa', position: 'sticky', top: 0 }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Age</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>City</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsersWithMemo.slice(0, 50).map(user => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{user.id}</td>
                <td style={{ padding: '10px' }}>{user.name}</td>
                <td style={{ padding: '10px' }}>{user.email}</td>
                <td style={{ padding: '10px' }}>{user.age}</td>
                <td style={{ padding: '10px' }}>{user.city}</td>
                <td style={{ padding: '10px' }}>
                  ${user.salary.toLocaleString('en-US')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsersWithMemo.length > 50 && (
          <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
            Showing 50 of {filteredUsersWithMemo.length} users
          </div>
        )}
      </div>
      
      {/* Performance Comparison */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '30px'
      }}>
        <WithoutUseMemo value={10} />
        <WithUseMemo value={10} />
      </div>
      
      {/* Explanation */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e8f4f8',
        borderRadius: '8px'
      }}>
        <h3>When to use useMemo:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
          <UseCase 
            title="✅ Heavy Calculations"
            description="Expensive computations that don't need to run on every render"
            example="filtering/sorting large arrays, complex math"
          />
          <UseCase 
            title="✅ Stable References"
            description="When you need to maintain same reference for dependencies"
            example="memoized callbacks, configuration objects"
          />
          <UseCase 
            title="✅ Derived State"
            description="Values computed from props/state that are used in multiple places"
            example="statistics, formatted data, aggregated values"
          />
          <UseCase 
            title="❌ Simple Calculations"
            description="Lightweight operations that are fast anyway"
            example="string concatenation, simple arithmetic"
          />
          <UseCase 
            title="❌ Every Render"
            description="Values that need to be fresh on every render"
            example="current timestamp, random numbers"
          />
          <UseCase 
            title="❌ Primitive Values"
            description="Strings, numbers, booleans (already cheap to create)"
            example="simple text, boolean flags"
          />
        </div>
      </div>
      
      {/* Performance Tips */}
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        borderLeft: '4px solid #ffc107'
      }}>
        <h3>Performance Tips:</h3>
        <ul>
          <li><strong>Profile First:</strong> Use React DevTools Profiler to identify bottlenecks</li>
          <li><strong>Dependency Array:</strong> Include ALL dependencies to avoid stale closures</li>
          <li><strong>Memory Trade-off:</strong> useMemo uses memory to save computation time</li>
          <li><strong>Composition:</strong> Combine with React.memo for component-level optimization</li>
          <li><strong>Expensive Operations:</strong> Only use for truly expensive operations (100ms+)</li>
          <li><strong>Cleanup:</strong> No cleanup needed - React handles garbage collection</li>
        </ul>
      </div>
      
      {/* Code Example */}
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: 'white' }}>Code Example:</h3>
        <pre style={{ overflow: 'auto', fontSize: '14px' }}>
{`// ❌ Without useMemo - runs on every render
const filteredUsers = users
  .filter(user => user.name.includes(filter))
  .sort((a, b) => a.name.localeCompare(b.name));

// ✅ With useMemo - only runs when dependencies change
const filteredUsers = useMemo(() => {
  return users
    .filter(user => user.name.includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));
}, [users, filter]); // Dependency array

// ✅ Also useful for expensive calculations
const expensiveValue = useMemo(() => {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += Math.random();
  }
  return result;
}, []); // Empty array = calculate once`}
        </pre>
      </div>
    </div>
  );
}

// Helper components
// function StatCard({ title, value, color, unit = '' }) {
//   return (
//     <div style={{ 
//       padding: '20px',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       textAlign: 'center',
//       borderTop: `4px solid ${color}`
//     }}>
//       <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>{title}</h4>
//       <div style={{ fontSize: '32px', fontWeight: 'bold', color }}>
//         {value} {unit && <span style={{ fontSize: '16px', color: '#666' }}>{unit}</span>}
//       </div>
//     </div>
//   );
// }

// function UseCase({ title, description, example }) {
//   return (
//     <div style={{
//       padding: '15px',
//       backgroundColor: 'white',
//       borderRadius: '5px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     }}>
//       <h4 style={{ margin: '0 0 10px 0' }}>{title}</h4>
//       <p style={{ fontSize: '14px', color: '#666', margin: '0 0 10px 0' }}>
//         {description}
//       </p>
//       <code style={{ 
//         fontSize: '12px', 
//         backgroundColor: '#f8f9fa',
//         padding: '4px 8px',
//         borderRadius: '3px',
//         display: 'inline-block'
//       }}>
//         {example}
//       </code>
//     </div>
//   );
// }

const cardStyle = {
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const warningText = {
  color: '#e74c3c',
  fontSize: '12px',
  marginTop: '10px',
  fontWeight: 'bold'
};

const successText = {
  color: '#2ecc71',
  fontSize: '12px',
  marginTop: '10px',
  fontWeight: 'bold'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
};