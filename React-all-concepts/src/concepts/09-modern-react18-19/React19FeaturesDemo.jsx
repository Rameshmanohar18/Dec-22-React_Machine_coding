import React, { useState, useOptimistic, useTransition, useActionState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

// Simulated async server mutation that takes 1 second
async function submitCommentToServer(previousState, formData) {
  const commentText = formData.get('comment');
  if (!commentText || !commentText.trim()) {
    return { success: false, error: 'Comment cannot be blank.' };
  }

  // Artificial network round-trip delay
  await new Promise((res) => setTimeout(res, 900));

  return {
    success: true,
    lastSubmitted: commentText,
    timestamp: new Date().toLocaleTimeString(),
  };
}

export default function React19FeaturesDemo() {
  // 1. React 19 useActionState: Manages form actions with pending state & action output
  const [state, formAction, isPending] = useActionState(submitCommentToServer, {
    success: false,
    lastSubmitted: null,
  });

  // 2. React 19 useOptimistic: Instant optimistic UI feedback
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to React 19 features playground!', sending: false },
  ]);

  const [optimisticMessages, setOptimisticMessages] = useOptimistic(
    messages,
    (currentMessages, newMessageText) => [
      ...currentMessages,
      { id: Date.now(), text: newMessageText, sending: true },
    ]
  );

  const [isSendingMsg, startMsgTransition] = useTransition();

  const handleSendOptimisticMessage = async (e) => {
    e.preventDefault();
    const input = e.currentTarget.elements.messageInput;
    const text = input.value;
    if (!text.trim()) return;
    input.value = '';

    // Apply optimistic update immediately
    startMsgTransition(async () => {
      setOptimisticMessages(text);

      // Simulate network save
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Commit to actual state once server confirms
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text, sending: false },
      ]);
    });
  };

  const codeSnippet = `import React, { useActionState, useOptimistic, useTransition } from 'react';

// 1. React 19 useActionState
async function updateUsername(previousState, formData) {
  const name = formData.get('name');
  await saveToDatabase(name);
  return { name };
}

export function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateUsername, { name: 'Alex' });

  return (
    <form action={formAction}>
      <input name="name" defaultValue={state.name} />
      <button disabled={isPending}>{isPending ? 'Saving...' : 'Save'}</button>
    </form>
  );
}

// 2. React 19 useOptimistic: Show user change instantly before server returns!
export function MessageThread({ messages, onSendMessage }) {
  const [optimisticMessages, setOptimisticMessages] = useOptimistic(
    messages,
    (state, newText) => [...state, { text: newText, pending: true }]
  );

  const handleSubmit = async (formData) => {
    const text = formData.get('text');
    startTransition(async () => {
      setOptimisticMessages(text); // Updates screen immediately!
      await api.sendMessage(text);  // Background network call
    });
  };

  return (
    <ul>
      {optimisticMessages.map(m => (
        <li style={{ opacity: m.pending ? 0.5 : 1 }}>{m.text}</li>
      ))}
    </ul>
  );
}`;

  return (
    <SectionCard
      id="react-19-features"
      title="React 19 Innovations: useActionState, useOptimistic & use()"
      subtitle="Next-generation async form actions, instant optimistic UI mutations, and conditional resource fetching"
      badges={[
        { label: 'React 19', variant: 'react19' },
        { label: 'Form Actions', variant: 'hook' },
        { label: 'Optimistic UI', variant: 'perf' },
      ]}
      summaryPoints={[
        'useActionState(fn, initialState): Streamlines async form actions, returning [state, formAction, isPending] to eliminate manual loading and error booleans.',
        'useOptimistic(state, updateFn): Displays immediate UI feedback while an async network request executes, automatically reconciling or rolling back when done.',
        'The use() Hook: Unlike other React hooks, use() can be called inside conditional statements and loops! It can read Context or resolve Promises inside render.',
        'Direct <form action={...}>: Form actions in React 19 integrate natively with async transitions.'
      ]}
      interviewTip="What makes the React 19 'use()' hook unique among React hooks? All standard hooks (useState, useEffect) must obey the Rules of Hooks and cannot be placed inside 'if' blocks or loops. The 'use()' hook is the FIRST hook that can be called conditionally to read context or unwrap promises!"
      codeSnippet={codeSnippet}
      codeFileName="React19FeaturesDemo.jsx"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
        {/* useActionState Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#ec4899', margin: '0 0 0.6rem 0' }}>1. useActionState Async Form</h4>
          <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              name="comment"
              placeholder="Post async status update..."
              className="input-field"
              disabled={isPending}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button type="submit" disabled={isPending} className="btn btn-primary" style={{ fontSize: '0.8rem' }}>
                {isPending ? '⏳ Submitting Action...' : 'Submit via Form Action'}
              </button>
            </div>
          </form>

          {state.lastSubmitted && (
            <div style={{ marginTop: '0.8rem', fontSize: '0.82rem', color: '#34d399' }}>
              ✔ Saved: "{state.lastSubmitted}" at {state.timestamp}
            </div>
          )}
          {state.error && (
            <div style={{ marginTop: '0.8rem', fontSize: '0.82rem', color: '#f43f5e' }}>
              ⚠ {state.error}
            </div>
          )}
        </div>

        {/* useOptimistic Demo */}
        <div style={{ background: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <h4 style={{ color: '#38bdf8', margin: '0 0 0.6rem 0' }}>2. useOptimistic Live Messages</h4>
          <form onSubmit={handleSendOptimisticMessage} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
            <input
              name="messageInput"
              placeholder="Send message..."
              className="input-field"
              style={{ fontSize: '0.85rem' }}
            />
            <button type="submit" disabled={isSendingMsg} className="btn btn-secondary" style={{ fontSize: '0.78rem' }}>
              Send
            </button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '130px', overflowY: 'auto' }}>
            {optimisticMessages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: '0.35rem 0.6rem',
                  borderRadius: '4px',
                  background: msg.sending ? '#312e81' : '#1e293b',
                  border: msg.sending ? '1px dashed #818cf8' : '1px solid #334155',
                  fontSize: '0.82rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{msg.text}</span>
                {msg.sending && <span style={{ color: '#fbbf24', fontSize: '0.7rem' }}>Sending (optimistic)...</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

