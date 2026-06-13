"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-cr-blue">
        Something went wrong
      </h1>
      <p className="mt-3 text-gray-600">
        The page could not load. Try refreshing. If the problem persists, restart
        the dev server with{" "}
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">npm run dev</code>.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-cr-orange px-5 py-2.5 font-medium text-white hover:bg-cr-orange/90"
      >
        Try again
      </button>
    </div>
  );
}
