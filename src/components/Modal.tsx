import { GrClose } from "react-icons/gr"

interface ModalProps {
    close: () => void
}

export default function Modal({close}: ModalProps) {
    return (
        <div className="fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center">
            <div className="bg-[white] p-5 rounded shadow-lg relative">
                <p className="text-darkGreen">سفارشتون با موفقیت ثبت شد</p>
                <button className="absolute right-2 top-2 text-[gray] hover:text-darkGreen" onClick={close}><GrClose/></button>
            </div>
        </div>
    )
}