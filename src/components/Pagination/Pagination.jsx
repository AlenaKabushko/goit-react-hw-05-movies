import TrendList from 'components/TrendList/TrendList';
import ReactPaginate from 'react-paginate';

function PaginatedItems({ itemsPerPage, movies, allPage, onLoadMore }) {
  const itemOffset = 0;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = allPage;

  return (
    <>
      <TrendList movies={currentItems} />
      <div className="paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={onLoadMore}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
