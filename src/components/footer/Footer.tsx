import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8 mt-8 sm:mt-12 lg:px-8 lg:mt-16 border-t border-gray-900/10 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
            <img className="h-7" src="/favicon.ico" alt="PDF.ai 徽标"></img>
            <div className="text-sm leading-6 text-gray-600"><p>与任何 PDF 聊天：提出问题、获取摘要、查找信息等。</p></div>
            <div className="flex space-x-6">
            <a href="https://www.tiktok.com/@pdfai" className="text-gray-400 hover:text-gray-500" target="_blank"><Facebook /></a>
            <a href="https://www.tiktok.com/@pdfai" className="text-gray-400 hover:text-gray-500" target="_blank"><Instagram /></a>
            <a href="https://www.tiktok.com/@pdfai" className="text-gray-400 hover:text-gray-500" target="_blank"><Twitter /></a>
            <a href="https://www.tiktok.com/@pdfai" className="text-gray-400 hover:text-gray-500" target="_blank"><Youtube /></a>
            </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    <div>
                        <h3 className='text-sm font-semibold leading-6 text-gray-900'>产品</h3>
                        <ul className='mt-6 space-y-4 list-none p-0'>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                    <h3 className='text-sm font-semibold leading-6 text-gray-900'>产品</h3>
                        <ul className='mt-6 space-y-4 list-none p-0'>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                    <h3 className='text-sm font-semibold leading-6 text-gray-900'>产品</h3>
                        <ul className='mt-6 space-y-4 list-none p-0'>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                            <li className="p-0 m-0"><a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">用例</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
  )
}
