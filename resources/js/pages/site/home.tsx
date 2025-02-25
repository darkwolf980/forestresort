import Logo from '@/components/site/Logo';
import { Head, Link } from '@inertiajs/react';

const Home = () => {
    return (
        <>
            <Head title={'Forest Treetop Holiday Resort'} />
            <div className={'absolute top-0 right-0 bottom-auto left-0 z-50 w-full'}>
                {/*Top Nav section*/}
                <div className={'relative z-40 flex w-full items-center justify-between py-[0.4em] md:px-[0.6em] lg:px-[2em]'}>
                    <div className={'flex flex-1 flex-row items-center justify-start'}>
                        <div
                            className={
                                'fixed z-10 flex cursor-pointer flex-row items-center justify-center px-[1em] py-[0.6em] font-[400] text-nowrap text-white md:px-5 md:py-4'
                            }
                        >
                            <img
                                className={'pointer-events-none relative z-[5] mr-3 inline-block w-[1em] max-w-full select-none'}
                                src={'./img/menu.svg'}
                                alt={''}
                            />
                            <div className={'pointer-events-none relative z-10 font-[0.9em]'}>Menu</div>
                            <div className={'absolute inset-0 z-[1] rounded-4xl bg-(--black-3) opacity-0'}></div>
                        </div>
                    </div>
                    <div className={'flex flex-1 flex-row items-center justify-center'}>
                        <div className={'hidden w-[6.5em] items-center justify-end opacity-50 md:flex'}>
                            <div className={'text-[0.8em] tracking-[1em] text-white md:block'}>2024</div>
                        </div>
                        <Link className={'relative z-10 mx-[2.5em] inline-block max-w-full'} href={route('home')}>
                            <Logo className={'inline-block w-[3.8em] max-w-none fill-emerald-400 align-middle select-none'} />
                        </Link>
                        <div className={'hidden w-[6.5em] items-center justify-start opacity-50 md:flex'}>
                            <div className={'mx-[0.2em] h-[1em] w-[1em] bg-[url(/img/star.svg)] bg-cover bg-[50%] bg-no-repeat'}></div>
                            <div className={'mx-[0.2em] h-[1em] w-[1em] bg-[url(/img/star.svg)] bg-cover bg-[50%] bg-no-repeat'}></div>
                            <div className={'mx-[0.2em] h-[1em] w-[1em] bg-[url(/img/star.svg)] bg-cover bg-[50%] bg-no-repeat'}></div>
                            <div className={'mx-[0.2em] h-[1em] w-[1em] bg-[url(/img/star.svg)] bg-cover bg-[50%] bg-no-repeat'}></div>
                        </div>
                    </div>
                    <div className={'flex flex-1 flex-row items-center justify-end'}>
                        <Link
                            className={
                                'fixed z-10 flex max-w-full flex-row items-center justify-center px-[1em] py-[0.6em] font-[400] text-nowrap text-white md:px-[1.2em] md:py-[1em]'
                            }
                            href={'#booking.com'}
                        >
                            <div className={'relative z-10 text-[0.9em]'}>Booking</div>
                            <img
                                src={'/img/booking.svg'}
                                className={'pointer-events-none relative z-[5] ml-[0.7em] inline-block w-[1em] max-w-full select-none'}
                                alt={''}
                            ></img>
                            <div className={'absolute inset-0 z-1 rounded-4xl bg-(--black-3) opacity-0'}></div>
                        </Link>
                    </div>
                </div>

                {/*Bottom Nav section*/}
                <div
                    className={
                        'relative z-10 flex w-full max-w-[100vw] justify-start overflow-auto border-t border-solid border-white/30 md:justify-center md:overflow-hidden'
                    }
                >
                    <Link
                        className={
                            'relative z-10 flex h-[5em] max-w-full min-w-auto flex-1 flex-col items-center justify-center py-[1.5em] text-center text-[0.7em] font-[500] tracking-[0.1em] text-white uppercase md:min-w-[11.5em] md:flex-none md:px-[2em]'
                        }
                        href={'#'}
                    >
                        <div>Rooms</div>
                    </Link>
                    <Link
                        className={
                            'relative z-10 flex h-[5em] max-w-full min-w-auto flex-1 flex-col items-center justify-center py-[1.5em] text-center text-[0.7em] font-[500] tracking-[0.1em] text-white uppercase md:min-w-[11.5em] md:flex-none md:px-[2em]'
                        }
                        href={'#'}
                    >
                        <div>Food</div>
                    </Link>
                    <Link
                        className={
                            'relative z-10 flex h-[5em] max-w-full min-w-auto flex-1 flex-col items-center justify-center py-[1.5em] text-center text-[0.7em] font-[500] tracking-[0.1em] text-white uppercase md:min-w-[11.5em] md:flex-none md:px-[2em]'
                        }
                        href={'#'}
                    >
                        <div>Safari</div>
                    </Link>
                    <Link
                        className={
                            'relative z-10 flex h-[5em] max-w-full min-w-auto flex-1 flex-col items-center justify-center py-[1.5em] text-center text-[0.7em] font-[500] tracking-[0.1em] text-white uppercase md:min-w-[11.5em] md:flex-none md:px-[2em]'
                        }
                        href={'#'}
                    >
                        <div>Contact</div>
                    </Link>
                    <div className={'absolute bottom-0 z-10 h-[1px] w-full'}></div>
                    <div className={'absolute bottom-0 h-[1px] w-full bg-[#ffffff4d]'}></div>
                </div>

                {/*Menu section*/}
                <div className={'fixed inset-0 z-[999] hidden overflow-hidden'}>
                    <div className={'absolute inset-0 z-20 flex h-full w-full justify-between overflow-auto lg:flex-wrap lg:overflow-auto'}>
                        <div
                            className={
                                'absolute top-[1em] left-[1.2em] z-[100] cursor-pointer touch-manipulation text-[1.5em] text-black md:top-[1.7em] md:left-[6vw] lg:top-[6vh]'
                            }
                        >
                            <div className={'relative flex h-[1.7em] w-[1.7em] flex-col items-center justify-center'}>
                                <img
                                    className={'inline-block aspect-square w-[0.5em] max-w-full select-none'}
                                    src={'/img/close-btn.svg'}
                                    alt={'close btn'}
                                />
                                <div className={'absolute h-full w-full rounded-full border-[1px] border-solid border-white'}></div>
                            </div>
                        </div>
                        <div className={'absolute inset-0 z-[2] h-full w-full overflow-hidden md:w-[67%]'}>
                            <div className={'absolute inset-0 z-[4] bg-[#0d2727] opacity-80 mix-blend-multiply'}></div>
                            <img
                                src={'/img/menu_background.jpg'}
                                alt={'menu background'}
                                className={'absolute inset-0 z-[2] inline-block h-full w-full object-cover select-none'}
                            />
                        </div>
                        <div className={'w-full md:w-[66%]'}>
                            <div className={'relative z-10 flex h-auto w-full flex-wrap items-stretch justify-between md:h-full'}></div>
                        </div>
                        <div></div>
                    </div>
                    <div className={'absolute inset-0 z-[3] h-full w-full bg-[#3e4b48]'}></div>
                </div>
                <div className={'absolute inset-0 z-[1] blur-sm'}>
                    <div
                        className={
                            "after:content-[' '] after:content-[' '] absolute top-0 right-auto bottom-auto left-0 after:clear-both after:table"
                        }
                    ></div>
                </div>
                <div></div>
            </div>
        </>
    );
};
export default Home;
