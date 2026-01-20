/// <reference types="jest" />
import { registerSchema, loginSchema, taskSchema } from '../src/lib/validations';

describe('Validation Schemas', () => {
  describe('registerSchema', () => {
    it('should validate a correct registration input', () => {
      const validInput = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password1!',
      };
      
      const result = registerSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it('should reject short name', () => {
      const invalidInput = {
        name: 'J',
        email: 'john@example.com',
        password: 'Password1!',
      };
      
      const result = registerSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it('should reject invalid email', () => {
      const invalidInput = {
        name: 'John Doe',
        email: 'not-an-email',
        password: 'Password1!',
      };
      
      const result = registerSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it('should reject short password', () => {
      const invalidInput = {
        name: 'John Doe',
        email: 'john@example.com',
        password: '12345',
      };
      
      const result = registerSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });
  });

  describe('loginSchema', () => {
    it('should validate a correct login input', () => {
      const validInput = {
        email: 'john@example.com',
        password: 'Password1!',
      };
      
      const result = loginSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email', () => {
      const invalidInput = {
        email: 'not-an-email',
        password: 'Password1!',
      };
      
      const result = loginSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it('should reject empty password', () => {
      const invalidInput = {
        email: 'john@example.com',
        password: '',
      };
      
      const result = loginSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });
  });

  describe('taskSchema', () => {
    it('should validate a minimal task input', () => {
      const validInput = {
        title: 'My Task',
      };
      
      const result = taskSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it('should validate a complete task input', () => {
      const validInput = {
        title: 'My Task',
        description: 'This is a description',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        dueDate: '2026-01-25',
      };
      
      const result = taskSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it('should reject empty title', () => {
      const invalidInput = {
        title: '',
      };
      
      const result = taskSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it('should reject invalid status', () => {
      const invalidInput = {
        title: 'My Task',
        status: 'INVALID_STATUS',
      };
      
      const result = taskSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });

    it('should reject invalid priority', () => {
      const invalidInput = {
        title: 'My Task',
        priority: 'INVALID_PRIORITY',
      };
      
      const result = taskSchema.safeParse(invalidInput);
      expect(result.success).toBe(false);
    });
  });
});
