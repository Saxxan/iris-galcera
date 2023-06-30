// Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Database
import {
  deleteFiles,
  downloadFiles,
  updateProjects,
  uploadFiles,
} from "../../../../../../../../api/database.js";

// Components
import {
  AcceptButton,
  CancelButton,
} from "../../../../../../../commons/Buttons/Buttons";
import { DeleteImgIconButton } from "../../../../../../../commons/IconButtons/IconButtons.jsx";
import { ModalLayout } from "../../../../../../../commons/Modal/Modal";
import DeleteImgConfirmDialog from "./components/DeleteImgConfirmDialog.jsx";

// Styled components
const Frame = styled.article`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > img {
    width: 100%;
    border-radius: 6px;
    margin-top: -20px;
  }

  @media (min-width: 800px) {
    width: 100px;
  }
`;

const ProjectImagesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 350px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
`;

const DeleteImgBtn = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  z-index: 1;
  cursor: pointer;
`;

function EditProject(props) {
  const [projectName, setProjectName] = useState(props.project.projectName);
  const [projectDescription, setProjectDescription] = useState(
    props.project.projectDescription
  );
  const [files, setFiles] = useState(props.project.files);
  const [projectThumbnailImg, setProjectThumbnailImg] = useState(
    props.project.thumbnailImg
  );
  const [projectThumbnailVideo, setProjectThumbnailVideo] = useState(
    props.project.thumbnailVideo
  );
  const [projectImages, setProjectImages] = useState();
  const [thumbnailImg, setThumbnailImg] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteFile, setDeleteFile] = useState("");
  const [thumbnailVideo, setThumbnailVideo] = useState();

  /**
   * Effect hook to get the files of the project from the database
   */
  useEffect(() => {
    let updateThumbnail = projectThumbnailImg;
    let updateFiles = files;

    updateFiles.forEach((file) => {
      if (file.fileName !== "") {
        let promise = downloadFiles(file.fileName);
        Promise.resolve(promise).then((res) => {
          file.url = res;
        });
      }
    });

    if (updateThumbnail.fileName !== "") {
      let promise = downloadFiles(updateThumbnail.fileName);
      Promise.resolve(promise).then((res) => {
        updateThumbnail.url = res;
      });
    }
  }, [files, projectThumbnailImg]);

  /**
   * Function that handles submit form for edit a existing project
   * @param {*} e
   */
  function handleEditProject(e) {
    e.preventDefault();

    if (projectImages) {
      uploadFiles(projectImages);
    }

    if (thumbnailImg) {
      uploadFiles(thumbnailImg);
    }

    let updateProject = {
      id: props.project.id,
      projectName: projectName,
      projectDescription: projectDescription,
      files: files,
      thumbnailImg: projectThumbnailImg,
      thumbnailVideo: thumbnailVideo,
    };

    let promise = updateProjects(props.type, updateProject);

    Promise.resolve(promise).then((res) => {
      props.handleClose();
    });
  }

  /**
   * Function that handles thumbnail attached to the add project form
   * @param {*} inputThumbnailImg
   */
  function handleThumbnailImgInputChange(inputThumbnailImg) {
    setThumbnailImg(inputThumbnailImg);
    let thumbnailImg = { fileName: inputThumbnailImg[0].name, url: "" };
    setProjectThumbnailImg(thumbnailImg);
  }

  /**
   * Function that handles the files attached to get the files and their names
   * @param {*} inputFiles
   */
  function handleFilesInputChange(inputFiles) {
    let currentFiles = files;

    if (inputFiles.length > 0) {
      for (let i = 0; i < inputFiles.length; i++) {
        let newFile = { fileName: inputFiles[i].name, url: "" };
        currentFiles = [...currentFiles, newFile];
      }
    }

    setFiles(currentFiles);
    setProjectImages(inputFiles);
  }

  /**
   * Function to handle click on delete image
   * @param {*} fileToDeleteName
   */
  function handleDeleteImage() {
    if (files.filter((item) => item.fileName === deleteFile).length > 0) {
      let updateFiles = files.filter((item) => item.fileName !== deleteFile);
      setFiles(updateFiles);
    } else {
      setProjectThumbnailImg({ fileName: "", url: "" });
    }

    deleteFiles(deleteFile);
  }

  /**
   * Function that toggles modal state
   */
  function handleToggleModalState() {
    setIsModalVisible(!isModalVisible);
  }

  /**
   * Function that handles delete selected projects
   */
  function handleDeleteButtonClick(e, fileToDeleteName) {
    e.preventDefault();

    handleToggleModalState();
    setDeleteFile(fileToDeleteName);
  }

  return (
    <>
      {isModalVisible && (
        <DeleteImgConfirmDialog
          handleClose={handleToggleModalState}
          handleDelete={handleDeleteImage}
          fileToDelete={deleteFile}
        />
      )}
      <ModalLayout>
        <h2>Edit project</h2>
        <form>
          <label htmlFor="projectName">Project name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <label htmlFor="projectDescription">Description</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            style={{ height: "100px" }}
          />
          <section
            style={{ display: "flex", alignItems: "center", gap: "24px" }}
          >
            <section>
              <label htmlFor="projectThumbnail">Project main image</label>
              <section></section>
              {projectThumbnailImg.fileName !== "" ? (
                <Frame>
                  <DeleteImgBtn
                    onClick={(e) =>
                      handleDeleteButtonClick(e, projectThumbnailImg.fileName)
                    }
                  >
                    <DeleteImgIconButton />
                  </DeleteImgBtn>
                  <img
                    src={projectThumbnailImg.url}
                    alt={projectThumbnailImg.fileName}
                  />
                </Frame>
              ) : (
                <input
                  type="file"
                  name="thumbnail"
                  id="projectThumbnailImg"
                  onChange={(e) =>
                    handleThumbnailImgInputChange(e.target.files)
                  }
                />
              )}
            </section>
            <p>O</p>
            <section>
              <label htmlFor="projectThumbnailVideo">
                URL project main video
              </label>
              <input
                type="text"
                name="thumbnail-video"
                id="projectThumbnailVideo"
                onChange={(e) => setThumbnailVideo(e.target.value)}
              />
            </section>
          </section>
          <label htmlFor="projectImages">Project images</label>
          {files && (
            <ProjectImagesContainer>
              {files.map((file, index) => (
                <Frame key={index}>
                  <DeleteImgBtn
                    onClick={(e) => handleDeleteButtonClick(e, file.fileName)}
                  >
                    <DeleteImgIconButton />
                  </DeleteImgBtn>
                  <img src={file.url} alt={file.fileName} />
                </Frame>
              ))}
            </ProjectImagesContainer>
          )}
          <input
            type="file"
            name="files"
            data-multiple-caption="{count} files selected"
            multiple
            id="projectImages"
            onChange={(e) => handleFilesInputChange(e.target.files)}
          />
        </form>
        <footer>
          <CancelButton onClick={props.handleClose}>
            Cancel changes
          </CancelButton>
          <AcceptButton onClick={handleEditProject}>Save changes</AcceptButton>
        </footer>
      </ModalLayout>
    </>
  );
}

export default EditProject;
