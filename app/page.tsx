import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-items justify-between p-12">
      <section id="hero">
        <p className="text-[36px] text-center">Noteshare </p>
        <p className='text-center text-[24px]'>~ App where you can share your notes</p>
        <div className="flex justify-center align-center pt-[15px]">
          <Button asChild className="mr-[10px]">
            <Link href={"/Readmore"}>Read More</Link>
          </Button>
          <Button asChild>
            <Link href={"/GetStarted"}>Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
