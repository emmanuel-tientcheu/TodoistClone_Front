import { useCallback, useMemo } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash  } from "react-icons/fa";

export const usePassword = () => {
    const [show, setShow] = useState(false);

    const toggleShow = useCallback(() => {
        setShow((previousState) => !previousState);
      }, []);
    
    return {
        show,
        toggleShow,
        component: show ? <FaEye onClick={toggleShow}/> : <FaEyeSlash onClick={toggleShow}/>
    };
}