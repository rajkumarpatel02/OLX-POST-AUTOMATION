import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ListingForm from './components/forms/ListingForm';
import PreviewPanel from './components/preview/PreviewPanel';
import { useForm } from './hooks/useForm';
import './App.css';

function App() {
  const { formData, errors, handleChange } = useForm();

  return (
    <div className="app">
      <Header />
      <main className="app-main container">
        <div className="content-grid">
          <div className="form-section">
            <ListingForm
              data={formData}
              errors={errors}
              onChange={handleChange}
            />
          </div>
          <div className="preview-section">
            <PreviewPanel data={formData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
