
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    
  } from "@/components/ui/pagination";
  
  type PageDetails = {
    currentPage:number;
    setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
    totalPages:number
  }

const PaginationPage = ({currentPage, setCurrentPage,totalPages}:PageDetails) => {
  

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1 );
      };
     
      const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
  return (

<div className="flex justify-center mt-10">
   <Pagination>
<PaginationContent>
<PaginationItem>
 <button className={`p-2 rounded-md ${currentPage === 1 ? 'bg-gray-50' : 'bg-gray-300'}`}
  disabled={currentPage===1} onClick={handlePrevPage}
    >Previous</button>
</PaginationItem>
     

{[...Array(totalPages)].map((_, index) => (
<PaginationItem key={index}>
 <PaginationLink className="cursor-pointer" onClick={() => setCurrentPage(index + 1)}>{index + 1}</PaginationLink>
</PaginationItem>
))}

<PaginationItem>
 <button className={`p-2 rounded-md ${currentPage === totalPages ? 'bg-gray-50' : 'bg-gray-300'}`}
 disabled = {currentPage===totalPages}
 
  onClick={handleNextPage}
       >Next</button>
</PaginationItem>

</PaginationContent>
</Pagination>

    </div>
  )
}

export default PaginationPage