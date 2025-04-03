const Account = require('../models/accountModel');

const accountController = {
  createAccount: async (req, res) => {
    try {
      const account = new Account(req.body);
      await account.save();
      res.status(201).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAccounts: async (req, res) => {
    try {
      const accounts = await Account.find();
      res.json(accounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAccountById: async (req, res) => {
    try {
      const account = await Account.findById(req.params.id);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.json(account);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAccount: async (req, res) => {
    try {
      const account = await Account.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const account = await Account.findByIdAndDelete(req.params.id);
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = accountController;