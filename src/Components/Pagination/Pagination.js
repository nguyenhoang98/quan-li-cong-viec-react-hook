import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {};

function Pagination(props) {
  const { handlePageChange } = props;
  const { pagination } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  return (
    <div>
      <button onClick={() => handlePageChange(_page - 1)} disabled={_page <= 1}>
        Prev
      </button>
      <button
        onClick={() => handlePageChange(_page + 1)}
        disabled={_page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
