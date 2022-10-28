import * as C from "./styles";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRigthClick } = props;

  return (
    <C.Pagination>
      <C.Button onClick={onLeftClick}>
        <BsFillArrowLeftCircleFill className="button-click" />
      </C.Button>
      <C.InfoPages>
        {page} de {totalPages}
      </C.InfoPages>
      <C.Button onClick={onRigthClick}>
        <BsFillArrowRightCircleFill className="button-click" />
      </C.Button>
    </C.Pagination>
  );
};
