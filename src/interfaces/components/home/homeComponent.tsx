import { HomeContent } from "./homeContent/homeContent";


export const HomeComponent = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        // className="rotate-180 absolute  left-0 w-full h-full object-cover -z-20"
        style={{
          filter: "hue-rotate(270deg) saturate(1.5)", // Filter untuk mengubah warna video
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HomeContent />
    </div>
  );
};

// className="absolute inset-0 w-full h-full object-cover"
