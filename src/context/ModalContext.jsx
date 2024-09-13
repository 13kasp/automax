import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState("");

  function handleModalToggle(shouldBeOpen) {
    shouldBeOpen
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
    setOpen(shouldBeOpen);
  }

  function handleSetModalChildren(children) {
    setModalChildren(children);
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        onModalToggle: handleModalToggle,
        modalChildren,
        onSetModalChildren: handleSetModalChildren,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext was used outside of the modal provider");
  return context;
}
