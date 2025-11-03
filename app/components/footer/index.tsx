export const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-5 md:py-4 lg:py-6 flex items-center justify-center bg-gray-950">
      <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center text-gray-300 font-mono font-medium">
        <span className="text-lg sm:text-lg  md:text-lg lg:text-lg text-pink-300">
        &copy; 
        </span>
        <span className="text-sm sm:text-base  md:text-base lg:text-base text-pink-300">
          2025
        </span>
        <span className="text-xs sm:text-sm md:text-base lg:text-base">
          Todos os direitos reservados - Desenvolvido com
        </span>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-pink-300 animate-pulse">
          ♡
        </span>
        <span className="text-xs sm:text-sm md:text-base lg:text-base">por Roberta Santos</span>
      </span>
    </footer>
  );
};
