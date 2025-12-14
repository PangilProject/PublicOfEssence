import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MenuItem } from "../Header/styles";
import {
  Close,
  CloseStyle,
  ImgStyle,
  ModalInner,
  ModalInner2,
  ModalOverlay,
  ModalWrapper,
} from "./styles";

function Modal({ className, onClose, maskClosable, closable, visible }) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const VISITED_BEFORE_DATE = localStorage.getItem("VisitCookie");
  const VISITED_NOW_DATE = Math.floor(new Date().getDate());

  useEffect(() => {
    if (VISITED_BEFORE_DATE !== null) {
      if (VISITED_BEFORE_DATE === VISITED_NOW_DATE) {
        localStorage.removeItem("VisitCookie");
        onClose(true);
      }
      if (VISITED_BEFORE_DATE !== VISITED_NOW_DATE) {
        onClose(false);
      }
    }
  }, [VISITED_BEFORE_DATE, VISITED_NOW_DATE, onClose]);

  const Dayclose = (e) => {
    if (onClose) {
      onClose(e);

      const expiry = new Date();
      const expiryDate = expiry.getDate() + 1;
      localStorage.setItem("VisitCookie", expiryDate);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const handleClickLink = () => {
    window.open("https://linktr.ee/ESSENCE_since2016");
  };

  return (
    <div>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <ModalInner2>
            <ImgStyle>
              <h2>Essence LinkTree</h2>
              <MenuItem
                onClick={handleClickLink}
                style={{ margin: "20px 0px 0px 0px" }}
              >
                보러 가기
              </MenuItem>
            </ImgStyle>
            {closable && (
              <CloseStyle>
                <Close className="modal-close" onClick={Dayclose}>
                  오늘 하루 닫기
                </Close>
                <Close className="modal-close" onClick={close}>
                  닫기
                </Close>
              </CloseStyle>
            )}
          </ModalInner2>
        </ModalInner>
      </ModalWrapper>
    </div>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

export default React.memo(Modal);
