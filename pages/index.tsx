import Header from "@/components/Header";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skill: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experience, skill, projects, socials }: Props) => {
  return (

    <div
      className="bg-[rgb(64,66,88)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF6000]"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <Nav />

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center scroll-smooth">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience experience={experience}/>
      </section>

      <section id="skills" className="snap-center scroll-smooth">
        <Skills skill={skill}/>
      </section>

      <section id="projects" className="snap-center scroll-smooth">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-center scroll-smooth">
        <ContactMe />
      </section>

    </div>

  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo| null = await fetchPageInfo();

  if (!pageInfo) {
    return {
      notFound: true,
    };
  }
  const experience: Experience[] = await fetchExperiences();
  const skill: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skill,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
