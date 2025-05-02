import { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import JobCard from '../components/JobCard';
import { ReactTyped } from 'react-typed';

function JobList() {
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!location || !role) {
      setError('Location and role are required');
      return;
    }

    try {
      setError(null);
      setLoading(true);
      const res = await axios.get('http://localhost:5500/api/jobs/getjobs', { params: { location, role } });
      
      if (res.data.success === false) {
        setError(res.data.error);
      } else {
        // Shuffle and limit to 9 jobs
        const shuffledJobs = res.data.jobs.sort(() => 0.5 - Math.random()).slice(0, 9);
        setJobs(shuffledJobs);
      }
    } catch (error) {
      console.error('Error occurred during the search:', error.message);
      setError('Failed to fetch job listings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-dark min-vh-100'>
      <div className='d-flex flex-column align-items-center vw-100 ' style={{ overflowX: 'hidden', marginTop: '80px' }}>
        <div style={{ marginBottom: '20px' }}>
          <ReactTyped
            strings={[
              'Welcome to JobFusion!',
              'Your gateway to top job opportunities.',
              'Find your dream job now.',
              'Streamline your job search with ease.'
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop
            className="text-light text-center mt-4 mb-4"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          />
        </div>
        
        <div className="d-flex justify-content-center " style={{ width: '100%', marginTop: '20px' }}>
          <form 
            onSubmit={handleSearch} 
            className="bg-secondary p-4 rounded" 
            style={{ width: '100%', maxWidth: '600px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="form-group">
              <label htmlFor="exampleInputJobRole">Job Role</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputJobRole" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                placeholder="Enter job role you want to search for" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputLocation">Location</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputLocation" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="Enter your preferred location" 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>

        <div className='d-flex justify-content-center align-items-center mt-4'>
          {loading && <Spinner />} 
        </div>

        {error && <p className="text-light text-center mt-4" style={{ color: 'red' }}>{error}</p>}
        
        {jobs.length > 0 && 
          <div className="text-light text-center mt-4 mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Job opportunities that might interest you...
          </div>
        }

        <div className='container-fluid mt-4'>
          <div className='row justify-content-center'>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div key={index} className='col-md-4 mb-4'>
                  <JobCard job={job} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-light text-center">No job listings available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;





