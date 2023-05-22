import Card from './Card';

export default function Results({results}) {
  return (
    <div className=' p-5 sm:grid sm:place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
}
