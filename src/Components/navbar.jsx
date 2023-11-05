import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Navbar=()=>{
 const amount = useSelector((store)=>store.cart.amount)

    return(
        <>
            <nav className='flex justify-between bg-blue-400 p-4'>
                <h2>Redux Toolkit</h2>
                <div>
                    <div className='relative'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div className='rounded-lg w-[15px] h-[15px] bg-white absolute text-[12px]  flex justify-center items-center
                        text-center bottom-[14px] left-[10px]'>
                            {amount}
                        </div>
                    </div>

                </div>
               

            </nav>
        </>
    )
}
export default Navbar