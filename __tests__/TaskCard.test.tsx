import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from '@/components/TaskCard';

const mockTask = {
  id: '1',
  title: 'Test Task',
  description: 'This is a test description',
  status: 'PENDING' as const,
  priority: 'MEDIUM' as const,
  dueDate: '2026-02-01T00:00:00.000Z',
  createdAt: '2026-01-20T00:00:00.000Z',
};

const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

describe('TaskCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders task title', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('renders task description', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('renders status badge', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('renders priority indicator', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('Medium')).toBeInTheDocument();
  });

  it('renders due date', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('Feb 1, 2026')).toBeInTheDocument();
  });

  it('renders edit and delete buttons', () => {
    render(
      <TaskCard task={mockTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByLabelText('Edit task')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete task')).toBeInTheDocument();
  });

  it('shows overdue indicator for past due tasks', () => {
    const overdueTask = {
      ...mockTask,
      dueDate: '2024-01-01T00:00:00.000Z',
    };
    
    render(
      <TaskCard task={overdueTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    expect(screen.getByText('(Overdue)')).toBeInTheDocument();
  });

  it('applies strikethrough for completed tasks', () => {
    const completedTask = {
      ...mockTask,
      status: 'COMPLETED' as const,
    };
    
    render(
      <TaskCard task={completedTask} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );
    
    const title = screen.getByText('Test Task');
    expect(title).toHaveClass('line-through');
  });
});
