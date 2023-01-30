import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

//****************** Commercial projects *******************/

/**
 * Function to get the commercial projects from database
 * @return commercial projects
 */
export const getCommercials = async () => {
  let projects = await getDoc(doc(db, "projects", "commercials"));
  return projects.data();
};

//******************  Film projects ***********************/

/**
 * Function to get the film projects from database
 * @returns film projects
 */
export const getFilm = async () => {
  let projects = await getDoc(doc(db, "projects", "film"));
  return projects.data();
};

//******************  TV series projects ***********************/

/**
 * Function to get TV series projects from database
 * @returns TV series projects
 */
export const getTVSeries = async () => {
  let projects = await getDoc(doc(db, "projects", "tvseries"));
  return projects.data();
};

/**
 * Function to add a new project to the database
 * @param {*} projectType
 * @param {*} newProject
 */
export const updateProjects = async (projectType, newProject) => {
  let newProjectType = projectType === "tv series" ? "tvseries" : projectType;
  // Get the data from database
  let projects = await getDoc(doc(db, "projects", newProjectType));
  projects = projects.data();

  // Get the new project to be added
  let newAddedProject = newProject;

  // Create new project configurations
  const id = projects.projects.length + 1;
  const path = `/${newProjectType}/${newAddedProject.projectName}`;
  newAddedProject.id = id;
  newAddedProject.path = path;

  // Add the new project to list of projects
  projects.projects.push(newAddedProject);

  // Send updated projects to database
  await setDoc(doc(db, "projects", newProjectType), projects);
};

/**
 * Function to delete a project on database
 * @param {*} projectType
 * @param {*} projectId
 */
export const deleteProject = async (projectType, projectId) => {
  let newProjectType = projectType === "tv series" ? "tvseries" : projectType;

  // Get the data from database
  let projects = await getDoc(doc(db, "projects", newProjectType));
  projects = projects.data();

  // Filter the projects which have different ID from the given
  projects.projects.forEach((item) => {
    if (item.id === Number(projectId)) {
      let index = projects.projects.indexOf(item);
      projects.projects.splice(index, 1);
    }
  });

  await setDoc(doc(db, "projects", newProjectType), projects);
};
