import React, { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./Components/Pagination/Pagination";
import PostList from "./Components/PostList/PostList";
import qs from "query-string";
import FilterList from "./Components/FilterList/FilterList";
import Clock from "./Components/Clock/Clock";
function App(props) {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  const [filter, setFilter] = useState({
    _page: 1,
  });
  useEffect(() => {
    async function fetchApiList() {
      const queryString = qs.stringify(filter);
      const url = `http://js-post-api.herokuapp.com/api/posts?_limit=10&${queryString}`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      const { data, pagination } = responseJSON;
      setPagination(pagination);
      setList(data);
    }
    fetchApiList();
  }, [filter]);
  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  function handleFilterList(value) {
    console.log(value);
    setFilter({
      ...filter,
      _page: 1,
      q: value,
    });
  }
  return (
    <div className="app">
      <Clock />
      <FilterList handleFilterList={handleFilterList} />
      <PostList list={list} />
      <Pagination pagination={pagination} handlePageChange={handlePageChange} />
    </div>
  );
}
export default App;
