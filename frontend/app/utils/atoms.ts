import { tv } from 'tailwind-variants'

export const input = tv({
    base: ' transition-colors outline-0 w-full px-6 p-2 rounded-md',
    variants: {
        intent: {
            normal: 'border-border-input focus:border-blue-500',
            error: 'border-red-500 focus:border-red-600',
            success: 'border-green-500 focus:border-green-600',
            disabled: 'border-gray-600 bg-gray-800 cursor-not-allowed',
        },
        size: {
            sm: 'text-sm',
            md: 'text-base',
        },
        fill: {
            transparent: 'bg-transparent',
            subtle: 'bg-surface-secondary',
            solid: 'dark:bg-gray-600 bg-white',
        },
    },
    defaultVariants: { intent: 'normal', size: 'md', fill: 'solid' },
})

export const select = tv({
    base: 'border text-sm w-full  rounded-md p-2 focus:outline-none focus:border-blue-500',
    variants: {
        fill: {
            base: 'dark:bg-transparent bg-white border-gray-300'
        }
    },
    defaultVariants: { fill: 'base' }
})