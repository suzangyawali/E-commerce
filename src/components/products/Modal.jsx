import { RxCross1 } from "react-icons/rx";
import Title from "../Title";


// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen = false, setIsOpen, label, body, actions }) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="h-svh w-full bg-gray-200 fixed left-0 top-0 z-50 bg-opacity-50 flex items-center justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 rounded-3xl min-h-40 px-12 py-10 bg-white">
          <div className="flex items-center justify-between">
            <div>  <Title  label={label} /></div>
          
            <button onClick={() => setIsOpen(false)}>
              <RxCross1 />
            </button>
          </div>

          <div className="py-5">{body}</div>

          <div className="flex justify-between">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;