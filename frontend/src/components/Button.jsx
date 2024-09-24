export function ButtonRotateBorder({ children }) {
  return (
    <button className="btn relative inline-flex overflow-hidden rounded-xl p-px">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#70f0b0_0%,#03964d_50%,#0adb73_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-base-200 px-4 py-2 text-sm font-medium text-current backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
