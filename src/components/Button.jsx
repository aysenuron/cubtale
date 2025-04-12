export default function Button({ children }) {
  return (
    <a href="https://www.cubtale.com/pages/scheduling-page" target="_blank">
      <button
        className={
          "font-extrabold z-10 bg-gradient-to-b from-[#F78E88] to-[#D76D6D] hover:opacity-90 text-white hover:cursor-pointer text-xl py-4 px-12 rounded-full shadow-xl hover:shadow-none transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        }
      >
        {children}
      </button>
    </a>
  );
}
