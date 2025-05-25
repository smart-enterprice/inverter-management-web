const StatusBadge = ({ status }) => {
  const colors = {
    HIGH: "bg-red-400 text-white",
    MEDIUM: "bg-yellow-300 text-black",
    LOW: "bg-green-300 text-black",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${colors[status] || "bg-gray-300"}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
