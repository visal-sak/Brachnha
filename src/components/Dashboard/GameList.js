"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  useDeleteRequestSubjectMutation,
  useGetRequestSubjectsQuery,
} from "../../store/features/subject/requestSubjectApi";
import SubjectUpdateForm from "./SubjectUpdateForm";
import {
  useDeleteRequestGameTypeMutation,
  useGetRequestGameTypesQuery,
} from "../../store/features/gameType/requestGameTypeApi";
import GameTypeUpdateForm from "./GameTypeUpdateForm";
import {
  useDeleteRequestGradeMutation,
  useGetRequestGradesQuery,
} from "../../store/features/grade/requestGradeApi";
import GradeUpdateForm from "./GradeUpdateForm";
import Modal from "./Modal"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./gameFont.module.css";

export default function GameData() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const {
    data: subjects,
    isLoading: isLoadingSubject,
    error: errorSubject,
  } = useGetRequestSubjectsQuery();
  const {
    data: gametypes,
    isLoading: isLoadingGameType,
    error: errorGameType,
  } = useGetRequestGameTypesQuery();
  const {
    data: grades,
    isLoading: isLoadingGrade,
    error: errorGrdae,
  } = useGetRequestGradesQuery();

  const [deleteSubject] = useDeleteRequestSubjectMutation();
  const [deleteGameType] = useDeleteRequestGameTypeMutation();
  const [deleteGrade] = useDeleteRequestGradeMutation();

  const handleDeleteRecord = () => {
    if (selectedRecord) {
      switch (selectedRecord.type) {
        case "subject":
          deleteSubject(selectedRecord.uuid)
            .then(() => {
              setSelectedRecord(null);
              setShowModal(false);
              toast.error("មុខវិជ្ជាត្រូវបានលុបដោយជោគជ័យ!", {
                theme: "colored",
                icon: "🗑️",
                autoClose: 1000,
                position: "bottom-left",
                className: styles["my-toast"],
              });
            })
            .catch((error) => {
              console.error(error);
              toast.error("បរាជ័យ!", {
                theme: "colored",
                icon: "❌",
                autoClose: 1000,
                position: "bottom-right",
                className: styles["my-toast"],
              });
            });
          break;
        case "gameType":
          deleteGameType(selectedRecord.uuid)
            .then(() => {
              setSelectedRecord(null);
              setShowModal(false);
              toast.error("ប្រភេទហ្គេមត្រូវបានលុបដោយជោគជ័យ!", {
                theme: "colored",
                icon: "🗑️",
                autoClose: 1000,
                position: "bottom-right",
                className: styles["my-toast"],
              });
            })
            .catch((error) => {
              console.error(error);
              toast.error("បរាជ័យ!", {
                theme: "colored",
                icon: "❌",
                autoClose: 1000,
                position: "bottom-right",
                className: styles["my-toast"],
              });
            });
          break;
        case "grade":
          deleteGrade(selectedRecord.uuid)
            .then(() => {
              setSelectedRecord(null);
              setShowModal(false);
              toast.error("ថ្នាក់ត្រូវបានលុបដោយជោគជ័យ!", {
                theme: "colored",
                icon: "🗑️",
                autoClose: 1000,
                position: "bottom-right",
                className: styles["my-toast"],
              });
            })
            .catch((error) => {
              console.error(error);
              toast.error("បរាជ័យ!", {
                theme: "colored",
                icon: "❌",
                autoClose: 1000,
                position: "bottom-right",
                className: styles["my-toast"],
              });
            });
          break;
        default:
          break;
      }
    }
  };

  const handleCancelDelete = () => {
    setSelectedRecord(null);
    setShowModal(false);
  };

  const handleConfirmDelete = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const columnGrades = [
    {
      name: "ថ្នាក់",
      selector: (row) => row.title,
    },
    {
      name: "ពិពណ៌នា",
      selector: (row) => row.description,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <GradeUpdateForm
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            uuid={row.uuid}
          />
          <button
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() =>
              handleConfirmDelete({ type: "grade", uuid: row.uuid })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[20px]"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const columnSubjects = [
    {
      name: "មុខវិជ្ជា",
      selector: (row) => row.subject,
    },
    {
      name: "ពិពណ៌នា",
      selector: (row) => row.description,
    },
    {
      name: "Route",
      selector: (row) => row.route,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <SubjectUpdateForm
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            uuid={row.uuid}
          />
          <button
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() =>
              handleConfirmDelete({ type: "subject", uuid: row.uuid })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[20px]"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const columnGameTypes = [
    {
      name: "ប្រភេទហ្គេម",
      selector: (row) => row.name,
    },
    {
      name: "ពិពណ៌នា",
      selector: (row) => row.description,
    },
    {
      name: "Route",
      selector: (row) => row.route,
    },
    {
      name: "កូដនៃមុខវិជ្ជា",
      selector: (row) => row.subjectCode,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <GameTypeUpdateForm
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            uuid={row.uuid}
          />
          <button
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() =>
              handleConfirmDelete({ type: "gameType", uuid: row.uuid })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[20px]"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const customPaginationStyles = {
    rowsPerPageDropdown: {
      marginTop: "0.5rem",
      marginRight: "0.5rem",
    },
    pagination: {
      marginTop: "0.5rem",
      marginRight: "0.5rem",
    },
  };

  const customPagination = () => {
    return (
      <div className="pagination">
        <p className="pagination-text">Rows per page:</p>
        <div className="pagination-select-wrapper">
          <select className="pagination-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <p className="pagination-text">of 10</p>
        <div className="pagination-buttons">
          <button className="pagination-button">&lt;</button>
          <button className="pagination-button">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">&gt;</button>
        </div>
      </div>
    );
  };

  const highlightOnHoverColor = "ffff00"; // set the desired highlight color

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10 ">
        {grades && grades.data ? (
          <DataTable
            title="ថ្នាក់ទាំងអស់"
            className="mb-10"
            columns={columnGrades}
            data={grades.data}
            subHeader
            fixedHeaderScrollHeight="500px"
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className=" text-gray-700 dark:text-gray-600 bg-slate-50 border border-yellow-300 hover:bg-yellow-50 dark:hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-100 rounded-lg text-sm p-2.5 mr-1"
              />
            }
            customStyles={{
              rows: {
                style: {
                  minHeight: "48px", // set the minimum height of the rows
                },
              },
              cells: {
                style: {
                  fontSize: "14px", // set the font size of the text in the cells
                },
              },
            }}
            // pagination={true}
            // paginationPerPage={5}
            // paginationRowsPerPageOptions={[5, 10, 15]}
            // paginationComponent={customPagination}
            // paginationStyle={customPaginationStyles}
            highlightOnHover={true}
            striped={true}
            defaultSortField="id"
            defaultSortAsc={true}
            responsive={true}
            noHeader={false}
            dense={true}
          />
        ) : (
          <p>Data is null.</p>
        )}{" "}
        {subjects && subjects.data ? (
          <DataTable
            title="មុខវិជ្ជាទាំងអស់"
            className="mb-10"
            columns={columnSubjects}
            data={subjects.data}
            subHeader
            fixedHeaderScrollHeight="500px"
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className=" text-gray-700 dark:text-gray-600 bg-slate-50 border border-yellow-300 hover:bg-yellow-50 dark:hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-100 rounded-lg text-sm p-2.5 mr-1"
              />
            }
            customStyles={{
              rows: {
                style: {
                  minHeight: "48px", // set the minimum height of the rows
                },
              },
              cells: {
                style: {
                  fontSize: "14px", // set the font size of the text in the cells
                },
              },
            }}
            highlightOnHover={true}
            striped={true}
            defaultSortField="id"
            defaultSortAsc={true}
            responsive={true}
            noHeader={false}
            dense={true}
          />
        ) : (
          <p>Data is null.</p>
        )}{" "}
        {gametypes && gametypes.data ? (
          <DataTable
            title="ប្រភេទហ្គេមទាំងអស់"
            className="mb-10"
            columns={columnGameTypes}
            data={gametypes.data}
            subHeader
            fixedHeaderScrollHeight="500px"
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className=" text-gray-700 dark:text-gray-600 bg-slate-50 border border-yellow-300 hover:bg-yellow-50 dark:hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-100 rounded-lg text-sm p-2.5 mr-1"
              />
            }
            customStyles={{
              rows: {
                style: {
                  minHeight: "48px", // set the minimum height of the rows
                },
              },
              cells: {
                style: {
                  fontSize: "14px", // set the font size of the text in the cells
                },
              },
            }}
            highlightOnHover={true}
            striped={true}
            defaultSortField="id"
            defaultSortAsc={true}
            responsive={true}
            noHeader={false}
            dense={true}
          />
        ) : (
          <p>Data is null.</p>
        )}{" "}
      </div>
      {showModal && (
        <Modal
          title="Confirm Delete"
          content={`Are you sure you want to delete this ${selectedRecord?.type}?`}
          onCancel={handleCancelDelete}
          onConfirm={handleDeleteRecord}
        />
      )}
    </>
  );
}
