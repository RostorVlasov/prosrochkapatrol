'use client'

import React, { useEffect } from 'react'
import { useAuth } from '@payloadcms/ui'

const AvatarOverrideProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) return
    const updateAvatar = () => {
      const gravatarImg = document.querySelector('.gravatar-account') as HTMLImageElement | null
      gravatarImg?.classList.add('custom-avatar') // Добавляем класс для кастомного стиля
      if (gravatarImg && user.avatar) {
        let avatarUrl = ''
        
        if (typeof user.avatar === 'object' && 'url' in user.avatar) {
          avatarUrl = user.avatar.url
        } else {
          avatarUrl = `/api/media/file/${user.avatar}`
        }

        if (gravatarImg.src !== avatarUrl) {
          gravatarImg.src = avatarUrl
          gravatarImg.alt = user.name || 'Аватар'
        }
      }
    }

    updateAvatar()

    const observer = new MutationObserver(updateAvatar)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [user])

  return <>{children}</>
}

export default AvatarOverrideProvider