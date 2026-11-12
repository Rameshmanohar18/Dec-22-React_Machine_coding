import React, { createContext, useContext, useReducer, useRef, useEffect } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// 1. Separate State Context and Dispatch Context
const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'CLEAR':
      return { items: [], totalPrice: 0 };
    default:
      return state;
  }
}

export function SplitCartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], totalPrice: 0 });

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// Consumers
export function useCartState() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error('useCartState must be in SplitCartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error('useCartDispatch must be in SplitCartProvider');
  return ctx;
}

// Component that ONLY needs dispatch
function AddProductButton({ product }) {
  const dispatch = useCartDispatch();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#111827', padding: '0.6rem 0.8rem', borderRadius: '6px' }}>
      <span style={{ fontSize: '0.85rem', color: '#f8fafc' }}>
        {product.name} (${product.price})
      </span>
      <button
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        className="btn btn-primary"
        style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', marginLeft: 'auto' }}
      >
        Add
      </button>
      <span className="render-badge">Btn Renders: {renderCount.current}</span>
    </div>
  );
}

// Component that consumes state
function CartSummaryDisplay() {
  const state = useCartState();
  const dispatch = useCartDispatch();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div style={{ background: '#090d16', border: '1px solid #1f2937', padding: '1rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4 style={{ margin: 0, color: '#38bdf8' }}>Cart Summary</h4>
        <span className="render-badge">Summary Renders: {renderCount.current}</span>
      </div>
      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem', color: '#cbd5e1' }}>
        Items Count: <strong>{state.items.length}</strong> | Total: <strong>${state.totalPrice}</strong>
      </p>
      {state.items.length > 0 && (
        <button
          onClick={() => dispatch({ type: 'CLEAR' })}
          className="btn btn-outline"
          style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default function CartContextDemo() {
  const codeSnippet = `import React, { createContext, useContext, useReducer } from 'react';

// 1. Separate Contexts for State and Dispatch
const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartStateContext.Provider value={state}>
      {/* dispatch identity never changes across renders */}
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// Component A only dispatches actions -> NEVER re-renders when state changes!
function AddButton() {
  const dispatch = useContext(CartDispatchContext);
  return <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>;
}

// Component B consumes state -> Only this re-renders!
function Counter() {
  const state = useContext(CartStateContext);
  return <span>Items: {state.items.length}</span>;
}`;

  return (
    <SectionCard
      id="cart-split-context"
      title="High-Performance Context: The Split Context Pattern"
      subtitle="Eliminating unnecessary re-renders in Context consumers by decoupling State and Dispatch"
      badges={[
        { label: 'Performance', variant: 'perf' },
        { label: 'Context API', variant: 'core' },
      ]}
      summaryPoints={[
        'Problem: In a standard Context provider, passing { state, dispatch } creates a new object on every render, causing all consumers to re-render even if they only need dispatch.',
        'Solution: Split into StateContext and DispatchContext. The dispatch function reference is stable and never triggers re-renders.',
        'Buttons and trigger components that only dispatch actions will render ONCE and never re-render as cart items change!',
        'Notice the render badges below: Click "Add" repeatedly and watch how the Add Product buttons stay at 1 render while only the Cart Summary re-renders.'
      ]}
      interviewTip="How do you optimize React Context to prevent unnecessary re-renders? Use the Split Context pattern: separate the frequently changing state into one context, and the stable updater/dispatch into a separate context."
      codeSnippet={codeSnippet}
      codeFileName="CartContextDemo.jsx"
    >
      <SplitCartProvider>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.8rem' }}>
            <AddProductButton product={{ id: 1, name: 'Mechanical Keyboard', price: 120 }} />
            <AddProductButton product={{ id: 2, name: 'Wireless Mouse', price: 60 }} />
          </div>
          <CartSummaryDisplay />
        </div>
      </SplitCartProvider>
    </SectionCard>
  );
}
