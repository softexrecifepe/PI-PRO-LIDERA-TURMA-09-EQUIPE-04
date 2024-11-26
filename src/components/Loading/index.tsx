
export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-t-primary-02 border-gray-300 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700">Carregando...</p>
      </div>
    </div>
  );
};


