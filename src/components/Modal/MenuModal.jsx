import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const MenuModal = ({handleAuthMenu, handleLogout}) => {
    const {user} = useAuth()

  return createPortal (
    <div>
        <div 
            className=' bg-black opacity-80 blur-2xl fixed inset-0 z-40'
            onClick={handleAuthMenu}
        >
        </div>
        <div 
            className='hidden md:block w-[200px]  bg-white border rounded-lg border-gray-300 shadow-lg fixed top-24 right-10 z-50'
            >
            {user ? (
                <ul className='flex flex-col w-full my-6 px-4'>
                    <Link 
                        className='hover:bg-[#be123c] hover:text-white w-full text-center cursor-pointer p-2 rounded-lg'
                        onClick={() => handleLogout()}
                    >
                        Log out
                    </Link>
                    <Link
                        to={`/${user.uid}`}
                        className='hover:bg-[#be123c] hover:text-white w-full text-center cursor-pointer p-2 rounded-lg'
                        onClick={handleLogout}
                    >
                        My profile
                    </Link>
                </ul> 
            ) : (
                <ul className='flex flex-col gap-2 w-full my-6 px-4'>
                    <Link 
                        to='/login' 
                        className='w-full text-center cursor-pointer hover:bg-[#be123c] hover:text-white p-2 rounded-lg'
                        onClick={handleAuthMenu}
                    >
                        Log in
                    </Link>
                    <Link 
                        to='/register' 
                        className='w-full text-center cursor-pointer hover:bg-[#be123c] hover:text-white p-2 rounded-lg'
                        onClick={handleAuthMenu}
                    >
                        Register
                    </Link>                
            </ul>
            )}
        </div>
    </div>,
    document.getElementById('portal')
  )
}

export default MenuModal