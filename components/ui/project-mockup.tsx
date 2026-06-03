/* Lightweight CSS/SVG mockups shown at the top of each project card,
   echoing the analytics-dashboard vibe from the reference. */

export function ProjectMockup({ visual }: { visual: 'erp' | 'dashboard' | 'mobile' }) {
  if (visual === 'erp') return <ErpMockup />
  if (visual === 'mobile') return <MobileMockup />
  return <DashboardMockup />
}

function ErpMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-t-2xl bg-slate-50">
      {/* sidebar */}
      <div className="flex w-1/4 flex-col gap-2 bg-primary p-3">
        <div className="h-2 w-3/4 rounded bg-white/80" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-1.5 w-full rounded bg-white/30" />
        ))}
      </div>
      {/* main */}
      <div className="flex-1 p-3">
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded bg-white p-1.5 shadow-sm">
              <div className="h-1 w-2/3 rounded bg-slate-200" />
              <div className="mt-1 h-2 w-1/2 rounded bg-primary/70" />
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1.5">
          <div className="flex h-12 flex-1 items-end gap-1 rounded bg-white p-2 shadow-sm">
            {[5, 8, 6, 10, 7, 11].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-sky" style={{ height: `${h * 6}%` }} />
            ))}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded bg-white shadow-sm">
            <div className="h-7 w-7 rounded-full border-4 border-primary border-r-sky" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-t-2xl bg-white">
      <div className="w-1/5 bg-slate-100 p-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="mb-1.5 h-1.5 w-full rounded bg-slate-300/70" />
        ))}
      </div>
      <div className="flex-1 p-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex h-14 items-end gap-1 rounded bg-slate-50 p-2">
            {[6, 9, 5, 11, 8].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h * 7}%` }} />
            ))}
          </div>
          <div className="flex h-14 items-end gap-1 rounded bg-slate-50 p-2">
            {[7, 5, 9, 6, 10].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-sky" style={{ height: `${h * 7}%` }} />
            ))}
          </div>
          <div className="col-span-2 h-12 rounded bg-gradient-to-r from-ice to-bg-blue p-2">
            <div className="h-1.5 w-1/3 rounded bg-primary/40" />
            <div className="mt-2 h-1 w-2/3 rounded bg-sky/50" />
            <div className="mt-1.5 h-1 w-1/2 rounded bg-sky/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 rounded-t-2xl bg-gradient-to-br from-primary to-sky-deep p-4">
      {[0, 1].map((p) => (
        <div key={p} className="h-full w-16 rounded-lg bg-white p-1.5 shadow-lg sm:w-20">
          <div className="h-1 w-1/2 rounded bg-slate-200" />
          {p === 0 ? (
            <>
              <div className="mt-1.5 h-3 w-2/3 rounded bg-primary/70" />
              <div className="mt-2 flex items-end gap-0.5">
                {[6, 9, 5, 11, 7, 10].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-sky" style={{ height: `${h * 2}px` }} />
                ))}
              </div>
            </>
          ) : (
            <div className="mt-1.5 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-2 w-full rounded bg-slate-100" />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
