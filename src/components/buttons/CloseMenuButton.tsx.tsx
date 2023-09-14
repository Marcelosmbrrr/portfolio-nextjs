interface IProps {
    onClose: () => void;
}

export function CloseMenuButton({ onClose }: IProps) {
    return (
        <div onClick={onClose} className="w-full flex justify-end items-center gap-5 h-10 border-b border-b-stone-800 dark:border-b-stone-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-cyan-400 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
        </div>
    )
}