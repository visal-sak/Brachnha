"use client"
import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component"
import {
  useDeleteRequestAdminMutation,
  useDeleteRequestIsDisableMutation,
  useGetRequestAllUsersQuery,
  useGetRequestAllAdminsQuery,
  getFilteredAdmins,
} from "src/store/features/admin/requestAdminApi";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default  function TableUser() {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    //is disable account 
    const [deleteRequestIsDisable] = useDeleteRequestIsDisableMutation(); 
      const handleDisableStatusUpdate = async (uuid, disable) => {
      try {
        await deleteRequestIsDisable({ uuid, disable });
        // Handle success
      } catch (error) {
        // Handle error
      }
    };

    const [deleteAdminUser]=useDeleteRequestAdminMutation()



    const handleDeleteRecord = () => {
        if (selectedRecord) {
          switch (selectedRecord.type) {
            case "admins":
              deleteAdminUser(selectedRecord.uuid)
                .then(() => {
                  setSelectedRecord(null);
                  setShowModal(false);
                  toast.error("ត្រូវបានលុបដោយជោគជ័យ!", {
                    theme: "colored",
                    icon: "🗑️",
                    autoClose: 1000,
                    position: "bottom-right",
                  });
                })
                .catch((error) => {
                  console.error(error);
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
    //set all admin users from api
    const {
        data:admins,
        isLoading,
        error,
      } = useGetRequestAllUsersQuery()
   
      const columns = [
            {
              name: "Username",
              selector: (row) => row.username,
            },
            {
              name: "Email",
              selector: (row) => row.email,
            },
            {
              name: "Role",
              selector: (row) => row.role,
             
            },
            {
              name: "Action",
              cell: (row) => (
                <div>
                  <button
                    class="text-red-700 my-5 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={() =>
                      handleConfirmDelete({ type: "admins", uuid: row?.uuid })
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

        return (
          <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10 ">
              {admins && admins.data ? (
                <DataTable
                  title="All User"
                  className="mb-10"
                  columns={columns}
                  data={admins.data}
                  pagination
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
            <ToastContainer />
          </>
        );
 
}