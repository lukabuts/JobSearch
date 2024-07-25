function LoadingPulse() {
  return (
    <div className="w-full h-48 bg-gray-200 animate-pulse rounded-xl flex gap-4 p-5">
      <div className="h-full w-20 flex items-center">
        <div className="w-20 h-20 rounded-xl animate-pulse bg-gray-300"></div>
      </div>
      <div className="w-3/4 h-full space-y-4">
        <div className="animate-pulse bg-gray-300  h-10 w-3/4"></div>
        <div className="animate-pulse bg-gray-300 w-full h-24"></div>
      </div>
    </div>
  );
}

export default LoadingPulse;
