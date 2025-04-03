const YouTube = require('../models/youtubeModel');

const youtubeController = {
  createYouTube: async (req, res) => {
    try {
      const youtube = new YouTube(req.body);
      await youtube.save();
      res.status(201).json(youtube);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllYouTube: async (req, res) => {
    try {
      const youtubes = await YouTube.find();
      res.json(youtubes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getYouTubeById: async (req, res) => {
    try {
      const youtube = await YouTube.findById(req.params.id);
      if (!youtube) {
        return res.status(404).json({ message: 'YouTube record not found' });
      }
      res.json(youtube);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateYouTube: async (req, res) => {
    try {
      const youtube = await YouTube.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!youtube) {
        return res.status(404).json({ message: 'YouTube record not found' });
      }
      res.json(youtube);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteYouTube: async (req, res) => {
    try {
      const youtube = await YouTube.findByIdAndDelete(req.params.id);
      if (!youtube) {
        return res.status(404).json({ message: 'YouTube record not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = youtubeController;