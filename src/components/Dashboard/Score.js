"use client"
import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component"
import "react-toastify/dist/ReactToastify.css";
import { useGetRequestScoreQuery } from "src/store/features/gameHistory/requestSubjectApi";

export default  function ScoreTable() {
 
 const [selectedRecord, setSelectedRecord] = useState(null);
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

    const {
        data:score
      } = useGetRequestScoreQuery();

    
      
      const columns = [
            {
              name: "អ្នកលេង",
              selector: (row) => row.username,
            },
            {
              name: "ចំណាត់ថ្នាក់",
              selector: (row, index) => '#'+(index + 1 )
            },
            {
              name: "ពិន្ទុ",
              selector: (row) => row.score,
            },
            
          ];
     

        return (
          <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-10 ">
              {score && score.data ? (
                <DataTable
                  title="ចំណាត់ថ្នាក់"
                  className="mb-10"
                  columns={columns}
                  data={score.data}
                  pagination
                  fixedHeader
                  fixedHeaderScrollHeight='500px'
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
          </>
        );
 
}