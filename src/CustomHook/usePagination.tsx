import  { useState } from 'react'

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    return { currentPage, setCurrentPage,totalPages,setTotalPages };
}