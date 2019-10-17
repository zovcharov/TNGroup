import React, { useEffect } from 'react'

export const useClickOutsideToClose = (ref, onClose, initialValue = []) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('click', handleClickOutside, false)
        document.addEventListener('contextmenu', handleClickOutside, false)
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
            document.removeEventListener('contextmenu', handleClickOutside, false)
        }
    }, initialValue)
}