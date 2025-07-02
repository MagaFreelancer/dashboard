import { X } from "lucide-react";
import { useRef } from "react";
import type { CSSProperties, JSX, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

interface IPropsChildren {
    children: ReactNode;
    onOpen: boolean;
    onClose: () => void;
}

const Modal = ({
    children,
    onClose,
    onOpen,
}: IPropsChildren): JSX.Element | null => {
    const modalRoot = document.getElementById("modal");
    const nodeRef = useRef(null);

    const duration = 50;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
        opacity: 0,
        transform: "scale(0.95)",
    };

    const transitionStyles: Record<string, CSSProperties> = {
        entering: { opacity: 1, transform: "scale(1)" },
        entered: { opacity: 1, transform: "scale(1)" },
        exiting: { opacity: 0, transform: "scale(0.95)" },
        exited: { opacity: 0, transform: "scale(0.95)" },
    };

    if (!modalRoot) return null;

    return createPortal(
        <Transition
            nodeRef={nodeRef}
            in={onOpen}
            timeout={duration}
            unmountOnExit={true}
        >
            {(state) => (
                <div
                    ref={nodeRef}
                    onMouseDown={(e) => {
                        // Закрывать модалку только если клик был по подложке
                        if (e.target === e.currentTarget) onClose();
                    }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3"
                >
                    <div
                        ref={nodeRef}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                        className="relative bg-white max-w-[500px] w-full shadow-lg rounded-[8px] break-words p-3"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 text-gray-500 hover:text-gray-800"
                        >
                            <X />
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </Transition>,
        modalRoot
    );
};

export default Modal;
