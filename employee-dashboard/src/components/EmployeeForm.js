import React, { useState } from 'react';

export default function EmployeeForm() {
  const [form, setForm] = useState({ name: '', designation: '', location: '', salary: '' });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <div className="container py-4">
      <h2>Employee Form</h2>
      <div className="row mt-3">
        <div className="col-12 col-md-8">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-control form-control-lg" required />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Designation</label>
                  <input name="designation" value={form.designation} onChange={handleChange} className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Location</label>
                  <input name="location" value={form.location} onChange={handleChange} className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Salary</label>
                  <input name="salary" value={form.salary} onChange={handleChange} className="form-control" type="number" />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary btn-lg">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="small-muted">Preview</div>
          <div className="form-card mt-2">
            {submitted ? (
              <div>
                <h6 className="mb-2">{submitted.name}</h6>
                <div className="small-muted">{submitted.designation}</div>
                <div className="small-muted">{submitted.location}</div>
                <div className="mt-2"><strong>Salary:</strong> {submitted.salary || '—'}</div>
              </div>
            ) : (
              <div className="small-muted">Fill the form to preview employee details here.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
