import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

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
  // newAddedProject.filesPaths = [];

  // Managing files
  // for (let i = 0; i < newAddedProject.projectImages.length; i++) {
  //   let fileToUpload = newAddedProject.projectImages.item(i);

  //   // Create file storage reference
  //   let storageRef = ref(storage, `files/${fileToUpload.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       console.log("File uploaded succesfully");
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         newAddedProject.filesPaths.concat(downloadURL);
  //       });
  //     },
  //     (error) => {
  //       console.log("Fail trying to upload the file");
  //     }
  //   );
  // }

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
