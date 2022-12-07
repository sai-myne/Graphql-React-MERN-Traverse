import Client from "../components/Client";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjecttModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
        <div className="d-flex gap-4 mb-4">
            <AddClientModal />
            <AddProjecttModal />
        </div>      
        <Projects />
        <hr />
        <Client />
    </>
  )
}
