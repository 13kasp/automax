import { useModal } from "../context/ModalContext";

export default function Modal() {
  const { open, modalChildren } = useModal();

  return (
    <div
      className={`fixed inset-0 justify-center items-center z-[9999] ${
        open ? "visible bg-black/50" : "hidden"
      }`}
    >
      <div
        className={`absolute top-[50%] left-[50%] bg-white h-fit max-h-[92%] w-[90%] max-w-[700px] -translate-x-[50%] -translate-y-[50%] rounded-xl overflow-y-auto ${
          open ? "animate-modalOpen" : "animate-modalClose"
        }`}
      >
        {modalChildren}
      </div>
    </div>
  );
}
