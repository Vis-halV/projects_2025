import Layout from '../components/layout/Layout';
import Hero from '../components/section/Hero';
import SecHead from '../components/content/SecHead';
import ProjectDesc from '../components/content/ProjDesc';

function Index() {

    return(
        <>
            <Layout>

                <Hero />

                <SecHead title="Case Studies" />

                <ProjectDesc 
                    title="Felt not said" 
                    year="2025" 
                    desc="Visual storytelling and unfiltered emotions"
                />

                <SecHead title="BASICS: sowwy! no case studies below :(" />

            </Layout>
        </>
    )

}

export default Index;