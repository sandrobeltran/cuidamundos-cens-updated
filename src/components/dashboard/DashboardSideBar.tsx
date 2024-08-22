import React from 'react'
import NavbarLink from '../header/NavbarLink'
import Link from 'next/link'

const DashboardSideBar = () => {
  return (
    <nav className='col-span-3 bg-white h-full p-4 flex flex-col gap-4'>
        <Link href={"/admin/panel"} className='text-stone-500 hover:underline'>Inicio</Link>
        <Link href={"/admin/panel/evidencias"} className='text-stone-500 hover:underline'>Evidencias</Link>
    </nav>
  )
}

export default DashboardSideBar