import { useEffect } from "react";


const useTitle = (title) => {
     return (
          useEffect(()=>{
               document.title = `${title} | Teddy World`
          },[title])
     );
};

export default useTitle;