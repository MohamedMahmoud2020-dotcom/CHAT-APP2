import React from 'react'
import { THEMES } from '../constants'
import { useThemeStore } from '../store/useThemeStore'
import { Send } from "lucide-react";

const SettingsPage = () => {
  const {theme, setTheme} = useThemeStore()
  return (
    <div className='px-64 py-4'>
      <h1 className="text-lg font-semibold mb-2">Theme</h1>
      <p className="text-sm text-base-content/70 mb-2">Choose a theme for your chat interface</p>
      <div className='grid grid-cols-8 gap-2'>
        {THEMES.map((t) => (
            <button className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `} onClick={() => setTheme(t)}>
              <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
        ))}
      </div>
      <h1 className='mb-4 text-lg font-semibold'>Preview</h1>
      <div className='bg-base-200 border border-base-300 p-4 rounded-xl'>
        <div className='bg-base-100 px-4 py-2 w-1/2 m-auto rounded-xl border-b border-base-300'>
          <div className='flex gap-2 items-center border-b border-base-300'>
            <div className='w-8 h-8 rounded-full bg-primary flex justify-center items-center'>J</div>
            <div className='flex flex-col pb-2'>
              <h3>John Doe</h3>
              <p className='text-xs text-base-content/70'>Online</p>
            </div>
          </div>
          <div className='flex flex-col text-primary-content'>
            <div className='bg-base-200 w-fit p-2 rounded-lg mt-4 flex flex-col'>
              <span>Hey! How's it going?</span>
              <span className='text-[10px]'>12:00 PM</span>
            </div>
            <div className='bg-primary w-fit p-4 rounded-lg mt-4 self-end flex flex-col'>
              <span>I'm doing great! just working on some new featurs</span>
              <span className='text-[10px]'>12:00 PM</span>
            </div>
          </div>
          <div className='border-t border-base-300 mt-4 flex py-2 items-center'>
            <div className='border border-base-300 self-stretch flex-1 px-4 py-2 mr-2 flex items-center text-sm'>
              This is a preview
            </div>
            <div className='px-4 py-4 bg-primary flex justify-center items-center'>
              <Send className='size-5'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage