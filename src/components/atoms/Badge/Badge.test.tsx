import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Badge } from './Badge';

describe('Badge', () => {
describe('Rendering', () => {
it('renders correctly', () => {
render(<Badge>Test Content</Badge>);
expect(screen.getByText('Test Content')).toBeInTheDocument();
});

it('applies custom className', () => {
const { container } = render(
<Badge className="custom-class">Content</Badge>
);
expect(container.firstChild).toHaveClass('custom-class');
});

it('renders children correctly', () => {
render(
<Badge>
    <span data-testid="child">Child Element</span>
</Badge>
);
expect(screen.getByTestId('child')).toBeInTheDocument();
});
});

describe('Variants', () => {
it('renders default variant', () => {
const { container } = render(<Badge variant="default">Default</Badge>);
expect(container.firstChild).toBeInTheDocument();
});

it('renders outline variant', () => {
const { container } = render(<Badge variant="outline">Outline</Badge>);
expect(container.firstChild).toBeInTheDocument();
});
});

describe('Accessibility', () => {
it('forwards ref correctly', () => {
const ref = vi.fn();
render(<Badge ref={ref}>Content</Badge>);
expect(ref).toHaveBeenCalled();
});

it('passes through HTML attributes', () => {
const { container } = render(
<Badge data-testid="test-id" aria-label="Test Label">
    Content
</Badge>
);
expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
expect(container.firstChild).toHaveAttribute('aria-label', 'Test Label');
});
});
});