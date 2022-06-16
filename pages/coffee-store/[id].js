import { useRouter } from "next/router";
import Link from "next/link";


const CoffeeStore = () => {
    const router = useRouter();
    console.log(router)
    const { id } = router.query;
    return (
        <div>
            Coffee Store Page {id}
            <Link href="/">
                 <a>Home</a>
             </Link>
        </div>
    );
}

export default CoffeeStore;