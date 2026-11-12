import React, { useReducer, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Initial complex state
const initialState = {
  tasks: [
    { id: 1, title: 'Learn Reducer Pattern', completed: true },
    { id: 2, title: 'Build Scalable State Architecture', completed: false },
  ],
  filter: 'ALL', // 'ALL', 'ACTIVE', 'COMPLETED'
  history: [],
};

// Pure Reducer function
function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      if (!action.payload.trim()) return state;
      const newTask = { id: Date.now(), title: action.payload, completed: false };
      return {
        ...state,
        history: [...state.history, state.tasks],
        tasks: [...state.tasks, newTask],
      };
    }
    case 'TOGGLE_TASK': {
      return {
        ...state,
        history: [...state.history, state.tasks],
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        history: [...state.history, state.tasks],
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'UNDO': {
      if (state.history.length === 0) return state;
      const previousTasks = state.history[state.history.length - 1];
      return {
        ...state,
        tasks: previousTasks,
        history: state.history.slice(0, -1),
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function UseReducerConcept() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [inputText, setInputText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: inputText });
    setInputText('');
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'ACTIVE') return !task.completed;
    if (state.filter === 'COMPLETED') return task.completed;
    return true;
  });

  const codeSnippet = `import React, { useReducer } from 'react';

// 1. Pure Reducer function: (state, action) => newState
function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };
    case 'UNDO':
      return { ...state, tasks: state.history.pop() || state.tasks };
    default:
      return state;
  }
}

export default function TaskApp() {
  // 2. useReducer gives back current state and dispatch function
  const [state, dispatch] = useReducer(taskReducer, { tasks: [], history: [] });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TASK', payload: { id: 1, text: 'New' } })}>
        Add Task
      </button>
      <button onClick={() => dispatch({ type: 'UNDO' })}>
        Undo Last Action
      </button>
    </div>
  );
}`;

  return (
    <SectionCard
      id="use-reducer"
      title="useReducer: Predictable Complex State & Reducer Pattern"
      subtitle="Decoupling state transitions from component rendering for complex, interdependent logic"
      badges={[
        { label: 'Hook', variant: 'hook' },
        { label: 'Architecture', variant: 'core' },
      ]}
      summaryPoints={[
        'useReducer is the preferred alternative to useState when next state depends on multiple sub-values, complex conditions, or when actions need to be traceable.',
        'Reducers must be PURE functions: No side-effects, no API calls, no Date.now() inside the reducer — given the same state and action, it must always return the exact same output.',
        'Dispatch is stable: React guarantees that the dispatch function identity will not change between re-renders, making it safe to omit from useEffect/useCallback dependency arrays.',
        'Enables easy undo/redo, state persistence, and effortless integration into React Context.'
      ]}
      interviewTip="When should you choose useReducer over useState? Use useReducer when state transitions are complex, multiple state variables change in response to the same event, or when passing dispatch down through deep component trees instead of multiple callback props."
      codeSnippet={codeSnippet}
      codeFileName="UseReducerConcept.jsx"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Form and undo */}
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add new task title..."
            className="input-field"
            style={{ flex: 1, minWidth: '200px' }}
          />
          <button type="submit" className="btn btn-primary">
            Dispatch ADD_TASK
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'UNDO' })}
            disabled={state.history.length === 0}
            className="btn btn-outline"
          >
            Undo ({state.history.length})
          </button>
        </form>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Filter State:</span>
          {['ALL', 'ACTIVE', 'COMPLETED'].map((f) => (
            <button
              key={f}
              onClick={() => dispatch({ type: 'SET_FILTER', payload: f })}
              className={`btn ${state.filter === f ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {filteredTasks.length === 0 ? (
            <p style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic' }}>
              No tasks match the "{state.filter}" filter.
            </p>
          ) : (
            filteredTasks.map((t) => (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.9rem',
                  background: '#111827',
                  borderRadius: '6px',
                  border: '1px solid #1f2937',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: t.id })}
                    style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                  />
                  <span
                    style={{
                      fontSize: '0.9rem',
                      textDecoration: t.completed ? 'line-through' : 'none',
                      color: t.completed ? '#64748b' : '#f8fafc',
                    }}
                  >
                    {t.title}
                  </span>
                </div>
                <button
                  onClick={() => dispatch({ type: 'DELETE_TASK', payload: t.id })}
                  className="btn btn-danger"
                  style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </SectionCard>
  );
}
