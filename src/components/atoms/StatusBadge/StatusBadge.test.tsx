import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge', () => {
describe('Rendering', () => {
it('renders correctly', () => {
render(<StatusBadge>Test Content</StatusBadge>);
expect(screen.getByText('Test Content')).toBeInTheDocument();
});

it('applies custom className', () => {
const { container } = render(
<StatusBadge className="custom-class">Content</StatusBadge>
);
expect(container.firstChild).toHaveClass('custom-class');
});

it('renders children correctly', () => {
render(
<StatusBadge>
    <span data-testid="child">Child Element</span>
</StatusBadge>
);
expect(screen.getByTestId('child')).toBeInTheDocument();
});
});

describe('Variants', () => {
it('renders default variant', () => {
const { container } = render(<StatusBadge variant="default">Default</StatusBadge>);
expect(container.firstChild).toBeInTheDocument();
});

it('renders outline variant', () => {
const { container } = render(<StatusBadge variant="outline">Outline</StatusBadge>);
expect(container.firstChild).toBeInTheDocument();
});
});

describe('Accessibility', () => {
it('forwards ref correctly', () => {
const ref = vi.fn();
render(<StatusBadge ref={ref}>Content</StatusBadge>);
expect(ref).toHaveBeenCalled();
});

it('passes through HTML attributes', () => {
const { container } = render(
<StatusBadge data-testid="test-id" aria-label="Test Label">
    Content
</StatusBadge>
);
expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
expect(container.firstChild).toHaveAttribute('aria-label', 'Test Label');
});
});
});