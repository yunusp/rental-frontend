import Head from 'next/head';

export default function FourOhFour() {
  return (<>
    <Head><title>Rental - 🙁</title></Head>
    <div className="h-full min-h-screen pb-2">
      <div className="flex pt-8 items-center h-screen text-8xl font-bold flex-col">
        <div>404</div>
        <div>Not Found</div>
        <div className='mt-4 text-3xl'>That's all we know.</div>
        <div className='mt-8 text-8xl'>🥺</div>
      </div>
    </div>
  </>);
}