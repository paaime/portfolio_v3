import Image from 'next/image';

export default function LightSource() {
  return (
    <div
      className="mix-blend-color-dodge opacity-50 absolute h-[100vh]"
      style={{
        inset: '0 -96px',
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          className="block w-full h-full object-center object-fill"
          src="/images/light-source.png"
          height={'100'}
          width={'100'}
          alt="light source"
        />
      </div>
    </div>
  );
}
