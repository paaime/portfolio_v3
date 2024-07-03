export default function Granular() {
  return (
    <div
      className="absolute opacity-15 h-[100vh]"
      style={{ inset: '0 0 -100px' }}
    >
      <div
        className="w-full h-full opacity-[0.4]"
        style={{
          backgroundSize: '128px',
          backgroundRepeat: 'repeat',
          backgroundImage: 'url(/images/granular.png)',
        }}
      ></div>
    </div>
  );
}
