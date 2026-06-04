export default function StarRating({ rating }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 flex-shrink-0 ${
            star <= Math.floor(rating) ? "text-amber-400" : "text-slate-600"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-sm font-bold text-slate-200 ml-1">{rating}</span>
    </div>
  );
}