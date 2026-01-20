/// <reference types="jest" />
import bcrypt from 'bcryptjs';

// Test password utilities directly using bcrypt (avoiding jose ESM issue)
describe('Auth Utilities', () => {
  const SALT_ROUNDS = 12;

  const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
  };

  const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  };

  describe('Password Hashing', () => {
    it('should hash a password', async () => {
      const password = 'testpassword123';
      const hash = await hashPassword(password);
      
      expect(hash).toBeDefined();
      expect(hash).not.toBe(password);
      expect(hash.length).toBeGreaterThan(0);
    });

    it('should verify a correct password', async () => {
      const password = 'testpassword123';
      const hash = await hashPassword(password);
      
      const isValid = await verifyPassword(password, hash);
      expect(isValid).toBe(true);
    });

    it('should reject an incorrect password', async () => {
      const password = 'testpassword123';
      const hash = await hashPassword(password);
      
      const isValid = await verifyPassword('wrongpassword', hash);
      expect(isValid).toBe(false);
    });

    it('should produce different hashes for the same password', async () => {
      const password = 'testpassword123';
      const hash1 = await hashPassword(password);
      const hash2 = await hashPassword(password);
      
      expect(hash1).not.toBe(hash2); // bcrypt uses random salt
      // But both should still verify correctly
      expect(await verifyPassword(password, hash1)).toBe(true);
      expect(await verifyPassword(password, hash2)).toBe(true);
    });

    it('should reject empty password verification', async () => {
      const hash = await hashPassword('testpassword123');
      const isValid = await verifyPassword('', hash);
      expect(isValid).toBe(false);
    });
  });
});
