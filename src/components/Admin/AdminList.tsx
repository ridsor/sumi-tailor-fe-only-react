export default () => {
  return (
    <div className="w-full min-w-fit overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <td width={30} className="font-semibold">
              No
            </td>
            <td className="font-semibold py-1">Nama</td>
            <td className="font-semibold">Email</td>
            <td className="font-semibold">Terakhir Aktif</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">1</td>
            <td>Ryan</td>
            <td>ryan@gmail.com</td>
            <td>Aktif</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
