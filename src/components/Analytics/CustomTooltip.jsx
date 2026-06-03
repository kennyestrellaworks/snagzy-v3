export const CustomTooltip = ({ active, payload, label, prefix = "" }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-sm">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p
          key={i}
          style={{ color: p.color }}
          className="flex items-center gap-1"
        >
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{ backgroundColor: p.color }}
          />
          {p.name}:{" "}
          <span className="font-semibold ml-1">
            {prefix}
            {typeof p.value === "number"
              ? p.value.toLocaleString("en-US", {
                  minimumFractionDigits: p.name
                    ?.toLowerCase()
                    .includes("revenue")
                    ? 2
                    : 0,
                })
              : p.value}
          </span>
        </p>
      ))}
    </div>
  );
};
