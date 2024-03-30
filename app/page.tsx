import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-items justify-between p-12">
      <section id="hero">
        <p className="text-[36px] text-center font-medium">Noteshare </p>
        <p className='text-center text-[24px] font-extralight'>~ App where you can share your notes</p>
        <div className="flex justify-center align-center pt-[15px]">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mr-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d] hover:text-white">Read More</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Read More about us</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <p className="text-black">This App let you share and read notes from other students around a world!</p>
              </AlertDialogDescription>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-[15px]">Frequently Asked Questions :</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
              <AlertDialogTitle className="text-black">Why it&apos;s taking so long to create new notes :</AlertDialogTitle>  
                <p className="text-black">We are using free hosting provider which are the reason for slow upload speeds</p>
              </AlertDialogDescription>
              <AlertDialogDescription>
              <AlertDialogTitle className="text-black">Is it free to use? :</AlertDialogTitle>
                  <p className="text-black">Yes app and notes are completly free to use.</p>
              </AlertDialogDescription>
              <AlertDialogDescription>
                <AlertDialogTitle className="text-black">Want to support us? :</AlertDialogTitle>
                <p className="text-black">You can support us here : <a href="https://www.paypal.com/paypalme/Bartosz341" className="text-[#0062ff]"> Paypal</a></p>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-black text-white hover:bg-[#292f3d] hover:text-white">Got it</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button asChild variant="outline" className="mr-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d] hover:text-white">
            <Link href={"/addnote"}>Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
