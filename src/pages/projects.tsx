import React from "react";
import { IProjectsSection } from "@/types/projects-page";
import ProjectCard from "@/components/project-card";
import { DefaultCardGrid } from "@/components/default-card-grid";
import { readProjects } from "@/utils/read-file";
import { jost } from "@/fonts";
import styles from "./projects.module.scss";
import { DefaultBanner } from "@/components/default-banner";

export async function getStaticProps() {
  return {
    props: {
      projectsSection: await readProjects(),
    },
  };
}

export default function Projects({
  projectsSection,
}: {
  projectsSection: IProjectsSection[];
}) {
  return (
    <div className={styles["content"]}>
      <DefaultBanner title="Projects" imgSrc="/default-bg-1.svg" />
      {projectsSection.map((section, index) => (
        <div key={index} className={styles["list"]}>
          <h2 className={`${jost.className} ${styles["title"]}`}>
            {section.title}
          </h2>
          <DefaultCardGrid>
            {section.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </DefaultCardGrid>
        </div>
      ))}
    </div>
  );
}
