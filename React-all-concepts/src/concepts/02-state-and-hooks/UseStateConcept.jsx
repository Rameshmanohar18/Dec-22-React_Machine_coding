import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Simulated expensive calculation for lazy initialization
function computeInitialStats() {
  // Simulating complex calculations or reading local storage
  return { generatedAt: new Date().toLocaleTimeString(), baseScore: 100 };
}

export default function UseStateConcept() {
  // 1. Primitive state
  const [count, setCount] = useState(0);

  // 2. Object state (must preserve immutability via spread)
  const [profile, setProfile] = useState({
    username: 'developer_pro',
    role: 'Engineer',
    level: 1,
  });

  // 3. Lazy initial state (executes only ONCE during initial mount)
  const [initialStats] = useState(() => computeInitialStats());

  // Demonstrating Functional Update vs Direct Update
  const handleDirectThreeIncrements = () => {
    // BUGGY: All three use the captured 'count' closure value, so count increases only by 1!
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleFunctionalThreeIncrements = () => {
    // CORRECT: Each updater receives the freshly resolved pending state
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handlePromote = () => {
    setProfile((prev) => ({
      ...prev, // Keep existing fields
      level: prev.level + 1,
      role: prev.level + 1 >= 5 ? 'Principal Architect' : prev.level + 1 >= 3 ? 'Senior Engineer' : 'Engineer',
    }));
  };

  const codeSnippet = `import React, { useState } from 'react';

export default function CounterAndState() {
  // 1. Primitive State
  const [count, setCount] = useState(0);

  // 2. Lazy Initialization: Function passed to useState runs ONLY ONCE during mount
  const [expensiveData] = useState(() => {
    return localStorage.getItem('token') || computeHeavyValue();
  });

  // 3. Functional Updates: Crucial when new state depends on previous state
  // or inside async callbacks/closures to avoid stale state bugs
  const incrementByThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  // 4. Object State: Never mutate directly! Always create a new object reference
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  const updateAge = () => {
    // WRONG: user.age += 1; setUser(user); (React won't re-render because object identity is identical!)
    // RIGHT:
    setUser(prev => ({ ...prev, age: prev.age + 1 }));
  };

  return <button onClick={incrementByThree}>Count: {count}</button>;
}`;

  return (
    <SectionCard
      id="use-state"
      title="useState: Immutability, Functional Updates & Lazy Initialization"
      subtitle="Deep dive into state immutability, batching, closure staleness, and lazy evaluation"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'Core State', variant: 'core' },
      ]}
      summaryPoints={[
        'React state is IMMUTABLE: Never mutate state objects or arrays in-place (e.g. array.push or obj.x = 2). Always spread (...prev) or produce new references so React can detect changes via Object.is().',
        'Functional updates: Always pass (prev => prev + 1) when the new state relies on previous state or runs inside asynchronous callbacks.',
        'Lazy initial state: Passing a function `useState(() => init())` ensures expensive setup runs ONLY on the initial mount rather than every render.',
        'React 18/19 Auto-batching: Multiple state updates inside promises, timeouts, and native event handlers are now automatically batched into a single re-render.'
      ]}
      interviewTip="What happens if you mutate state directly without setter? React compares state using Object.is(oldState, newState). If you mutate the object in place, the reference doesn't change, so React skips re-rendering entirely!"
      codeSnippet={codeSnippet}
      codeFileName="UseStateConcept.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        {/* Count Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <h4 style={{ color: '#60a5fa', margin: 0 }}>Counter: {count}</h4>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Lazy Initializer Created: {initialStats.generatedAt}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleDirectThreeIncrements}
              className="btn btn-secondary"
              title="Calls setCount(count + 1) three times"
            >
              Direct +3 (Stale Closure: +1)
            </button>
            <button
              onClick={handleFunctionalThreeIncrements}
              className="btn btn-primary"
              title="Calls setCount(prev => prev + 1) three times"
            >
              Functional +3 (Correct: +3)
            </button>
            <button
              onClick={() => setCount(0)}
              className="btn btn-outline"
            >
              Reset Counter
            </button>
          </div>
        </div>

        {/* Object State Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <h4 style={{ color: '#34d399', margin: 0 }}>Immutable Object State:</h4>
            <button onClick={handlePromote} className="btn btn-success" style={{ padding: '0.3rem 0.8rem' }}>
              Promote Level (+1)
            </button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
            <span>Username: <strong style={{ color: '#fff' }}>{profile.username}</strong></span>
            <span>Role: <strong style={{ color: '#38bdf8' }}>{profile.role}</strong></span>
            <span>Level: <strong style={{ color: '#fbbf24' }}>Lv.{profile.level}</strong></span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
