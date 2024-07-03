export default function Gradient() {
  return (
    <div
      className="h-[100vh] absolute overflow-hidden right-0 left-0"
      style={{
        background:
          'linear-gradient(180deg,rgba(18,24,30,0) -18.549815220254256%,#051218 95.51804331448707%)',
      }}
    >
      <div
        className="h-[124px] left-0 opacity-75 overflow-hidden absolute right-0 top-[30px]"
        style={{
          background:
            'linear-gradient(180deg,rgb(8, 24, 34), #081822) 0%,rgba(14,28,34,0) 100%)',
        }}
      ></div>
    </div>
  );
}
