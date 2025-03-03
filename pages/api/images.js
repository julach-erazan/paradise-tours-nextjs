// pages/api/images.js

export default async function handler(req, res) {
    const { region } = req.query;
  
    try {
      // Dummy data for demonstration (replace with actual data fetching logic)
      const images = [
        { url: '/path/to/image1.jpg', alt: 'Image 1' },
        { url: '/path/to/image2.jpg', alt: 'Image 2' },
        { url: '/path/to/image3.jpg', alt: 'Image 3' }
      ];
  
      // Simulate an asynchronous delay (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  }
  