const Pagination = ({totalPages, handleClick, Page})=> {
 const pages = [...Array(totalPages).keys()].map((numbers) => numbers + 1);

 return (

   <div className="pagination">
    <button
    onClick={() => handleClick(Page - 1)}
    disabled={Page === 1}
    >
    Prev
    </button>
    {pages.map((number) => (
      <button
      key={number}
      onClick={() => handleClick(number)}
      className={`${Page === number && "active"}`}
    >
      {number}
    </button>
    ))}
    <button
    onClick={() => handleClick(Page + 1)}
    disabled={Page === totalPages}
    >
    Next
    </button>
   </div>
 );
};

export default Pagination;