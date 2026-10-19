export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-slate-200"></div>
          <div className="h-4 w-3 rounded bg-slate-200"></div>
          <div className="h-4 w-16 rounded bg-slate-200"></div>
          <div className="h-4 w-3 rounded bg-slate-200"></div>
          <div className="h-4 w-32 rounded bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="aspect-950/700 w-full rounded-2xl bg-slate-200"></div>
          </div>

          <div className="flex flex-col lg:col-span-6">
            <div className="h-4 w-28 rounded bg-slate-200"></div>

            <div className="mt-3 h-9 w-3/4 rounded-lg bg-slate-200"></div>

            <div className="mt-4 flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="h-4 w-20 rounded bg-slate-200"></div>
              <div className="h-4 w-24 rounded bg-slate-200"></div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="h-4 w-full rounded bg-slate-200"></div>
              <div className="h-4 w-5/6 rounded bg-slate-200"></div>
            </div>

            <div className="mt-7">
              <div className="h-10 w-36 rounded-lg bg-slate-200"></div>
            </div>

            <div className="mt-7">
              <div className="h-4 w-36 rounded bg-slate-200"></div>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="h-16 rounded-xl bg-slate-200"></div>
                <div className="h-16 rounded-xl bg-slate-200"></div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="h-11 w-full rounded-xl bg-slate-200 sm:w-32"></div>
              <div className="h-11 w-full rounded-xl bg-slate-200 sm:w-36"></div>
              <div className="h-11 w-full rounded-xl bg-slate-200 sm:w-36"></div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="h-10 rounded-xl bg-slate-200"></div>
              <div className="h-10 rounded-xl bg-slate-200"></div>
              <div className="h-10 rounded-xl bg-slate-200"></div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="max-w-4xl space-y-4">
            <div className="h-7 w-52 rounded-lg bg-slate-200"></div>
            <div className="h-4 w-full rounded bg-slate-200"></div>
            <div className="h-4 w-full rounded bg-slate-200"></div>
            <div className="h-4 w-2/3 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}