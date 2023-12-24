"use client";

import { Modal } from "antd";
import React, { ReactNode } from "react";

interface GlobalModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title: ReactNode;
  width: number | string;
}

const GlobalModal: React.FC<GlobalModalProps> = ({
  open,
  setOpen,
  children,
  title,
  width,
}) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={width}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default GlobalModal;
