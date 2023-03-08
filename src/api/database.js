import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

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

/**
 * Function to delete a file in the database
 * @param {*} fileName
 */
export const deleteFiles = async (fileName) => {
  await deleteObject(ref(storage, fileName));
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
export const addProjects = async (projectType, newProject) => {
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
 * Function to update a existing project to the database
 * @param {*} projectType
 * @param {*} newProject
 */
export const updateProjects = async (projectType, newProject) => {
  let newProjectType = projectType;

  // Get the data from database
  let projects = await getDoc(doc(db, "projects", newProjectType));
  projects = projects.data();

  // Get the updated project
  let newUpdatedProject = newProject;

  console.log(newUpdatedProject);
  console.log(projects);

  // // Create new project configurations
  // const id = projects.projects.length + 1;
  // const path = `/${newProjectType}/${newAddedProject.projectName}`;
  // newAddedProject.id = id;
  // newAddedProject.path = path;

  // // Add the new project to list of projects
  // projects.projects = [...projects.projects, newAddedProject];

  // Send updated projects to database
  // await setDoc(doc(db, "projects", newProjectType), projects);
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

  let projectsToDelete = [];

  projectsId.forEach((projectId) => {
    // Get the projects to delete
    projects.projects.forEach((project) => {
      if (project.id === Number(projectId)) {
        projectsToDelete = [...projectsToDelete, project];
      }
    });

    // Filter the projects which have different ID from the given
    projects.projects = projects.projects.filter(
      (item) => item.id !== Number(projectId)
    );
  });

  // Delete files of each deleted project
  projectsToDelete.forEach((projectToDelete) => {
    if (projectToDelete["files"]) {
      projectToDelete.files.forEach((file) => {
        deleteFiles(file.fileName);
      });
    }
  });

  // Modify the projects ID
  for (let i = 0; i < projects.projects.length; i++) {
    projects.projects[i].id = i + 1;
  }

  // Send the projects again to the database
  await setDoc(doc(db, "projects", newProjectType), projects);
};
