import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

/**
 * Function to upload files and return references
 * @param {*} files
 * @returns
 */
export const uploadFiles = async (files) => {
  let filesRef = [];

  // Managing files
  for (let i = 0; i < files.length; i++) {
    let fileToUpload = files.item(i);

    // Create file storage reference
    let storageRef = ref(storage, fileToUpload.name);
    filesRef = [...filesRef, storageRef];
    await uploadBytes(storageRef, fileToUpload);
  }
  return filesRef;
};

/**
 * Function to get a download url for the file
 * @param {*} fileName
 * @returns
 */
export const downloadFiles = async (fileName) => {
  let downloadURL = await getDownloadURL(ref(storage, fileName));
  return downloadURL;
};

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
export const getFilmSeries = async () => {
  let projects = await getDoc(doc(db, "projects", "filmseries"));
  return projects.data();
};

//******************  TV series projects ***********************/

/**
 * Function to get TV series projects from database
 * @returns TV series projects
 */
export const getTV = async () => {
  let projects = await getDoc(doc(db, "projects", "tv"));
  return projects.data();
};

/**
 * Function to add a new project to the database
 * @param {*} projectType
 * @param {*} newProject
 */
export const updateProjects = async (projectType, newProject) => {
  let newProjectType = projectType;

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
  projects.projects = [...projects.projects, newAddedProject];

  // Send updated projects to database
  await setDoc(doc(db, "projects", newProjectType), projects);
};

/**
 * Function to delete a project on database
 * @param {*} projectType
 * @param {*} projectId
 */
export const deleteProject = async (projectType, projectsId) => {
  let newProjectType = projectType;

  // Get the data from database
  let projects = await getDoc(doc(db, "projects", newProjectType));
  projects = projects.data();

  // Filter the projects which have different ID from the given
  projectsId.forEach((projectId) => {
    projects.projects = projects.projects.filter(
      (item) => item.id !== Number(projectId)
    );
  });

  for (let i = 0; i < projects.projects.length; i++) {
    projects.projects[i].id = i + 1;
  }

  await setDoc(doc(db, "projects", newProjectType), projects);
};
