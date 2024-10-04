import react from "react";
import { Button } from "@nextui-org/react";

const Pagination = ({ totalPost, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
