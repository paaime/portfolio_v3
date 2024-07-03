export default function Stars() {
  return (
    <div className="flex justify-center absolute w-full h-full ">
      <div
        className="absolute w-full max-w-[1000px] h-full"
        style={{
          backgroundSize: '100% 100%',
          imageRendering: 'pixelated',
          backgroundImage: "url('images/stars.svg')",
        }}
      ></div>
    </div>
  );
}
