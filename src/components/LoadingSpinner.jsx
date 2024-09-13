export default function LoadingSpinner({ extraStyles }) {
  return (
    <div
      className={`w-12 h-12 border-4 border-black border-l-transparent border-r-transparent rounded-full animate-loading ${extraStyles}`}
    ></div>
  );
}
