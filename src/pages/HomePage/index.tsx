import { useContext } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { ModalContext } from "../../providers/ModalContext";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <>
      {isModalOpen && <Modal />}

      <Header />
      <main>
        <ProductSection />
      </main>
    </>
  );
};
