function ProjectTable({ project }) {
  const { name, description, image, build } = project;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default ProjectTable;
