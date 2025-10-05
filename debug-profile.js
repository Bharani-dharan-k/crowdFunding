// Debug script for testing profile image functionality
// Run this in the browser console

const debugProfile = async () => {
  const token = localStorage.getItem('token');
  
  try {
    console.log('Testing profile fetch...');
    const response = await fetch('http://localhost:5000/api/campaigns/debug-profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    console.log('Debug profile data:', data);
    
    console.log('Testing image URL...');
    if (data.profilePicture) {
      const imageUrl = `http://localhost:5000${data.profilePicture}`;
      console.log('Full image URL:', imageUrl);
      
      // Test if image loads
      const img = new Image();
      img.onload = () => console.log('✅ Image loads successfully!');
      img.onerror = () => console.log('❌ Image failed to load');
      img.src = imageUrl;
    } else {
      console.log('No profile picture found');
    }
    
  } catch (error) {
    console.error('Debug error:', error);
  }
};

// Run the debug
debugProfile();