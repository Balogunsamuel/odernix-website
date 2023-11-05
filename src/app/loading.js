import React from "react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={``}>
            <div className={`absolute bg-main h-screen top-0 left-0 w-full z-50`}>
                <div className={`flex`}>
                    <div className={`bg-main h-screen md:w-6/12`}>
                        <div className={`flex bg-orange-400`}>
                            <div className={``}>

                            </div>
                        </div>
                    </div>
                    <div  style={{
                        backgroundImage: `url('/pattern.png')`, // Use the image variable here
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        mixBlendMode: 'color-dodge',
                        opacity: '0.2',
                    }}
                          className="absolute w-auto md:w-6/12 md:min-w-50 md:right-0 h-screen md:min-h-full max-w-none">
                        {/*<Image src={`/img2.png`} width={100} height={100} alt="" className="h-full w-full object-cover" />*/}
                    </div>
                </div>
            </div>

            <p className={`text-white`}>LOADING About</p>
        </div>
    )
}