import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
  return (
    <>
      <NextTopLoader
        color="#4f46e5"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #4f46e5,0 0 5px #4f46e5"
        zIndex={1600}
        showAtBottom={false}
      />
    </>
  );
};

export default TopLoader;
