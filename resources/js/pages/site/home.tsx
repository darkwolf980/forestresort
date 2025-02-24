import Logo from '@/components/site/Logo';
import { Head, Link } from '@inertiajs/react';

const Home = () => {
    return (
        <>
            <Head title={'Forest Treetop Holiday Resort'} />
            <div className={'absolute top-0 right-0 bottom-auto left-0 z-50 w-full'}>
                <div className={'relative z-40 flex w-full items-center justify-between px-12 py-4'}>
                    <div className={'flex flex-1 flex-row items-center justify-start'}>
                        <div
                            className={
                                'fixed z-10 flex cursor-pointer flex-row items-center justify-center px-5 py-4 font-[400] text-nowrap text-white'
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
                        <div className={'flex w-[6.5em] items-center justify-end opacity-50'}>
                            <div className={'text-[0.8em] tracking-[1em] text-white'}>2024</div>
                        </div>
                        <Link className={'relative z-10 mx-[2.5em] inline-block max-w-full'} href={route('home')}>
                            <Logo className={'inline-block w-[3.8em] max-w-none fill-emerald-400 align-middle select-none'} />
                        </Link>
                        <div className={'flex w-[6.5em] items-center justify-start opacity-50'}>
                            <div className={"mx-[0.2em] h-[1em] w-[1em] bg-[url('./img/star.svg')] bg-cover bg-[50%] bg-no-repeat"}></div>
                            <div className={"mx-[0.2em] h-[1em] w-[1em] bg-[url('./img/star.svg')] bg-cover bg-[50%] bg-no-repeat"}></div>
                            <div className={"mx-[0.2em] h-[1em] w-[1em] bg-[url('./img/star.svg')] bg-cover bg-[50%] bg-no-repeat"}></div>
                            <div className={"mx-[0.2em] h-[1em] w-[1em] bg-[url('./img/star.svg')] bg-cover bg-[50%] bg-no-repeat"}></div>
                        </div>
                    </div>
                    <div className={'flex flex-1 flex-row items-center justify-end'}>
                        <Link
                            className={
                                'fixed z-10 flex max-w-full flex-row items-center justify-center px-[1.2em] py-[1em] font-[400] text-nowrap text-white'
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
            </div>
        </>
    );
};
export default Home;
