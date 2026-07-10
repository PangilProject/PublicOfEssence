"use client";

import React, { useEffect, type MouseEvent } from "react";
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

interface ModalProps {
  className?: string;
  onClose: (e?: unknown) => void;
  maskClosable?: boolean;
  closable?: boolean;
  visible: boolean;
}

function Modal({ className, onClose, maskClosable, closable, visible }: ModalProps) {
  const onMaskClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // localStorage는 브라우저 전용 API — 프리렌더(SSR) 중 접근하면 크래시하므로 useEffect 안에서만 읽는다
  useEffect(() => {
    const visitedBeforeDate = localStorage.getItem("VisitCookie");
    const visitedNowDate = String(new Date().getDate());

    if (visitedBeforeDate !== null) {
      if (visitedBeforeDate === visitedNowDate) {
        localStorage.removeItem("VisitCookie");
        onClose(true);
      }
      if (visitedBeforeDate !== visitedNowDate) {
        onClose(false);
      }
    }
  }, [onClose]);

  const Dayclose = (e: MouseEvent) => {
    if (onClose) {
      onClose(e);

      const expiry = new Date();
      const expiryDate = expiry.getDate() + 1;
      localStorage.setItem("VisitCookie", String(expiryDate));
    }
  };

  const close = (e: MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  const handleClickLink = () => {
    window.open("https://linktr.ee/ESSENCE_since2016");
  };

  return (
    <div>
      <ModalOverlay $visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : undefined}
        tabIndex={-1}
        $visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
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

export default React.memo(Modal);
