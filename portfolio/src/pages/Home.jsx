import Layout from "../components/layout/Layout";
import Hero from "../components/section/Hero";
import SecHead from "../components/content/SecHead";
import ProjectBlock from "../components/content/ProjectBlock";
import projectsData from "../data/projectsData.json";

function Home() {

  const stackedProjects = projectsData.filter(
    (project) => project.variant === "stacked"
  );

  const columnProjects = projectsData.filter(
    (project) => project.variant === "columns"
  );

  const chunkedColumns = [];
  for (let i = 0; i < columnProjects.length; i += 2) {
    chunkedColumns.push(columnProjects.slice(i, i + 2));
  }

  return (
    <Layout>
      <Hero />

      <SecHead title="Case Studies" />
      {stackedProjects.map((project) => (
        <ProjectBlock key={project.id} variant="stacked" projects={[project]} />
      ))}

      <SecHead title="BASICS: sowwy! no case studies below :(" />
      {chunkedColumns.map((chunk, index) => (
        <ProjectBlock
          key={index}
          variant="columns"
          columns={2}
          projects={chunk}
        />
      ))}
    </Layout>
  );
}

export default Home;
