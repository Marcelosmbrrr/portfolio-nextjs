import * as React from 'react';

interface IProps {
    images: string[];
}

export function Carousel({ images }: IProps) {

    const [currentImage, setCurrentImage] = React.useState<number>(1);

    function nextImage() {
        if (images.length > 1) {
            // Check if is the last image
            if (images.length > currentImage) {
                setCurrentImage(currentImage + 1)
            }
        }
    }

    function prevImage() {
        if (images.length > 1) {
            // Check if is the first image
            if (currentImage > 1) {
                setCurrentImage(currentImage - 1)
            }
        }
    }

    if (images) {
        return (
            <div className='flex my-5 h-[450px]'>

                <div className='flex items-center justify-center px-2'>
                    <button onClick={prevImage} type="button" className="cursor-pointer" data-carousel-prev>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                </div>

                <div className='grow transition-all' style={{ backgroundImage: "url(/images/projects/" + images[currentImage - 1] + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    {/* image container */}
                </div>

                <div className='flex items-center justify-center px-2'>
                    <button onClick={nextImage} type="button" className="cursor-pointer" data-carousel-next>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </div>

            </div>

        )
    }

}