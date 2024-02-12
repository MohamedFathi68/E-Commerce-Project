import React from 'react'
import './NotFound.module.css'
import errImg from './../../assets/404.png'

export default function NotFound() {
  return (
    <div className='w-50 m-auto '><img className='w-100 ' src={errImg} alt="Error 404 - not found" /></div>
  )
}
