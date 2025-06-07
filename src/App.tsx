export function App() {
  const sentence = 'Clean code always looks like it was written by someone who cares';

  return (
    <main className="flex place-self-center place-content-center flex-wrap h-full w-5xl">
      <div>
        {sentence.split(' ').map(word => (
          <span key={crypto.randomUUID()} className="m-2 text-3xl">
            {word.split('').map(letter => (
              <span key={crypto.randomUUID()}>{letter}</span>
            ))}
          </span>
        ))}
      </div>
    </main>
  );
}
