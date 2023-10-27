"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Modal from "./Modal"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDeleteRequestGameMutation, useDeleteRequestIsDisableGameMutation, useGetRequestAllGameByCodeQuery } from "src/store/features/games/requestGameCardApi";
import { useGetRequestAllGameMultipleChoiceByCodeQuery } from "src/store/features/games/multiple-choice/requestMultipleChoiceGame";


export default function MultipleChoiceList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const {
    data: games
  } = useGetRequestAllGameMultipleChoiceByCodeQuery("GMC");
   //is disable account
   const [deleteRequestIsDisableGame] = useDeleteRequestIsDisableGameMutation();
   const handleDisableStatusUpdate = async (uuid, disable) => {
     try {
       await deleteRequestIsDisableGame({ uuid, disable });
       // Handle success
     } catch (error) {
       // Handle error
     }
   };

  const [deleteGame] =useDeleteRequestGameMutation()
  const handleDeleteRecord = () => {
    if (selectedRecord) {
      switch (selectedRecord.type) {
        case "game":
          deleteGame(selectedRecord.uuid)
            .then(() => {
              setSelectedRecord(null);
              setShowModal(false);
              toast.error("ប្រភេទ game multiple choice ត្រូវបានលុបដោយជោគជ័យ!", {
                theme: "colored",
                icon: "🗑️",
                autoClose: 1000,
                position: "bottom-left",
              });
            })
            .catch((error) => {
              toast.error("បរាជ័យ!", {
                theme: "colored",
                icon: "❌",
                autoClose: 1000,
                position: "bottom-right",
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


  const columnGameTypes = [
    {
      name: "កូដហ្គេម",
      selector: (row) => row?.code,
    },
        {
      name: "រូបភាព",
      cell : (row) => (
        <div className="w-20">
        <img src={row?.thumbnail}/>
        </div>
      ),
    },
    {
      name: "ចំណងជើង",
      selector: (row) => row?.title,
    },
    {
      name: "សំណួរ",
      selector: (row) => row?.data?.question?.text,
    },
    {
      name: "រូបភាពចម្លើយ",
      cell : (row) => (
        <div className="w-20">
        <img src={row?.data?.question?.images}/>
        </div>
      ),
    },
    {
      name: "សម្លេង",
      cell : (row) => (
        <audio
              id="song"
              class="block w-60 h-12 mb-9 border-2 border-emerald-300 rounded-full"
              controls
            >
              <source
                src={row?.data?.question?.audios}
                type="audio/mpeg"
              />
            </audio>
      ),
    },
    {
      name: "ចម្លើយ",
      cell : (row) => (
        row?.data?.answers.map((item,index)=>(
          <div className="ml-3 w-96 grid grid-rows-2 ">
            <div>
              <p className="w-20 p-1 " >{item?.word}</p>
            </div>
            <div>
              {item?.isCorrect === true && 
              (   <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              )}
              {item?.isCorrect === false && 
              ( <input id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              )}
            </div>
          </div>
        ))
      ),
    },
    {
      name: "Disable",
      cell: (row) => (
        <div>
          <label className="relative ml-20 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={row.deleted}
              onChange={(event) =>
                handleDisableStatusUpdate(row.uuid, event.target.checked)
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          </label>
        </div>
      ),
    },
    {
      name: "",
      cell: (row) => (
          <button
            class=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() =>
              handleConfirmDelete({ type: "game", uuid: row?.uuid })
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
       
      ),
    },
  ];

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10 ">
        {games && games.data ? (
          <DataTable
            title="ប្រភេទហ្គេមជ្រើសរើស"
            className="mb-10"
            columns={columnGameTypes}
            data={games.data}
            pagination
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
      <ToastContainer />
    </>
  );
      }
