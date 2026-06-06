import AddressGenerator from './components/AddressGenerator';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col items-center justify-start px-4 py-12 sm:py-20">
      <AddressGenerator />
    </div>
  );
}
