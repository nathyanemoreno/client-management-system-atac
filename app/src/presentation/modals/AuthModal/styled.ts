import styled from "styled-components";
import { Card } from "~/presentation/components/Card";

const ModalOverlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)" /* Semi-transparent black overlay */,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9,
});

const Modal = styled(Card)({
  width: "500px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
});

export default { Modal, ModalOverlay };
