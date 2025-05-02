

const JobCard = ({ job }) => {
  return (
    <div className="card bg-secondary text-light p-4 mb-4 rounded shadow-sm d-flex flex-column"
         style={{ width: '100%', maxWidth: '350px', height: '400px', transition: 'transform 0.3s, box-shadow 0.3s' }}>
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title mb-3" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{job.title}</h5>
        <h6 className="card-subtitle mb-3 text-white">{job.company}</h6>
        <p className="card-text mb-3"><strong>Salary:</strong> {job.salary}</p>
        <p className="card-text mb-3"><strong>Location:</strong> {job.location}</p>
        <div className="mt-auto">
          <a href={job.link} target='_blank' rel='noopener noreferrer' className="btn btn-primary w-100">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

