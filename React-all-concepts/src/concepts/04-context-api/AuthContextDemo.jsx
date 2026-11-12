import React, { createContext, useContext, useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Sarah Connor',
    role: 'ADMIN',
    email: 'sarah@skynet-defense.com',
  });

  const login = (role) => {
    setUser({
      name: role === 'ADMIN' ? 'Sarah Connor' : 'John Connor',
      role: role,
      email: `${role.toLowerCase()}@cyberdyne.org`,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}

function UserAuthProfile() {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div style={{ background: '#111827', padding: '1.2rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
      {isAuthenticated ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>{user.name}</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  background: user.role === 'ADMIN' ? '#4338ca' : '#047857',
                  color: '#fff',
                  fontWeight: 600,
                }}
              >
                {user.role}
              </span>
            </div>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>{user.email}</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => login(user.role === 'ADMIN' ? 'USER' : 'ADMIN')}
              className="btn btn-secondary"
              style={{ fontSize: '0.78rem' }}
            >
              Switch Role ({user.role === 'ADMIN' ? 'USER' : 'ADMIN'})
            </button>
            <button onClick={logout} className="btn btn-danger" style={{ fontSize: '0.78rem' }}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>No user authenticated</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => login('USER')} className="btn btn-secondary" style={{ fontSize: '0.78rem' }}>
              Login as User
            </button>
            <button onClick={() => login('ADMIN')} className="btn btn-primary" style={{ fontSize: '0.78rem' }}>
              Login as Admin
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AuthContextDemo() {
  const codeSnippet = `import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be in AuthProvider');
  return ctx;
};`;

  return (
    <SectionCard
      id="auth-context"
      title="Authentication Context Pattern & Protected Views"
      subtitle="Managing session lifecycle, user role permissions, and consumer encapsulation"
      badges={[
        { label: 'Context API', variant: 'core' },
        { label: 'Security Pattern', variant: 'core' },
      ]}
      summaryPoints={[
        'Encapsulating auth state in context allows route guards and navigation bars to react instantly to login/logout events.',
        'Session initialization can check tokens in cookies/localStorage on mount and populate the context.',
        'Role-based Access Control (RBAC): Inspect user.role directly from useAuth() to hide or permit administrative operations.'
      ]}
      interviewTip="How would you persist auth state across browser page refreshes? Initialize the context state lazily from localStorage or cookies, or run a validation request inside useEffect on mount to restore the active session."
      codeSnippet={codeSnippet}
      codeFileName="AuthContextDemo.jsx"
    >
      <AuthProvider>
        <UserAuthProfile />
      </AuthProvider>
    </SectionCard>
  );
}
