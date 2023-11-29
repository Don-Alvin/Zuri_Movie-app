import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
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
        {/* small screen menu */}
        <div className='lg:hidden bg-white w-[70%] fixed top-0 right-0 z-40 h-screen px-6 py-4 flex flex-col gap-6 text-xl'>
            <div className='bg-[#be123c] w-fit p-2 text-white rounded-full text-xl h-fit self-end flex justify-center' onClick={handleAuthMenu}>
                <AiOutlineClose className='bg-[#E11D48] rounded-full shadow-lg' />
            </div>
            <div className='text-[#111827] font-medium'>
                {user ? (
                    <ul className='flex flex-col gap-3'>
                        <li  onClick={handleAuthMenu} className='flex flex-col gap-3'>
                          <Link onClick={handleAuthMenu}  to='/movies'>Movies</Link>
                          <Link onClick={handleAuthMenu}  to='/series'>Series</Link>  
                        </li>
                        <li onClick={() => handleLogout()}>Log out</li>
                        <li>
                            <Link onClick={handleAuthMenu}  to={`/dashboard/${user.uid}`}>My profile</Link>
                        </li>
                    </ul>
                ): (
                    <ul className='flex flex-col gap-3'>
                        <li className='flex flex-col gap-3'>
                          <Link onClick={handleAuthMenu} to='/movies'>Movies</Link>
                          <Link onClick={handleAuthMenu} to='/tv'>Series</Link>  
                        </li>
                        <li className='flex flex-col gap-3'>
                          <Link onClick={handleAuthMenu} to='/login'>Log in</Link>
                          <Link onClick={handleAuthMenu} to='/register'>Register</Link>  
                        </li>
                    </ul>
                )}
            </div>
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
                        to={`dashboard/${user.uid}`}
                        className='hover:bg-[#be123c] hover:text-white w-full text-center cursor-pointer p-2 rounded-lg'
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