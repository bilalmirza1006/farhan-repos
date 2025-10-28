export const runtime = 'edge';

export default function ProgramDetailPage({ params }) {
  const { programId } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#C7044C] mb-2">Program Detail Page</h1>
      <p className="text-gray-700">You are viewing program ID: {programId}</p>
    </div>
  );
}
