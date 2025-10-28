export const runtime = 'edge';

export default function CourseDetailPage({ params }) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#C7044C] mb-2">Course Detail Page</h1>
      <p className="text-gray-700">You are viewing course ID: {id}</p>
    </div>
  );
}
