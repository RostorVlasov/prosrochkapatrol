import { tv } from 'tailwind-variants'

export const input = tv({
    base: ' transition-colors outline-0 w-full px-3 py-2 rounded-md',
    variants: {
        intent: {
            normal: 'border-border-input border-2 dark:border-0 border-beige-300 focus:border-beige-500',
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
    base: 'text-sm w-full rounded-md border-2 px-3 py-2 dark:border-1 focus:outline-none focus:border-beige-500',
    variants: {
        fill: {
            base: 'dark:bg-transparent bg-white border-beige-400'
        }
    },
    defaultVariants: { fill: 'base' }
})