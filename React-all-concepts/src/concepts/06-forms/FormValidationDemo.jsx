import React, { useState } from 'react';
import SectionCard from '../../components/ui/SectionCard';

export default function FormValidationDemo() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Pure validation rules
  const validate = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address format.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = 'You must accept the terms.';
    }

    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      username: true,
      email: true,
      password: true,
      confirmPassword: true,
      acceptTerms: true,
    });

    if (isValid) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const codeSnippet = `import React, { useState } from 'react';

export default function RegistrationForm() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({});

  // Real-time computed validation errors
  const errors = {};
  if (!values.email.includes('@')) errors.email = 'Valid email required';
  if (values.password.length < 6) errors.password = 'Min 6 characters required';

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <form onSubmit={e => { e.preventDefault(); if (!Object.keys(errors).length) alert('Success'); }}>
      <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {touched.email && errors.email && <span className="error">{errors.email}</span>}

      <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {touched.password && errors.password && <span className="error">{errors.password}</span>}

      <button type="submit" disabled={Object.keys(errors).length > 0}>Register</button>
    </form>
  );
}`;

  return (
    <SectionCard
      id="form-validation"
      title="Production Form Architecture & Validation"
      subtitle="Multi-field form handling, touched states, synchronous validation, and error feedback"
      badges={[
        { label: 'Forms', variant: 'core' },
        { label: 'Pattern', variant: 'core' },
      ]}
      summaryPoints={[
        'Single Handler Pattern: Use [e.target.name]: e.target.value to update multi-field state using a single generic onChange function.',
        'Touched State Pattern: Only display validation errors AFTER a user has focused and blurred (exited) the input, avoiding aggressive premature errors.',
        'Computed Errors: Derive validation errors on every render from state rather than keeping errors in a separate redundant state.',
        'Submit Guard: Prevent submission if Object.keys(errors).length > 0 and mark all fields as touched.'
      ]}
      interviewTip="Should validation errors be stored in React state? Usually NO! Errors are pure derived state computed directly from the current form values during render, preventing out-of-sync state bugs."
      codeSnippet={codeSnippet}
      codeFileName="FormValidationDemo.jsx"
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '480px' }}>
        {/* Username */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
            Username:
          </label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field"
            placeholder="johndoe"
          />
          {touched.username && errors.username && (
            <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>
              ⚠ {errors.username}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
            Email Address:
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field"
            placeholder="john@example.com"
          />
          {touched.email && errors.email && (
            <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>
              ⚠ {errors.email}
            </span>
          )}
        </div>

        {/* Password */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
            Password:
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field"
            placeholder="••••••••"
          />
          {touched.password && errors.password && (
            <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>
              ⚠ {errors.password}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
            Confirm Password:
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field"
            placeholder="••••••••"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>
              ⚠ {errors.confirmPassword}
            </span>
          )}
        </div>

        {/* Terms */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1', cursor: 'pointer' }}>
            <input
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: '16px', height: '16px' }}
            />
            I accept the terms and privacy conditions
          </label>
          {touched.acceptTerms && errors.acceptTerms && (
            <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>
              ⚠ {errors.acceptTerms}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
          Submit Validated Registration
        </button>

        {submitted && (
          <div style={{ padding: '0.6rem 0.8rem', background: '#064e3b', color: '#6ee7b7', borderRadius: '6px', fontSize: '0.85rem' }}>
            🎉 Form submitted successfully with all validations passing!
          </div>
        )}
      </form>
    </SectionCard>
  );
}
