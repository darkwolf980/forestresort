import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="relative flex h-screen items-center justify-center overflow-hidden text-white">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/img/background_v_1_web.webm" type="video/webm" />
            <source src="/img/background_v_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="z-20 flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
          <span className={'text-xl font-bold text-white uppercase'}>Welcome to</span>
          <h1 className="font-modern mb-12 text-4xl leading-18 font-bold tracking-widest md:text-6xl">
            <span className={'text-emerald-400'}>Forest</span> Treetop Holiday Resort
          </h1>
          <Button className="my-4 rounded-none bg-emerald-400 px-8 text-lg font-medium text-black shadow-2xl transition-colors duration-300 hover:bg-emerald-400/80">
            Book Your Stay
          </Button>
        </div>
      </div>
    </>
  );
};
