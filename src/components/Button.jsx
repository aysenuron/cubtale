export default function Button({ children, colorFrom, colorTo }) {
  return (
    <button
      className={`font-extrabold z-10 bg-gradient-to-b from-[${colorFrom}] to-[${colorTo}] hover:opacity-90 text-white cursor-pointer text-xl py-4 px-12 rounded-full shadow-xl hover:shadow-none transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
    >
      {children}
    </button>
  );
}
