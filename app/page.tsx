import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-items justify-between p-12">
      <section id="hero">
        <p className="text-[36px] text-center font-medium">Noteshare </p>
        <p className='text-center text-[24px] font-extralight'>~ Aplikacja umożliwiająca udostępnianie notatek.</p>
        <div className="flex justify-center align-center pt-[15px]">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mr-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d] hover:text-white">Więcej</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Więcej o nas:</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <p className="text-black">Nasza aplikacja umożliwia ci udostępnianie i czytanie notatek uczniów na całym świecie</p>
              </AlertDialogDescription>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-[15px]">Często zadawane pytania :</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
              <AlertDialogTitle className="text-black">Dlaczego dodawanie notatek zajmuje dużo czasu: </AlertDialogTitle>  
                <p className="text-black">Aktualnie używamy firmy hostingowej która oferuje darmowy hosting naszego serwera i jesteśmy ograniczeni z powodu słabej specyfikacji serwera.</p>
              </AlertDialogDescription>
              <AlertDialogDescription>
              <AlertDialogTitle className="text-black">Czy nasza aplikacja jest darmowa? :</AlertDialogTitle>
                  <p className="text-black">Tak nasza aplikacja jest w pełni darmowa.</p>
              </AlertDialogDescription>
              <AlertDialogDescription>
                <AlertDialogTitle className="text-black">Chcesz nas wesprzeć? :</AlertDialogTitle>
                <p className="text-black">Możesz to zrobić tutaj: <a href="https://www.paypal.com/paypalme/Bartosz341" className="text-[#0062ff]"> Paypal</a></p>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-black text-white hover:bg-[#292f3d] hover:text-white">Zrozumiałem</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button asChild variant="outline" className="mr-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d] hover:text-white">
            <Link href={"/addnote"}>Rozpocznij</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
