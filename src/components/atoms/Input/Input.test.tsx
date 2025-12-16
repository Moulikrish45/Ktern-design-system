import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Input } from './Input'

describe('Input', () => {
    describe('Rendering', () => {
        it('renders as an input element', () => {
            render(<Input />)
            const input = screen.getByRole('textbox')
            expect(input).toBeInTheDocument()
            expect(input.tagName).toBe('INPUT')
        })

        it('renders with placeholder', () => {
            render(<Input placeholder="Enter text" />)
            const input = screen.getByPlaceholderText('Enter text')
            expect(input).toBeInTheDocument()
        })

        it('applies custom className', () => {
            render(<Input className="custom-input" />)
            const input = screen.getByRole('textbox')
            expect(input).toHaveClass('custom-input')
        })
    })

    describe('Input Types', () => {
        it('renders as email input when type is email', () => {
            render(<Input type="email" />)
            const input = screen.getByRole('textbox')
            expect(input).toHaveAttribute('type', 'email')
        })

        it('renders as password input when type is password', () => {
            render(<Input type="password" />)
            const input = document.querySelector('input[type="password"]')
            expect(input).toBeInTheDocument()
        })

        it('renders as number input when type is number', () => {
            render(<Input type="number" />)
            const input = document.querySelector('input[type="number"]')
            expect(input).toBeInTheDocument()
        })
    })

    describe('Value and Change Handling', () => {
        it('accepts controlled value', () => {
            render(<Input value="test value" onChange={() => { }} />)
            const input = screen.getByRole('textbox') as HTMLInputElement
            expect(input.value).toBe('test value')
        })

        it('calls onChange when value changes', async () => {
            const handleChange = vi.fn()
            const user = userEvent.setup()

            render(<Input onChange={handleChange} />)
            const input = screen.getByRole('textbox')

            await user.type(input, 'Hello')
            expect(handleChange).toHaveBeenCalled()
        })

        it('updates value on user input', async () => {
            const user = userEvent.setup()
            render(<Input />)
            const input = screen.getByRole('textbox') as HTMLInputElement

            await user.type(input, 'Test input')
            expect(input.value).toBe('Test input')
        })
    })

    describe('Disabled State', () => {
        it('is disabled when disabled prop is true', () => {
            render(<Input disabled />)
            const input = screen.getByRole('textbox')
            expect(input).toBeDisabled()
        })

        it('does not accept input when disabled', async () => {
            const user = userEvent.setup()
            render(<Input disabled />)
            const input = screen.getByRole('textbox') as HTMLInputElement

            await user.type(input, 'Should not type')
            expect(input.value).toBe('')
        })

        it('does not call onChange when disabled', async () => {
            const handleChange = vi.fn()
            const user = userEvent.setup()

            render(<Input disabled onChange={handleChange} />)
            const input = screen.getByRole('textbox')

            await user.type(input, 'Test')
            expect(handleChange).not.toHaveBeenCalled()
        })
    })

    describe('Required State', () => {
        it('has required attribute when required prop is true', () => {
            render(<Input required />)
            const input = screen.getByRole('textbox')
            expect(input).toBeRequired()
        })
    })

    describe('ReadOnly State', () => {
        it('is readonly when readonly prop is true', () => {
            render(<Input readOnly />)
            const input = screen.getByRole('textbox')
            expect(input).toHaveAttribute('readonly')
        })

        it('does not accept input when readonly', async () => {
            const user = userEvent.setup()
            render(<Input readOnly value="Initial" />)
            const input = screen.getByRole('textbox') as HTMLInputElement

            await user.type(input, 'New text')
            expect(input.value).toBe('Initial')
        })
    })

    describe('Accessibility', () => {
        it('is keyboard accessible', async () => {
            const user = userEvent.setup()
            render(<Input />)
            const input = screen.getByRole('textbox')

            await user.tab()
            expect(input).toHaveFocus()
        })

        it('can be focused and blurred', () => {
            render(<Input />)
            const input = screen.getByRole('textbox')

            input.focus()
            expect(input).toHaveFocus()

            input.blur()
            expect(input).not.toHaveFocus()
        })

        it('supports name attribute for forms', () => {
            render(<Input name="username" />)
            const input = screen.getByRole('textbox')
            expect(input).toHaveAttribute('name', 'username')
        })

        it('supports id attribute', () => {
            render(<Input id="test-input" />)
            const input = screen.getByRole('textbox')
            expect(input).toHaveAttribute('id', 'test-input')
        })
    })

    describe('Forward Ref', () => {
        it('forwards ref correctly', () => {
            const ref = vi.fn()
            render(<Input ref={ref} />)
            expect(ref).toHaveBeenCalled()
        })

        it('allows imperative focus via ref', async () => {
            const user = userEvent.setup()
            const TestComponent = () => {
                const inputRef = React.useRef<HTMLInputElement>(null)

                return (
                    <>
                        <Input ref={inputRef} />
                        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
                    </>
                )
            }

            render(<TestComponent />)
            const button = screen.getByRole('button')
            const input = screen.getByRole('textbox')

            await user.click(button)
            expect(input).toHaveFocus()
        })
    })
})
