'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Loader2, Search, Filter, ClipboardList } from 'lucide-react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import toast from 'react-hot-toast';

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: string | null;
  createdAt: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');

  const fetchTasks = useCallback(async () => {
    try {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      
      if (res.ok) {
        setTasks(data.tasks);
      }
    } catch (error) {
      console.error('Fetch tasks error:', error);
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      const res = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
      
      if (res.ok) {
        toast.success('Task deleted');
        fetchTasks();
      } else {
        throw new Error('Failed to delete');
      }
    } catch {
      toast.error('Failed to delete task');
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    
    const matchesStatus = statusFilter === 'ALL' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'ALL' || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'PENDING').length,
    inProgress: tasks.filter(t => t.status === 'IN_PROGRESS').length,
    completed: tasks.filter(t => t.status === 'COMPLETED').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total Tasks</p>
          <p className="text-2xl font-bold text-gray-900">{taskStats.total}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 shadow-sm border border-yellow-200">
          <p className="text-sm text-yellow-700">Pending</p>
          <p className="text-2xl font-bold text-yellow-800">{taskStats.pending}</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 shadow-sm border border-blue-200">
          <p className="text-sm text-blue-700">In Progress</p>
          <p className="text-2xl font-bold text-blue-800">{taskStats.inProgress}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 shadow-sm border border-green-200">
          <p className="text-sm text-green-700">Completed</p>
          <p className="text-2xl font-bold text-green-800">{taskStats.completed}</p>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-8 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white appearance-none cursor-pointer text-gray-900"
              aria-label="Filter by status"
            >
              <option value="ALL">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white appearance-none cursor-pointer text-gray-900"
            aria-label="Filter by priority"
          >
            <option value="ALL">All Priority</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Add Task</span>
          </button>
        </div>
      </div>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-16">
          <ClipboardList className="mx-auto h-16 w-16 text-gray-300" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {tasks.length === 0 ? 'No tasks yet' : 'No matching tasks'}
          </h3>
          <p className="mt-2 text-gray-500">
            {tasks.length === 0 
              ? 'Get started by creating your first task.'
              : 'Try adjusting your search or filters.'}
          </p>
          {tasks.length === 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Create Task
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={fetchTasks}
        task={editingTask}
      />
    </div>
  );
}
