import React, { useState, useEffect } from "react";
import classes from "./Paginate.module.css";

const {
  arrow,
  arrowDouble,
  activeStyle,
  inactiveStyle,
  right,
  left,
  paginationContainer,
  firstPageActive,
  firstPageInactive,
  lastPageActive,
  lastPageInactive,
  pageNoActive,
  pageNoInactive,
} = classes;

export default function Paginate(props) {
  const [totalPages, setTotalPages] = useState(Math.ceil(props.totalPages));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(props.totalPages));
  }, [props.totalPages]);

  return (
    <div className={paginationContainer}>
      {/* ------------------Pagination---------------------- */}

      {/* ------------------Pagination Part-1 (For 10 pages)---------------------- */}

      {totalPages < 11 && (
        <>
          <div
            onClick={() => {
              props.setCurrentPage(1);
              setCurrentPage(1);
            }}
            className={currentPage === 1 ? firstPageActive : firstPageInactive}
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrowDouble} ${left} ${
                currentPage === 1 ? activeStyle : inactiveStyle
              }`}
            ></i>
          </div>
          <div
            onClick={() => {
              if (currentPage > 1) {
                props.setCurrentPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            className={currentPage === 1 ? firstPageActive : firstPageInactive}
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrow} ${left}`}
            ></i>
          </div>
          {totalPages > 0 && (
            <div
              onClick={() => {
                props.setCurrentPage(1);
                setCurrentPage(1);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 1 ? "0.5" : null,
              }}
              className={currentPage === 1 ? pageNoActive : pageNoInactive}
            >
              1
            </div>
          )}
          {totalPages > 1 && (
            <div
              onClick={() => {
                props.setCurrentPage(2);
                setCurrentPage(2);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 2 ? "0.5" : null,
              }}
              className={currentPage === 2 ? pageNoActive : pageNoInactive}
            >
              2
            </div>
          )}
          {totalPages > 2 && (
            <div
              onClick={() => {
                props.setCurrentPage(3);
                setCurrentPage(3);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 3 ? "0.5" : null,
              }}
              className={currentPage === 3 ? pageNoActive : pageNoInactive}
            >
              3
            </div>
          )}
          {totalPages > 3 && (
            <div
              onClick={() => {
                props.setCurrentPage(4);
                setCurrentPage(4);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 4 ? "0.5" : null,
              }}
              className={currentPage === 4 ? pageNoActive : pageNoInactive}
            >
              4
            </div>
          )}
          {totalPages > 4 && (
            <div
              onClick={() => {
                props.setCurrentPage(5);
                setCurrentPage(5);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 5 ? "0.5" : null,
              }}
              className={currentPage === 5 ? pageNoActive : pageNoInactive}
            >
              5
            </div>
          )}
          {totalPages > 5 && (
            <div
              onClick={() => {
                props.setCurrentPage(6);
                setCurrentPage(6);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 6 ? "0.5" : null,
              }}
              className={currentPage === 6 ? pageNoActive : pageNoInactive}
            >
              6
            </div>
          )}
          {totalPages > 6 && (
            <div
              onClick={() => {
                props.setCurrentPage(7);
                setCurrentPage(7);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 7 ? "0.5" : null,
              }}
              className={currentPage === 7 ? pageNoActive : pageNoInactive}
            >
              7
            </div>
          )}
          {totalPages > 7 && (
            <div
              onClick={() => {
                props.setCurrentPage(8);
                setCurrentPage(8);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 8 ? "0.5" : null,
              }}
              className={currentPage === 8 ? pageNoActive : pageNoInactive}
            >
              8
            </div>
          )}
          {totalPages > 8 && (
            <div
              onClick={() => {
                props.setCurrentPage(9);
                setCurrentPage(9);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 9 ? "0.5" : null,
              }}
              className={currentPage === 9 ? pageNoActive : pageNoInactive}
            >
              9
            </div>
          )}
          {totalPages > 9 && (
            <div
              onClick={() => {
                props.setCurrentPage(10);
                setCurrentPage(10);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 10 ? "0.5" : null,
              }}
              className={currentPage === 10 ? pageNoActive : pageNoInactive}
            >
              10
            </div>
          )}
          <div
            onClick={() => {
              if (currentPage < Math.ceil(totalPages)) {
                props.setCurrentPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage === Math.ceil(totalPages)
                ? lastPageActive
                : lastPageInactive
            }
          >
            <i
              style={{
                opacity: currentPage === Math.ceil(totalPages) ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrow} ${right}`}
            ></i>
          </div>
          <div
            onClick={() => {
              props.setCurrentPage(Math.ceil(totalPages));
              setCurrentPage(Math.ceil(totalPages));
            }}
            className={
              currentPage === Math.ceil(totalPages)
                ? lastPageActive
                : lastPageInactive
            }
          >
            <i
              style={{
                opacity: currentPage === Math.ceil(totalPages) ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrowDouble} ${right}`}
            ></i>
          </div>
        </>
      )}

      {/* ------------------Pagination Part-2 (For More than 10 pages)---------------------- */}

      {/* ------------------Pagination Part-2 (Left part)---------------------- */}

      {totalPages > 10 && (
        <>
          <div
            onClick={() => {
              props.setCurrentPage(1);
              setCurrentPage(1);
            }}
            className={currentPage === 1 ? firstPageActive : firstPageInactive}
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrowDouble} ${left} ${
                currentPage === 1 ? activeStyle : inactiveStyle
              }`}
            ></i>
          </div>
          <div
            onClick={() => {
              if (currentPage > 1) {
                props.setCurrentPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            className={currentPage === 1 ? firstPageActive : firstPageInactive}
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrow} ${left}`}
            ></i>
          </div>

          {
            <div
              onClick={() => {
                props.setCurrentPage(1);
                setCurrentPage(1);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 1 ? "0.5" : null,
              }}
              className={currentPage === 1 ? pageNoActive : pageNoInactive}
            >
              1
            </div>
          }
          {
            <div
              onClick={() => {
                props.setCurrentPage(2);
                setCurrentPage(2);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 2 ? "0.5" : null,
              }}
              className={currentPage === 2 ? pageNoActive : pageNoInactive}
            >
              2
            </div>
          }

          {currentPage < 6 && (
            <div
              onClick={() => {
                props.setCurrentPage(3);
                setCurrentPage(3);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 3 ? "0.5" : null,
              }}
              className={currentPage === 3 ? pageNoActive : pageNoInactive}
            >
              3
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                props.setCurrentPage(4);
                setCurrentPage(4);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 4 ? "0.5" : null,
              }}
              className={currentPage === 4 ? pageNoActive : pageNoInactive}
            >
              4
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                props.setCurrentPage(5);
                setCurrentPage(5);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 5 ? "0.5" : null,
              }}
              className={currentPage === 5 ? pageNoActive : pageNoInactive}
            >
              5
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                props.setCurrentPage(6);
                setCurrentPage(6);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === 6 ? "0.5" : null,
              }}
              className={currentPage === 6 ? pageNoActive : pageNoInactive}
            >
              6
            </div>
          )}

          {/* ------------------Pagination Part-2 (Middle part)---------------------- */}

          {
            <div className=" text-sm">
              &nbsp;...
              {currentPage > 5 && currentPage < totalPages - 4 ? (
                <span>&nbsp;</span>
              ) : null}
            </div>
          }
          {currentPage > 5 && currentPage < totalPages - 4 ? (
            <div
              onClick={() => {
                props.setCurrentPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === currentPage - 1 ? "0.5" : null,
              }}
              className={
                currentPage === currentPage - 1 ? pageNoActive : pageNoInactive
              }
            >
              {currentPage - 1}
            </div>
          ) : (
            <div style={{ color: "transparent" }}>.</div>
          )}
          {currentPage > 5 && currentPage < totalPages - 4 && (
            <div
              onClick={() => {
                props.setCurrentPage(currentPage);
                setCurrentPage(currentPage);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === currentPage ? "0.5" : null,
              }}
              className={
                currentPage === currentPage ? pageNoActive : pageNoInactive
              }
            >
              {currentPage}
            </div>
          )}
          {currentPage > 5 && currentPage < totalPages - 4 && (
            <div
              onClick={() => {
                props.setCurrentPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === currentPage + 1 ? "0.5" : null,
              }}
              className={
                currentPage === currentPage + 1 ? pageNoActive : pageNoInactive
              }
            >
              {currentPage + 1}
            </div>
          )}
          {
            <div className="mr-1 text-sm">
              {currentPage > 5 && currentPage < totalPages - 4 ? (
                <span>&nbsp;</span>
              ) : null}
              ...&nbsp;
            </div>
          }

          {/* ------------------Pagination Part-2 (Right part)---------------------- */}

          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                props.setCurrentPage(totalPages - 5);
                setCurrentPage(totalPages - 5);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages - 5 ? "0.5" : null,
              }}
              className={
                currentPage === totalPages - 5 ? pageNoActive : pageNoInactive
              }
            >
              {totalPages - 5}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                props.setCurrentPage(totalPages - 4);
                setCurrentPage(totalPages - 4);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages - 4 ? "0.5" : null,
              }}
              className={
                currentPage === totalPages - 4 ? pageNoActive : pageNoInactive
              }
            >
              {totalPages - 4}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                props.setCurrentPage(totalPages - 3);
                setCurrentPage(totalPages - 3);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages - 3 ? "0.5" : null,
              }}
              className={
                currentPage === totalPages - 3 ? pageNoActive : pageNoInactive
              }
            >
              {totalPages - 3}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                props.setCurrentPage(totalPages - 2);
                setCurrentPage(totalPages - 2);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages - 2 ? "0.5" : null,
              }}
              className={
                currentPage === totalPages - 2 ? pageNoActive : pageNoInactive
              }
            >
              {totalPages - 2}
            </div>
          )}
          {
            <div
              onClick={() => {
                props.setCurrentPage(totalPages - 1);
                setCurrentPage(totalPages - 1);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages - 1 ? "0.5" : null,
              }}
              className={
                currentPage === totalPages - 1 ? pageNoActive : pageNoInactive
              }
            >
              {totalPages - 1}
            </div>
          }
          {
            <div
              onClick={() => {
                props.setCurrentPage(totalPages);
                setCurrentPage(totalPages);
              }}
              style={{
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                color: props.digitColor,
                opacity: currentPage === totalPages ? "0.5" : null,
              }}
              className={
                currentPage === totalPages ? pageNoActive : pageNoInactive
              }
            >
              {totalPages}
            </div>
          }

          <div
            onClick={() => {
              if (currentPage < totalPages) {
                props.setCurrentPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage === totalPages ? lastPageActive : lastPageInactive
            }
          >
            <i
              style={{
                opacity: currentPage === totalPages ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrow} ${right}`}
            ></i>
          </div>
          <div
            onClick={() => {
              props.setCurrentPage(totalPages);
              setCurrentPage(totalPages);
            }}
            className={
              currentPage === totalPages ? lastPageActive : lastPageInactive
            }
          >
            <i
              style={{
                opacity: currentPage === totalPages ? "0.5" : null,
                borderColor: props.arrowColor,
              }}
              className={`${arrowDouble} ${right} ${
                currentPage === 1 ? activeStyle : inactiveStyle
              }`}
            ></i>
          </div>
        </>
      )}

      {/* ------------------Pagination Completed---------------------- */}
    </div>
  );
}
