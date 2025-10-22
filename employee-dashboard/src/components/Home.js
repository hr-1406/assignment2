import React, { useEffect, useState } from 'react';

function initials(name){
  if(!name) return '';
  return name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
}

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setUsers(data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to fetch');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchUsers();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-danger">Error: {error}</div>;

  return (
    <div className="app-shell">
      <div className="hero">
        <div className="container">
          <h2>Employee Dashboard</h2>
          <p className="small-muted">A responsive list of employees fetched from an external API.</p>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-3">
          {users.map(u => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={u.id}>
              <div className="user-card d-flex gap-3 align-items-center">
                <div className="user-avatar flex-shrink-0">{initials(u.name)}</div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1">{u.name}</h6>
                    <small className="text-muted">#{u.id}</small>
                  </div>
                  <div className="small-muted">{u.email}</div>
                  <div className="mt-2 small text-muted">{u.company?.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
