import React, { useState, useEffect } from "react";
import Table from "./Table";
import data from "./MOCK_DATA.json";
import Paginate from "../pagination/Paginate";

const Data = data;
const noOfRows = Data.length;

const DataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(noOfRows / rowsPerPage);

  const dataContentPerPage = Data.filter(
    (data) =>
      data.id <= currentPage * rowsPerPage &&
      data.id > (currentPage - 1) * rowsPerPage
  );

  useEffect(() => {
    setTotalPages(noOfRows / rowsPerPage);
    setCurrentPage(1);
  }, [rowsPerPage]);

  return (
    <div>
      {rowsPerPage && (
        <Table
          tableData={dataContentPerPage}
          thNames={["Name", "Email", "Gender", "Phone"]}
          tdProperties={["first_name", "email", "gender", "phone"]}
          thStyle={{
            textAlign: "center",
            border: "1px solid #ddd",
            backgroundColor: "#E5EAF0",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
          tdStyle={{
            textAlign: "center",
            border: "1px solid #ddd",
            backgroundColor: "#edf0f4",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        />
      )}

      <div style={{ margin: "2rem" }}>
        Number of rows to display per page{" "}
        <input
          value={rowsPerPage}
          type="number"
          max={100}
          onChange={(e) => setRowsPerPage(e.target.value)}
        />
      </div>

      {rowsPerPage && (
        <Paginate
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          arrowColor={"#21385b"}
          borderColor={"#21385b"}
          backgroundColor={"#21385b"}
          digitColor={"white"}
        />
      )}
    </div>
  );
};

export default DataTable;
