import Head from 'next/head';
import Link from 'next/link'

export default function FourOhFour() {
  return (<>
    <Head><title>Rental - :(</title></Head>
    <div className="h-full min-h-screen pb-2">
      <div className="flex pt-8 items-center h-screen text-8xl font-bold flex-col">
        <div>404</div>
        <div>Not found</div>
        <div className='mt-4 text-3xl'>That's all we know :(</div>
      </div>
    </div>
  </>);
}