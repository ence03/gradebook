const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-black bg-white w-full">
        <thead className="text-left">
          <tr>
            <th className="border border-black px-4 py-2">Students</th>
            <th className="border border-black px-4 py-2">Id Number</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            <td className="border border-black px-4 py-2"></td>
            <td className="border border-black px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
