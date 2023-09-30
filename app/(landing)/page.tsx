import {Button} from "@/components/ui/button";
import Link from "next/link"

 const LandingPage = () => {
    return(
        <div>
        Landing page (Unprotected)
        <div>
            <Link href="/sign-in">
            <Button>
                Login
            </Button>
            </Link>
            <Link href="/sign-up">
            <Button>
                Registrar
            </Button>
            </Link>
        </div>
        </div>
)}

export default LandingPage;