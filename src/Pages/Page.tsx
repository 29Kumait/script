import React, { useState } from "react";
import Collapsing from "../Components/UI/Collapsing";
import ItemsCord from "../Components/UI/ItemsCord";
import { Modal } from "../Components/UI/Modal.tsx";
import ScrollableMenu from "../Components/UI/ScrollableMenu.tsx";

const Page: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <ItemsCord />
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ScrollableMenu />

      <Collapsing title="Collapsing Component">children prop</Collapsing>
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <p>This is the modal content!</p>
        </Modal>
      </div>
    </div>
  );
};

export default Page;
