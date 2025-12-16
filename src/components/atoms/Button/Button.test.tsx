import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
    describe('Rendering', () => {
        it('renders as a button element by default', () => {
            render(<Button>Click me</Button>)
            const button = screen.getByRole('button', { name: /click me/i })
            expect(button).toBeInTheDocument()
            expect(button.tagName).toBe('BUTTON')
        })

        it('renders children correctly', () => {
            render(<Button>Test Content</Button>)
            expect(screen.getByText('Test Content')).toBeInTheDocument()
        })

        it('applies custom className', () => {
            render(<Button className="custom-class">Button</Button>)
            const button = screen.getByRole('button')
            expect(button).toHaveClass('custom-class')
        })
    })

    describe('Variants', () => {
        it('renders primary variant correctly', () => {
            render(<Button variant="primary">Primary</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })

        it('renders secondary variant correctly', () => {
            render(<Button variant="secondary">Secondary</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })

        it('renders hero variant correctly', () => {
            render(<Button variant="hero">Hero</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })

        it('renders outline variant correctly', () => {
            render(<Button variant="outline">Outline</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })

        it('renders ghost variant correctly', () => {
            render(<Button variant="ghost">Ghost</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })

        it('renders link variant correctly', () => {
            render(<Button variant="link">Link</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })
    })

    describe('Sizes', () => {
        it('renders with default size', () => {
            render(<Button size="default">Default</Button>)
            expect(screen.getByRole('button')).toBeInTheDocument()
        })

        it('renders with sm size', () => {
            render(<Button size="sm">Small</Button>)
            expect(screen.getByRole('button')).toBeInTheDocument()
        })

        it('renders with lg size', () => {
            render(<Button size="lg">Large</Button>)
            expect(screen.getByRole('button')).toBeInTheDocument()
        })

        it('renders with icon size', () => {
            render(<Button size="icon">Icon</Button>)
            expect(screen.getByRole('button')).toBeInTheDocument()
        })
    })

    describe('Interaction', () => {
        it('calls onClick when clicked', async () => {
            const handleClick = vi.fn()
            const user = userEvent.setup()

            render(<Button onClick={handleClick}>Click me</Button>)
            const button = screen.getByRole('button')

            await user.click(button)
            expect(handleClick).toHaveBeenCalledTimes(1)
        })

        it('does not call onClick when disabled', async () => {
            const handleClick = vi.fn()
            const user = userEvent.setup()

            render(<Button onClick={handleClick} disabled>Disabled</Button>)
            const button = screen.getByRole('button')

            await user.click(button)
            expect(handleClick).not.toHaveBeenCalled()
        })

        it('has disabled attribute when disabled prop is true', () => {
            render(<Button disabled>Disabled</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeDisabled()
        })
    })

    describe('Polymorphism (asChild)', () => {
        it('renders as Slot when asChild is true', () => {
            const { container } = render(
                <Button asChild>
                    <a href="/test">Link Button</a>
                </Button>
            )

            // Should render as anchor, not button
            const link = screen.getByRole('link', { name: /link button/i })
            expect(link).toBeInTheDocument()
            expect(link.tagName).toBe('A')
            expect(link).toHaveAttribute('href', '/test')
        })

        it('works with all variants when asChild is true', () => {
            const { rerender } = render(
                <Button variant="primary" asChild>
                    <a href="/">Primary Link</a>
                </Button>
            )
            expect(screen.getByRole('link')).toBeInTheDocument()

            rerender(
                <Button variant="hero" asChild>
                    <a href="/">Hero Link</a>
                </Button>
            )
            expect(screen.getByRole('link')).toBeInTheDocument()

            rerender(
                <Button variant="secondary" asChild>
                    <a href="/">Secondary Link</a>
                </Button>
            )
            expect(screen.getByRole('link')).toBeInTheDocument()
        })
    })

    describe('Accessibility', () => {
        it('can have custom type attribute', () => {
            render(<Button type="submit">Submit</Button>)
            const button = screen.getByRole('button')
            expect(button).toHaveAttribute('type', 'submit')
        })

        it('is keyboard accessible', async () => {
            const handleClick = vi.fn()
            const user = userEvent.setup()

            render(<Button onClick={handleClick}>Keyboard</Button>)
            const button = screen.getByRole('button')

            button.focus()
            expect(button).toHaveFocus()

            await user.keyboard('{Enter}')
            expect(handleClick).toHaveBeenCalled()
        })
    })

    describe('Forward Ref', () => {
        it('forwards ref correctly', () => {
            const ref = vi.fn()
            render(<Button ref={ref}>Button</Button>)
            expect(ref).toHaveBeenCalled()
        })
    })
})
