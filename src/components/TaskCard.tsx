'use client';

import { Edit2, Trash2, Calendar, Flag } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: string | null;
  createdAt: string;
}

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const statusConfig = {
  PENDING: {
    label: 'Pending',
    className: 'bg-yellow-100 text-yellow-800',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    className: 'bg-blue-100 text-blue-800',
  },
  COMPLETED: {
    label: 'Completed',
    className: 'bg-green-100 text-green-800',
  },
};

const priorityConfig = {
  LOW: {
    label: 'Low',
    className: 'text-gray-500',
  },
  MEDIUM: {
    label: 'Medium',
    className: 'text-orange-500',
  },
  HIGH: {
    label: 'High',
    className: 'text-red-500',
  },
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const status = statusConfig[task.status];
  const priority = priorityConfig[task.priority];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED';

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${isOverdue ? 'border-red-300' : 'border-gray-200'} p-5 hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-gray-900 ${task.status === 'COMPLETED' ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Edit task"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>
          {status.label}
        </span>
        
        <div className={`flex items-center gap-1 text-xs font-medium ${priority.className}`}>
          <Flag size={14} />
          {priority.label}
        </div>

        {task.dueDate && (
          <div className={`flex items-center gap-1 text-xs ${isOverdue ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
            <Calendar size={14} />
            {formatDate(task.dueDate)}
            {isOverdue && <span className="ml-1">(Overdue)</span>}
          </div>
        )}
      </div>
    </div>
  );
}
