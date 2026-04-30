// import  { useEffect, useState } from "react";

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// const DataFetcher = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const [search, setSearch] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   // 🔍 Search
//   const filteredData = data.filter(
//     (post) =>
//       post.title.toLowerCase().includes(search.toLowerCase()) ||
//       post.body.toLowerCase().includes(search.toLowerCase()),
//   );

//   // ↕️ Sort
//   const sortedData = [...filteredData].sort((a, b) =>
//     sortOrder === "asc" ? a.id - b.id : b.id - a.id,
//   );

//   // 🔢 Pagination
//   const lastIndex = currentPage * rowsPerPage;
//   const firstIndex = lastIndex - rowsPerPage;
//   const currentRows = sortedData.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(sortedData.length / rowsPerPage);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, rowsPerPage]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Posts Dashboard</h2>

//       {/* Controls */}
//       {/* <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}> */}
//       <div className="controls">
//         <input
//           placeholder="Search posts..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="asc">Sort ID ↑</option>
//           <option value="desc">Sort ID ↓</option>
//         </select>

//         <select onChange={(e) => setRowsPerPage(Number(e.target.value))}>
//           <option value={5}>5 rows</option>
//           <option value={10}>10 rows</option>
//           <option value={20}>20 rows</option>
//           <option value={50}>50 rows</option>
//           <option value={100}>100 rows </option>
//         </select>
//       </div>

//       {/* Table */}
//       <table
//         className="table"
//         border="1"
//         cellPadding="10"
//         cellSpacing="0"
//         width="100%"
//         style={{ borderCollapse: "collapse" }}
//       >
//         <thead>
//           <tr style={{ background: "#f0f0f0" }}>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRows.map((post) => (
//             <tr
//               key={post.id}
//               style={{ cursor: "pointer" }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.background = "#fafafa")
//               }
//               onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
//             >
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination" style={{ marginTop: "10px" }}>
//         <button
//           onClick={() => setCurrentPage((p) => p - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//         <span style={{ margin: "0 10px" }}>
//           Page {currentPage} of {totalPages}
//         </span>

//         <button
//           onClick={() => setCurrentPage((p) => p + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataFetcher;


import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://dummyjson.com/comments');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setComments(data.comments);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading comments...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Comments ({comments.length})</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {comment.user.fullName.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">{comment.user.fullName}</p>
                <p className="text-sm text-gray-500">@{comment.user.username}</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">"{comment.body}"</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Post ID: {comment.postId}</span>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>{comment.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;