

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <div className="card-title">{project.name}</div>
                <a href={`/projects/${project.id}`} className="btn btn-light">View</a>
            </div>
            <p className="small">
                Status: <strong>{project.status}</strong>
            </p>
        </div>
      </div>
    </div>
  )
}
